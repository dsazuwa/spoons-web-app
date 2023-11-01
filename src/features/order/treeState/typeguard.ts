import { ItemNode } from './ItemNode';
import { ModifierNode } from './ModifierNode';
import { OptionNode } from './OptionNode';

type Node = OptionNode | ItemNode | ModifierNode;

export const isItemNode = (node?: Node): node is ItemNode => {
  if (!node) return false;
  return node instanceof ItemNode;
};

export const isModifierNode = (node?: Node): node is ModifierNode => {
  if (!node) return false;
  return node instanceof ModifierNode;
};

export const isOptionNode = (node?: Node): node is OptionNode => {
  if (!node) return false;
  return node instanceof OptionNode;
};

export const isOptionNested = (option: ModifierOption | NestedOption) =>
  'groupId' in option;
