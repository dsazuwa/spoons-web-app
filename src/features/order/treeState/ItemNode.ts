import { ModifierNode } from './ModifierNode';

export class ItemNode {
  private itemId: number;

  private key: string;

  private name: string;

  private description?: string;

  private photoUrl: string;

  private isValid: boolean;

  private children: ModifierNode[];

  constructor({ itemId, name, description, photoUrl }: MenuItemType) {
    this.itemId = itemId;
    this.key = `i${itemId}`;

    this.name = name;
    this.description = description;
    this.photoUrl = photoUrl;

    this.children = [];
    this.isValid = false;
  }

  public getId = () => this.itemId;

  public getKey = () => this.key;

  public getName = () => this.name;

  public getDescription = () => this.description;

  public getPhotoUrl = () => this.photoUrl;

  public getIsValid = () => this.isValid;

  public getChildren = (): ModifierNode[] => this.children;

  public addChild = (modifier: ModifierNode) => {
    this.children.push(modifier);
    this.validate();
  };

  public validate = () => {
    this.isValid = this.children.every((child) => child.getIsValid());
  };
}
