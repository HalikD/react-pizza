import axios from "axios";
import { IPizza, SearchParams } from "@/redux/pizza/pizzaTypes";
import { BASE_URL } from "./index";

export const fetchById = async (id: string) => {
  const { data } = await axios.get<IPizza>(`${BASE_URL}${id}`);
  return data;
};

export const fetchByParams = async (params: SearchParams) => {
  const { sortBy, orderBy, category, title } = params;
  const { data } = await axios.get<IPizza[]>(
    `${BASE_URL}?sortBy=${sortBy}&order=${orderBy}${category}${title}`
  );
  return data;
};
