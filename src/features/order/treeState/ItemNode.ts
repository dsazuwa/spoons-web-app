import { ModifierNode } from './ModifierNode';

export class ItemNode {
  private itemId: number;

  private key: string;

  private name: string;

  private description?: string;

  private price: number;

  private photoUrl: string;

  private isValid: boolean;

  private children: ModifierNode[];

  constructor({ itemId, name, description, price, photoUrl }: MenuItemType) {
    this.itemId = itemId;
    this.key = `i${itemId}`;

    this.name = name;
    this.description = description;
    this.photoUrl = photoUrl;
    this.price = price || 0;

    this.children = [];
    this.isValid = false;
  }

  public getId = () => this.itemId;

  public getKey = () => this.key;

  public getName = () => this.name;

  public getDescription = () => this.description;

  public getPrice = () => this.price;

  public getPhotoUrl = () => this.photoUrl;

  public getIsValid = () => this.isValid;

  public getChildren = (): ModifierNode[] => this.children;

  public getSelectionPrice = () =>
    this.children.reduce((price, x) => price + x.getSelectionPrice(), 0);

  public addChild = (modifier: ModifierNode) => {
    this.children.push(modifier);
    this.validate();
  };

  public validate = () => {
    this.isValid = this.children.every((child) => child.getIsValid());
  };
}
