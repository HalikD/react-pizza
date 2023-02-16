import { Suspense } from "react";
import { useLoaderData, defer, Await, LoaderFunctionArgs } from "react-router-dom";

import Loader from "@/components/Loader/Loader";
import PizzaFull from "@/components/PizzaFull/PizzaFull";

import { IPizza } from "@/redux/pizza/pizzaTypes";
import { fetchById } from "@/http/pizzaAPI";

import styles from "./PizzaPage.module.scss";

const PizzaPage = () => {
  const { pizza } = useLoaderData() as { pizza: IPizza };

  return (
    <div className={styles.container}>
      <Suspense fallback={<Loader />}>
        <Await resolve={pizza}>
          <PizzaFull />
        </Await>
      </Suspense>
    </div>
  );
};

export default PizzaPage;

export const pizzaLoader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id as string;

  return defer({ pizza: fetchById(id) });
};
