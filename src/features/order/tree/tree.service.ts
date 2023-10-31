import { isModifierNode, isOptionNested } from './typeguard';

export const treeService = {
  createItemNode: (item: MenuItemType): ItemNode => {
    const { itemId, name, description, photoUrl } = item;

    return {
      itemId,
      name,
      description,
      photoUrl,
      key: `i${itemId}`,
      modifiers: [],
      isValid: false,
    };
  },

  createModifierNodes: (
    map: TreeMap,
    modifiers: Modifier[],
    parentKey: string,
  ) => {
    modifiers.forEach((modifier) => {
      const { groupId, isRequired, maxSelection, minSelection, name, options } =
        modifier;

      const parent = map[parentKey];

      const modifierNode: ModifierNode = {
        key: `${parentKey}-m${groupId}`,
        groupId,
        isRequired,
        maxSelection,
        minSelection,
        name,
        parent: !isModifierNode(parent) ? parent : undefined,
        children: [],
        isValid: false,
      };

      map[modifierNode.key] = modifierNode;

      treeService.createOptionNodes(map, options, modifierNode.key);
    });
  },

  createOptionNodes: (
    map: TreeMap,
    options: (ModifierOption | NestedOption)[],
    parentKey: string,
  ) => {
    options.forEach((option) => {
      const isNested = isOptionNested(option);

      const id = isNested ? option.groupId : option.optionId;
      const key = isNested ? `${parentKey}-n${id}` : `${parentKey}-o${id}`;

      const parentNode = map[parentKey];
      const parent = isModifierNode(parentNode) ? parentNode : undefined;

      const name = option.name;
      const price = option.price;

      const node: OptionNode = {
        key,
        id,
        name,
        price,
        parent,
        isNested,
        children: [],
        isFulfilled: !isNested,
        isSelected: false,
        isValid: false,
      };

      map[key] = node;
    });
  },
};
