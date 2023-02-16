import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@/redux/store";
import { FilterState, orderType, ISort, SortType, ICategory } from "./filterTypes";

const initialState: FilterState = {
  categoryInfo: {
    name: "Все",
    category: 0,
  },
  sortInfo: {
    name: "популярности",
    sort: SortType.RATING,
  },
  searchValue: "",
  orderBy: "desc",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryInfo: (state, action: PayloadAction<ICategory>) => {
      state.categoryInfo = action.payload;
    },
    setSortInfo: (state, action: PayloadAction<ISort>) => {
      state.sortInfo = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setOrderBy: (state, action: PayloadAction<orderType>) => {
      state.orderBy = action.payload;
    },
  },
});

export const filterSelect = (state: RootState) => state.filter;

export const { setCategoryInfo, setSortInfo, setSearchValue, setOrderBy } = filterSlice.actions;
export default filterSlice.reducer;
