import { ItemNode } from './ItemNode';
import { ModifierNode } from './ModifierNode';
import { OptionNode } from './OptionNode';
import { isModifierNode, isOptionNested, isOptionNode } from './typeguard';

export enum TreeActionType {
  BUILD_TREE = 'BUILD_TREE',
  DROP_TREE = 'DROP_TREE',
  SELECT_OPTION = 'SELECT_OPTION',
  UNSELECT_OPTION = 'UNSELECT_OPTION',
  SET_CURRENT_NODE = 'SET_CURRENT_NODE',
  ADD_TREE_NODES = 'ADD_TREE_NODES',
}

export type TreeAction =
  | BuildTree
  | DropTree
  | SelectOption
  | UnselectOption
  | SetCurrentNode
  | AddTreeNodes;

export type BuildTree = {
  type: TreeActionType.BUILD_TREE;
  item: MenuItemType;
  modifiers: Modifier[] | null;
};

export type DropTree = {
  type: TreeActionType.DROP_TREE;
};

export type SelectOption = {
  type: TreeActionType.SELECT_OPTION;
  key: string;
};

export type UnselectOption = {
  type: TreeActionType.UNSELECT_OPTION;
  key: string;
};

export type SetCurrentNode = {
  type: TreeActionType.SET_CURRENT_NODE;
  key: string;
};

export type AddTreeNodes = {
  type: TreeActionType.ADD_TREE_NODES;
  modifiers: Modifier[];
  optionKey: string;
};

export type Map = {
  [nodeId: string]: ItemNode | ModifierNode | OptionNode;
};

export class TreeState {
  private map: Map;

  private root?: ItemNode | OptionNode;

  private current?: ItemNode | OptionNode;

  constructor() {
    this.map = {};
  }

  public getRoot = () => this.root;

  public getCurrent = () => this.current;

  public getNode = (id: string) => this.map[id];

  public handleAction = (action: TreeAction) => {
    switch (action.type) {
      case TreeActionType.BUILD_TREE: {
        const { item, modifiers } = action;

        const node = this.createTreeRoot(item);
        this.root = node;
        this.current = node;

        if (modifiers) this.createModifierNodes(modifiers, node.getKey());

        console.log(this.map);

        return;
      }

      case TreeActionType.DROP_TREE: {
        this.map = {};
        this.root = undefined;
        this.current = undefined;

        return;
      }

      case TreeActionType.SELECT_OPTION: {
        const { key } = action;

        const optionNode = this.getNode(key);

        if (!(optionNode instanceof OptionNode))
          throw new Error('This is not a valid option node');

        optionNode.select();

        if (optionNode.getIsNested()) this.current = optionNode;

        return;
      }

      case TreeActionType.UNSELECT_OPTION: {
        const { key } = action;

        const optionNode = this.getNode(key);

        if (!(optionNode instanceof OptionNode))
          throw new Error('This is not a valid option node');

        optionNode.unselect();

        return;
      }

      case TreeActionType.SET_CURRENT_NODE: {
        const { key } = action;

        const node = this.getNode(key);

        if (isModifierNode(node))
          throw new Error('isModifierNode cannot be set to currentNode');

        this.current = node;

        return;
      }

      case TreeActionType.ADD_TREE_NODES: {
        const { modifiers, optionKey } = action;

        const node = this.getNode(optionKey);

        if (!isOptionNode(node) || node.getIsFulfilled()) return;
        console.log(modifiers, node);
        node.setIsFulfilled(true);

        this.createModifierNodes(modifiers, optionKey);

        return;
      }

      default: {
        return;
      }
    }
  };

  private createTreeRoot = (item: MenuItemType) => {
    const root = new ItemNode(item);

    this.setNode(root);

    return root;
  };

  private createModifierNodes = (modifiers: Modifier[], parentKey: string) => {
    modifiers.forEach((modifier) => {
      const { groupId, isRequired, maxSelection, minSelection, name, options } =
        modifier;

      const parent = this.getNode(parentKey);

      const modifierNode = new ModifierNode({
        key: `${parentKey}-m${groupId}`,
        groupId,
        isRequired,
        maxSelection,
        minSelection,
        name,
        parent: !isModifierNode(parent) ? parent : undefined,
      });

      this.setNode(modifierNode);

      this.createOptionNodes(options, modifierNode.getKey());
    });
  };

  private createOptionNodes = (
    options: (ModifierOption | NestedOption)[],
    parentKey: string,
  ) => {
    options.forEach((option) => {
      const isNested = isOptionNested(option);

      const id = isNested
        ? (option as NestedOption).groupId
        : (option as ModifierOption).optionId;
      const key = isNested ? `${parentKey}-n${id}` : `${parentKey}-o${id}`;

      const parentNode = this.getNode(parentKey);
      const parent = isModifierNode(parentNode) ? parentNode : undefined;

      const name = option.name;
      const price = option.price;

      this.setNode(new OptionNode({ key, id, name, price, parent, isNested }));
    });
  };

  private setNode = (node: ItemNode | ModifierNode | OptionNode) => {
    this.map[node.getKey()] = node;
  };
}
