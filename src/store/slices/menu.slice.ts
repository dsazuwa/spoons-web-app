import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* eslint-disable  @typescript-eslint/no-unused-vars */

interface IMenuState {
  menu: GroupedMenuResponseType;
  orderMenu: GroupedMenuResponseType;
}

const initialState: IMenuState = {
  menu: { menu: [], categories: [] },
  orderMenu: { menu: [], categories: [] },
};

export const menuSlice = createSlice({
  name: 'menuSlice',
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<GroupedMenuResponseType>) => {
      const newState = state;
      newState.menu = action.payload;
    },
    setOrderMenu: (state, action: PayloadAction<GroupedMenuResponseType>) => {
      const newState = state;
      newState.orderMenu = action.payload;
    },
  },
});

export const menuReducer = menuSlice.reducer;

export const { setMenu, setOrderMenu } = menuSlice.actions;
