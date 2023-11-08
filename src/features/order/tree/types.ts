/* eslint-disable @typescript-eslint/no-unused-vars */

type TreeState = {
  map: TreeMap;
  root: ItemNode | OptionNode | undefined;
  current: ItemNode | OptionNode | undefined;
};

type TreeMap = {
  [nodeId: string]: ItemNode | ModifierNode | OptionNode;
};

type TBuildTree = {
  item: MenuItemType;
  modifiers: Modifier[];
};

type TAddTreeNodes = {
  parentKey: string;
  modifiers: Modifier[];
};

type TSetQuantity = {
  key: string;
  quantity: number;
};

type TMultiSelectOption = {
  key: string;
  index: number;
};

type ItemNode = {
  itemId: number;
  key: string;
  name: string;
  description?: string;
  price: number;
  photoUrl: string;
  children: string[]; //  ModifierNode[]
  isValid: boolean;
  quantity: number;
};

type ModifierNode = {
  key: string;
  groupId: number;
  isRequired: boolean;
  minSelection: number;
  maxSelection: number;
  name: string;
  parent: string; //  ItemNode | OptionNode
  children: string[]; //  OptionNode[]
  isValid: boolean;
};

type OptionNode = {
  key: string;
  id: number;
  name: string;
  price: number;
  parent: string; //  ModifierNode
  children: string[]; //  ModifierNode[]
  isFulfilled: boolean;
  isNested: boolean;
  isSelected: boolean;
  isValid: boolean;
};
