import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { filterSelect } from "@/redux/filter/filterSlice";
import { pizzaSelect } from "@/redux/pizza/pizzaSlice";
import { fetchPizzasByParams } from "@/redux/pizza/pizzaAsyncActions";
import { useAppDispatch } from "@/redux/store";

import Categories from "@/components/Categories/Categories";
import { PizzaBlock, PizzaSkeleton } from "@/components/PizzaBlock";
import Sort from "@/components/Sort/Sort";
import ErrorBlock from "@/components/ErrorBlock/ErrorBlock";

import styles from "./Home.module.scss";

const Home = () => {
  const { categoryInfo, sortInfo, orderBy, searchValue } = useSelector(filterSelect);
  const { items, status } = useSelector(pizzaSelect);

  const dispatch = useAppDispatch();

  const getPizzas = () => {
    const sortBy = sortInfo.sort;
    const categoryBy = categoryInfo.category;
    const category = categoryBy ? `&category=${categoryBy}` : "";
    const title = searchValue ? `&title=${searchValue}` : "";

    dispatch(fetchPizzasByParams({ sortBy, orderBy, category, title }));
  };

  useEffect(() => {
    getPizzas();
  }, [categoryInfo, sortInfo, orderBy, searchValue]);

  const skeletons = [...new Array(4)].map((_, id) => <PizzaSkeleton key={id} />);
  const pizzaBlocks = items.map((item) => <PizzaBlock key={item.id} {...item} />);

  if (status === "error") return <ErrorBlock />;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Categories categoryInfo={categoryInfo} />
        <Sort sortInfo={sortInfo} orderBy={orderBy} />
      </div>
      <h2 className={styles.title}>{categoryInfo.name} пиццы</h2>
      <div className={styles.items}>{status === "loading" ? skeletons : pizzaBlocks}</div>
    </div>
  );
};

export default Home;
