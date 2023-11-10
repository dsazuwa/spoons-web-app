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
  total: number;
  numItems: number;
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
  total: 0,
  numItems: 0,
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,

  reducers: {
    addCartItem: (state, action: PayloadAction<AddItem>) => {
      const { item: data, quantity } = action.payload;
      const selections = data.selections;

      const retrievedItem = state.cart.find(
        (x) => JSON.stringify(x.item.selections) === JSON.stringify(selections),
      );

      if (retrievedItem) {
        retrievedItem.quantity = Math.min(
          retrievedItem.quantity + quantity,
          999,
        );

        state.numItems += retrievedItem.quantity;
      } else {
        const item = {
          ...data,
          options: selections.map((x) => Object.values(x)).join(', '),
        };

        state.cart.push({ item, quantity });
        state.numItems += quantity;
      }

      state.total = state.total + data.price * quantity;
    },

    updateCartItem: (state, action: PayloadAction<UpdateItem>) => {
      const { index, item: data, quantity } = action.payload;

      const item = {
        ...data,
        options: data.selections.map((x) => Object.values(x)).join(', '),
      };

      const oldCartItem = state.cart[index];

      state.numItems += quantity - oldCartItem.quantity;
      state.total +=
        item.price * quantity - oldCartItem.item.price * oldCartItem.quantity;
      state.cart[index] = { item, quantity };
    },

    incrementCartItem: (state, action: PayloadAction<number>) => {
      const index = action.payload;

      const cartItem = state.cart[index];

      if (cartItem.quantity < 999) {
        cartItem.quantity += 1;
        state.numItems += 1;
        state.total = state.total + cartItem.item.price;
      }
    },

    decrementCartItem: (state, action: PayloadAction<number>) => {
      const index = action.payload;

      const cartItem = state.cart[index];

      if (cartItem.quantity === 1) state.cart.splice(index, 1);
      else cartItem.quantity -= 1;

      state.total = state.total - cartItem.item.price;
      state.numItems -= 1;
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
