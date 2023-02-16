import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "@/redux/store";
import { PizzaState, Status } from "./pizzaTypes";
import { fetchPizzasByParams } from "./pizzaAsyncActions";

const initialState: PizzaState = {
  items: [],
  status: Status.LOADING,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzasByParams.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchPizzasByParams.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizzasByParams.rejected, (state) => {
      state.items = [];
      state.status = Status.ERROR;
    });
  },
});

export const pizzaSelect = (state: RootState) => state.pizza;

export default pizzaSlice.reducer;
