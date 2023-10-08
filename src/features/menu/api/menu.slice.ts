import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* eslint-disable  @typescript-eslint/no-unused-vars */

interface IMenuState {
  menu: MenuType<PublicCategoryItemType> | undefined;
  selected: CategoryType;
  categories: string[];
}

const initialState: IMenuState = {
  menu: undefined,
  selected: 'creations',
  categories: [
    "chef's creations",
    'cheffy sandwiches',
    'bowls',
    'soulful salads',
    '1/2 sandwich combos',
    'kids',
    'deli sides & soups',
  ],
};

export const menuSlice = createSlice({
  name: 'menuSlice',
  initialState,
  reducers: {
    setMenu: (
      state,
      action: PayloadAction<MenuType<PublicCategoryItemType>>,
    ) => {
      const newState = state;
      newState.menu = action.payload;
    },
    setSelected: (state, action: PayloadAction<CategoryType>) => {
      const newState = state;
      newState.selected = action.payload;
    },
  },
});

export const menuReducer = menuSlice.reducer;

export const { setMenu, setSelected } = menuSlice.actions;
