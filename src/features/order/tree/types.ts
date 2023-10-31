/* eslint-disable @typescript-eslint/no-unused-vars */

type TreeMap = {
  [nodeId: string]: ItemNode | ModifierNode | OptionNode;
};

type ItemNode = {
  itemId: number;
  key: string;
  name: string;
  description?: string;
  photoUrl: string;
  modifiers: ModifierNode[];
  isValid: boolean;
};

type ModifierNode = {
  key: string;
  groupId: number;
  isRequired: boolean;
  minSelection: number;
  maxSelection: number;
  name: string;
  parent?: ItemNode | OptionNode;
  children: OptionNode[];
  isValid: boolean;
};

type OptionNode = {
  key: string;
  id: number;
  name: string;
  price?: number;
  parent?: ModifierNode;
  children: ModifierNode[];
  isFulfilled: boolean;
  isNested: boolean;
  isSelected: boolean;
  isValid: boolean;
};
