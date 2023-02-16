import { orderType, SortType } from "../filter/filterTypes";

export interface PizzaState {
  items: IPizza[];
  status: Status;
}

export interface IPizza {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export type SearchParams = {
  sortBy: SortType;
  orderBy: orderType;
  category: string;
  title: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
