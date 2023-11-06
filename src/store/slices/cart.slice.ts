import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ItemSelection = { [key: string]: string };

export type CartItemData = {
  id: number;
  name: string;
  photoUrl: string;
  price: number;
  selections: ItemSelection[];
};

export type TCartItem = CartItemData & {
  options: string;
};

export type Cart = {
  item: TCartItem;
  quantity: number;
}[];

export type CartState = {
  cart: Cart;
};

type AddItem = {
  item: CartItemData;
  quantity: number;
};

type UpdateItem = {
  index: number;
  item: CartItemData;
  quantity: number;
};

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,

  reducers: {
    addCartItem: (state, action: PayloadAction<AddItem>) => {
      const { item: data, quantity } = action.payload;
      const newState = state;

      const selections = data.selections;

      const retrievedItem = newState.cart.find(
        (x) => JSON.stringify(x.item.selections) === JSON.stringify(selections),
      );

      if (retrievedItem) {
        retrievedItem.quantity += 1;
        return;
      }

      const item = {
        ...data,
        options: selections.map((x) => Object.values(x)).join(', '),
      };

      newState.cart = [...state.cart, { item, quantity }];
    },

    updateCartItem: (state, action: PayloadAction<UpdateItem>) => {
      const { index, item: data, quantity } = action.payload;
      const newState = state;

      const item = {
        ...data,
        options: data.selections.map((x) => Object.values(x)).join(', '),
      };

      newState.cart[index] = { item, quantity };
    },

    incrementCartItem: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const newState = state;

      const cartItem = newState.cart[index];

      if (cartItem.quantity === 999) return;

      cartItem.quantity += 1;
    },

    decrementCartItem: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const newState = state;

      const cartItem = newState.cart[index];

      if (cartItem.quantity === 1) newState.cart.splice(index, 1);
      else cartItem.quantity -= 1;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addCartItem,
  updateCartItem,
  incrementCartItem,
  decrementCartItem,
} = cartSlice.actions;