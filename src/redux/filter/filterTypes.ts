export interface FilterState {
  categoryInfo: ICategory;
  sortInfo: ISort;
  searchValue: string;
  orderBy: "desc" | "asc";
}

export enum SortType {
  RATING = "rating",
  PRICE = "price",
  TITLE = "title",
}

export interface ISort {
  name: string;
  sort: SortType;
}

export interface ICategory {
  name: string;
  category: number;
}

export type orderType = "asc" | "desc";
