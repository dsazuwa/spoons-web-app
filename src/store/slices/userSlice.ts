import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@store/types';

/* eslint-disable  @typescript-eslint/no-unused-vars */

interface IUserState {
  user: IUser | undefined;
  home: string;
}

const initialState: IUserState = {
  user: undefined,
  home: '/',
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    logout: (state) => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      const newState = state;
      newState.user = action.payload;
      newState.home = newState.user.roles[0] === 'customer' ? '/' : '/admin';
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
