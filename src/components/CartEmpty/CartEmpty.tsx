import React from "react";
import { Link } from "react-router-dom";

import Button from "@/components/UI/Button/Button";

import cartEmptyPng from "@/assets/img/empty-cart.png";

import styles from "./CartEmpty.module.scss";

const CartEmpty = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Корзина пустая</h2>
        <span>😕</span>
      </div>
      <p className={styles.text}>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img className={styles.image} src={cartEmptyPng} alt="Empty cart" />
      <div>
        <Link to="/">
          <Button classes="btn--md btn--black">
            <span>Вернуться назад</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
