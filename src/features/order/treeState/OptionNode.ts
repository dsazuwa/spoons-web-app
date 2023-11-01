import { ModifierNode } from './ModifierNode';

export type TOptionNode = {
  key: string;
  id: number;
  name: string;
  price?: number;
  isNested: boolean;
  parent?: ModifierNode;
};

export type TOptionData = TOptionNode & {
  parentId: string;
};

export class OptionNode {
  private key: string;

  private id: number;

  private name: string;

  private price?: number;

  private parent?: ModifierNode;

  private children: ModifierNode[];

  private isNested: boolean;

  private isSelected: boolean;

  private isValid: boolean;

  private isFulfilled: boolean;

  constructor({ key, id, name, price, isNested, parent }: TOptionNode) {
    this.key = key;
    this.id = id;
    this.name = name;
    this.price = price;
    this.isNested = isNested;

    this.children = [];
    this.isSelected = false;
    this.isValid = false;
    this.isFulfilled = !isNested;

    if (parent) {
      this.parent = parent;
      parent.addChild(this);
    }
  }

  public getKey = () => this.key;

  public getId = () => this.id;

  public getName = () => this.name;

  public getPrice = () => this.price;

  public getParent = () => this.parent;

  public getChildren = () => this.children;

  public getIsNested = () => this.isNested;

  public getIsSelected = () => this.isSelected;

  public getIsValid = () => this.isValid;

  public getIsFulfilled = () => this.isFulfilled;

  public setIsFulfilled = (isFulfilled: boolean) =>
    (this.isFulfilled = isFulfilled);

  public addChild = (modifier: ModifierNode) => {
    this.children.push(modifier);
    this.validate();
  };

  public select = () => {
    if (this.parent?.getMaxSelection() === 1)
      this.parent?.getChildren().forEach((option: OptionNode) => {
        option.unselect();
      });

    this.isSelected = true;
    this.validate();
  };

  public unselect = () => {
    this.isSelected = false;
    this.validate();
  };

  public validate = () => {
    this.isValid = this.children.every((modifier) => modifier.getIsValid());
    this.parent?.validate();
  };
}