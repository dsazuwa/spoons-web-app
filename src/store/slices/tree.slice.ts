import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  createItemNode,
  createModifierNode,
  createOptionNode,
  getItem,
  getModifier,
  getModifierParent,
  getOption,
  isItemNode,
  isOptionNode,
  validateItem,
  validateModifier,
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

      const map: TreeMap = {};
      const root = createItemNode(item);

      newState.root = root;
      newState.current = root;
      map[root.key] = root;

      modifiers?.forEach((modifier) => {
        const modifierNode = createModifierNode(modifier, root);
        map[modifierNode.key] = modifierNode;

        modifier.options.forEach((option) => {
          const optionNode = createOptionNode(option, modifierNode);

          map[optionNode.key] = optionNode;
          validateOption(map, optionNode);
        });

        validateModifier(map, modifierNode);
      });

      validateItem(map, root);
      newState.map = map;
    },

    selectOption: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      const newState = state;

      const option = getOption(newState.map, key);
      const parent = getModifier(newState.map, option.parent);

      if (parent.maxSelection === 1)
        parent.children.forEach((key) => {
          const child = getOption(newState.map, key);
          child.isSelected = false;
          validateOption(newState.map, child);
        });

      option.isSelected = true;
      validateOption(newState.map, option);

      if (option.isNested) newState.current = option;
      else if (newState.current)
        newState.current = getModifierParent(
          newState.map,
          newState.current.key,
        );
    },

    unselectOption: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      const newState = state;

      const option = getOption(newState.map, key);

      option.isSelected = false;
      validateOption(newState.map, option);

      if (newState.current)
        newState.current = getModifierParent(
          newState.map,
          newState.current.key,
        );
    },

    setCurrentNode: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      const newState = state;

      const option = getModifierParent(newState.map, key); // we arent looking for modifier parent here actually

      newState.current = option;
    },

    addTreeNodes: (state, action: PayloadAction<TAddTreeNodes>) => {
      const { parentKey, modifiers } = action.payload;
      const newState = state;

      const node = newState.map[parentKey];
      if (!isOptionNode(node) || node.isFulfilled) return;

      const parent = node;
      const map = newState.map;

      modifiers?.forEach((modifier) => {
        const modifierNode = createModifierNode(modifier, parent);

        modifier.options.forEach((option) => {
          const optionNode = createOptionNode(option, modifierNode);

          map[optionNode.key] = optionNode;
        });

        map[modifierNode.key] = modifierNode;
      });

      parent.isFulfilled = true;
      validateOption(map, parent);

      newState.map = { ...newState.map, ...map };
      newState.current = parent;
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
      const newState = state;

      if (quantity < 0 || quantity > 999) return;

      const node = { ...getItem(newState.map, key) };

      node.quantity = quantity;
      newState.map[key] = node;
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      const newState = state;

      const node = { ...newState.map[key] };

      if (!isItemNode(node)) throw Error('This is not a valid ItemNode');

      if (node.quantity === 999) return;

      node.quantity += 1;
      newState.map[key] = node;
    },

    decrementQuantity: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      const newState = state;

      const node = { ...newState.map[key] };

      if (!isItemNode(node)) throw Error('This is not a valid ItemNode');

      if (node.quantity === 1) return;

      node.quantity -= 1;
      newState.map[key] = node;
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
  returnToParent,
  setQuantity,
  incrementQuantity,
  decrementQuantity,
} = treeSlice.actions;
