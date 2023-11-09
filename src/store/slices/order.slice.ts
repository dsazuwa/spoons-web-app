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
} from '@features/order/state';

const initialState: OrderState = {
  map: {},
  root: undefined,
  current: undefined,
};

export const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,

  reducers: {
    buildTree: (state, action: PayloadAction<TBuildTree>) => {
      const { item, modifiers } = action.payload;

      state.map = {};
      const root = createItemNode(item);
      state.map[root.key] = root;

      buildModifiersAndOptions(state, modifiers, root);

      validateItem(state.map, root);
      state.root = root;
      state.current = root;
    },

    addTreeNodes: (state, action: PayloadAction<TAddTreeNodes>) => {
      const { parentKey, modifiers } = action.payload;

      const node = state.map[parentKey];
      if (!isOptionNode(node) || node.isFulfilled) return;

      const parent = node;

      buildModifiersAndOptions(state, modifiers, parent);

      parent.isFulfilled = true;
      validateOption(state.map, parent);

      state.current = parent;
    },

    singleSelectOption: (state, action: PayloadAction<TSelectOption>) => {
      const { key, index } = action.payload;

      const modifier = getModifier(state.map, key);
      const option = getOption(state.map, modifier.children[index]);

      selectOption(state, option.key);
      if (option.isNested) state.current = option;
    },

    multiSelectOption: (state, action: PayloadAction<TSelectOption>) => {
      const { key, index } = action.payload;

      const modifier = getModifier(state.map, key);
      const option = getOption(state.map, modifier.children[index]);

      if (option.isSelected) {
        unselectOption(state, option);
        return;
      }

      const { children, maxSelection } = getModifier(state.map, option.parent);

      const selectedCount = children.filter(
        (key) => getOption(state.map, key).isSelected,
      ).length;

      if (selectedCount < maxSelection) selectOption(state, option.key);
    },

    setCurrentNode: (state, action: PayloadAction<string>) => {
      const key = action.payload;

      const option = getModifierParent(state.map, key);

      state.current = option;
    },

    returnToParent: (state, action: PayloadAction<string>) => {
      const key = action.payload;

      const option = getOption(state.map, key);

      const parent = getModifier(state.map, option.parent);
      const grandparent = getModifierParent(state.map, parent.parent);

      if (grandparent) state.current = grandparent;
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

export const orderReducer = orderSlice.reducer;

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
} = orderSlice.actions;
