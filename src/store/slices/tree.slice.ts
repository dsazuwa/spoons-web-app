import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  optionService,
  treeService,
  isModifierNode,
  isOptionNode,
} from '@features/order/tree';

/* eslint-disable  @typescript-eslint/no-unused-vars */

type TreeState = {
  map: TreeMap;
  root: ItemNode | OptionNode | undefined;
  current: ItemNode | OptionNode | undefined;
};

type TBuildTree = {
  item: MenuItemType;
  modifiers: Modifier[];
};

type TAddTreeNodes = {
  optionKey: string;
  modifiers: Modifier[];
};

const initialState: TreeState = {
  map: {},
  root: undefined,
  current: undefined,
};

export const treeSlice = createSlice({
  name: 'treeSlice',
  initialState,

  reducers: {
    buildTree: (state, action: PayloadAction<TBuildTree>) => {
      const { item, modifiers } = action.payload;
      const newState = state;

      const root = treeService.createItemNode(item);

      newState.root = root;
      newState.current = root;
      newState.map[root.key] = root;

      treeService.createModifierNodes(newState.map, modifiers, root.key);
    },

    selectOption: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      const newState = state;

      const option = newState.map[key];

      if (!isOptionNode(option))
        throw new Error('This is an invalid option node');

      optionService.select(option);

      if (option.isNested) newState.current = option;
    },

    unselectOption: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      const newState = state;

      const option = newState.map[key];

      if (!isOptionNode(option))
        throw new Error('This is an invalid option node');

      optionService.unselect(option);
    },

    setCurrentNode: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      const newState = state;

      const option = newState.map[key];

      if (isModifierNode(option))
        throw new Error('isModifierNode cannot be set to currentNode');

      newState.current = option;
    },

    addTreeNodes: (state, action: PayloadAction<TAddTreeNodes>) => {
      const { optionKey, modifiers } = action.payload;
      const newState = state;

      const node = newState.map[optionKey];

      if (!isOptionNode(node) || node.isFulfilled) return;

      node.isFulfilled = true;
      treeService.createModifierNodes(newState.map, modifiers, optionKey);
    },
  },
});

export const treeReducer = treeSlice.reducer;

export const {
  buildTree,
  selectOption,
  unselectOption,
  setCurrentNode,
  addTreeNodes,
} = treeSlice.actions;
