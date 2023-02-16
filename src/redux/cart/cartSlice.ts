import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@/redux/store";
import { ICart, CartState } from "./cartTypes";

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICart>) => {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      findItem ? findItem.count++ : state.items.push({ ...action.payload, count: 1 });
      state.totalPrice += action.payload.price;
    },
    subItem: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.count--;
        state.totalPrice -= findItem.price;
        findItem.count === 0 &&
          (state.items = state.items.filter((item) => item.id !== findItem.id));
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        state.items = state.items.filter((product) => findItem.id !== product.id);
        state.totalPrice -= findItem.price * findItem.count;
      }
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const cartSelect = (state: RootState) => state.cart;

export const { addItem, subItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
