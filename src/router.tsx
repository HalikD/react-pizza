import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import Home from "@/pages/Home/Home";
import PizzaPage from "@/pages/PizzaPage/PizzaPage";
import { pizzaLoader } from "@/pages/PizzaPage/PizzaPage";

const Cart = React.lazy(() => import("@/pages/Cart/Cart"));
const NotFound = React.lazy(() => import("@/pages/NotFound/NotFound"));

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pizza/:id" element={<PizzaPage />} loader={pizzaLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default Router;
