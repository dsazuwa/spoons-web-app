import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* eslint-disable  @typescript-eslint/no-unused-vars */

interface IMenuState {
  menu: MenuType<PublicCategoryItemType> | undefined;
}

const initialState: IMenuState = {
  menu: undefined,
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
  },
});

export const menuReducer = menuSlice.reducer;

export const { setMenu } = menuSlice.actions;
