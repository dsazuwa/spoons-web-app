import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* eslint-disable  @typescript-eslint/no-unused-vars */

interface IMenuState {
  menu: MenuType<PublicCategoryItemType> | undefined;
  selected: CategoryType;
  categories: { category: CategoryType; title: string }[];
}

const initialState: IMenuState = {
  menu: undefined,
  selected: 'creations',
  categories: [
    { category: 'creations', title: "Chef's Creations" },
    { category: 'sandwiches', title: 'Cheffy Sandwiches' },
    { category: 'bowls', title: 'Bowls' },
    { category: 'salads', title: 'Salads' },
    { category: 'combos', title: '1/2 Sandwich Combos' },
    { category: 'kids', title: 'Kids' },
    { category: 'sides', title: 'Deli Sides & Soups' },
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
