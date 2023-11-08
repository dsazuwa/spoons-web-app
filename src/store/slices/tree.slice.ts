import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  buildModifiersAndOptions,
  createItemNode,
  getItem,
  getModifier,
  getModifierParent,
  getOption,
  isOptionNode,
  selectOption,
  unselectOption,
  updateQuantity,
  validateItem,
  validateOption,
} from '@features/order/tree';

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

      newState.map = {};
      const root = createItemNode(item);
      newState.map[root.key] = root;

      buildModifiersAndOptions(newState, modifiers, root);

      validateItem(newState.map, root);
      newState.root = root;
      newState.current = root;
    },

    addTreeNodes: (state, action: PayloadAction<TAddTreeNodes>) => {
      const { parentKey, modifiers } = action.payload;
      const newState = state;

      const node = newState.map[parentKey];
      if (!isOptionNode(node) || node.isFulfilled) return;

      const parent = node;

      buildModifiersAndOptions(newState, modifiers, parent);

      parent.isFulfilled = true;
      validateOption(newState.map, parent);

      newState.current = parent;
    },

    singleSelectOption: (
      state,
      action: PayloadAction<{ key: string; index: number }>,
    ) => {
      const { key, index } = action.payload;
      const newState = state;

      const modifier = getModifier(newState.map, key);
      const option = getOption(newState.map, modifier.children[index]);

      selectOption(newState, option.key);
      if (option.isNested) newState.current = option;
    },

    multiSelectOption: (
      state,
      action: PayloadAction<{ key: string; index: number }>,
    ) => {
      const { key, index } = action.payload;
      const newState = state;

      const modifier = getModifier(newState.map, key);
      const option = getOption(newState.map, modifier.children[index]);

      if (option.isSelected) {
        unselectOption(newState, option);
        return;
      }

      const { children, maxSelection } = getModifier(
        newState.map,
        option.parent,
      );

      const selectedCount = children.filter(
        (key) => getOption(newState.map, key).isSelected,
      ).length;

      if (selectedCount < maxSelection) selectOption(newState, option.key);
    },

    setCurrentNode: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      const newState = state;

      const option = getModifierParent(newState.map, key);

      newState.current = option;
    },

    returnToParent: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      const newState = state;

      const option = getOption(newState.map, key);

      const parent = getModifier(newState.map, option.parent);
      const grandparent = getModifierParent(newState.map, parent.parent);

      if (grandparent) newState.current = grandparent;
    },

    setQuantity: (state, action: PayloadAction<TSetQuantity>) => {
      const { key, quantity } = action.payload;
      updateQuantity(state, key, quantity);
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      const node = getItem(state.map, key);
      updateQuantity(state, key, node.quantity + 1);
    },

    decrementQuantity: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      const node = getItem(state.map, key);
      updateQuantity(state, key, node.quantity - 1);
    },
  },
});

export const treeReducer = treeSlice.reducer;

export const {
  buildTree,
  singleSelectOption,
  multiSelectOption,
  setCurrentNode,
  addTreeNodes,
  returnToParent,
  setQuantity,
  incrementQuantity,
  decrementQuantity,
} = treeSlice.actions;
