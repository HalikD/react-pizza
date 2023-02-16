import { createAsyncThunk } from "@reduxjs/toolkit";

import { IPizza, SearchParams } from "./pizzaTypes";
import { fetchByParams } from "@/http/pizzaAPI";

export const fetchPizzasByParams = createAsyncThunk<IPizza[], SearchParams>(
  "pizza/fetchPizzas",
  async (params) => {
    const data = await fetchByParams(params);
    return data;
  }
);
