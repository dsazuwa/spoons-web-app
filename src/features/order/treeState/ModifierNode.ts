import { ItemNode } from './ItemNode';
import { OptionNode } from './OptionNode';

export type TModifierNode = {
  key: string;
  groupId: number;
  isRequired: boolean;
  minSelection: number;
  maxSelection: number;
  name: string;
  parent?: ItemNode | OptionNode;
};

export class ModifierNode {
  private key: string;

  private groupId: number;

  private isRequired: boolean;

  private minSelection: number;

  private maxSelection: number;

  private name: string;

  private isValid: boolean;

  private parent?: ItemNode | OptionNode;

  private children: OptionNode[];

  constructor({
    key,
    groupId,
    name,
    isRequired,
    minSelection,
    maxSelection,
    parent,
  }: TModifierNode) {
    this.key = key;
    this.groupId = groupId;
    this.name = name;
    this.isRequired = isRequired;
    this.minSelection = minSelection;
    this.maxSelection = maxSelection;

    this.children = [];
    this.isValid = false;

    if (parent) {
      this.parent = parent;
      parent.addChild(this);
    }
  }

  public getKey = () => this.key;

  public getId = () => this.groupId;

  public getIsRequired = () => this.isRequired;

  public getMinSelection = () => this.minSelection;

  public getMaxSelection = () => this.maxSelection;

  public getName = () => this.name;

  public getIsValid = () => this.isValid;

  public getParent = () => this.parent;

  public getChildren = () => this.children;

  public getSelectionPrice = () =>
    this.children.reduce(
      (price, x) => price + (x.getIsSelected() ? x.getPrice() || 0 : 0),
      0,
    );

  public addChild = (option: OptionNode) => {
    this.children.push(option);
    this.validate();
  };

  public satisfiesMin = (numSelected: number) => {
    return numSelected >= this.minSelection;
  };

  public satisfiesMax = (numSelected: number) => {
    return numSelected <= this.maxSelection;
  };

  public validate = () => {
    const numValid = this.children.filter(
      (option) => option.getIsSelected() && option.getIsValid(),
    ).length;

    this.isValid = this.satisfiesMin(numValid) && this.satisfiesMax(numValid);

    this.parent?.validate();
  };
}
