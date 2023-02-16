import { Link, useAsyncValue } from "react-router-dom";
import { IPizza } from "@/redux/pizza/pizzaTypes";
import Button from "@/components/UI/Button/Button";

import styles from "./PizzaFull.module.scss";

const PizzaFull = () => {
  const pizza = useAsyncValue() as IPizza;

  return (
    <>
      <div className={styles.image}>
        <img src={pizza.imageUrl} alt="pizza photo" />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{pizza.title}</h2>
        <div className={styles.desc}>
          <h3>Описание: </h3>
          <p>{pizza.description}</p>
          <h3>от {pizza.price} ₽</h3>
        </div>
        <div className={styles.footer}>
          <Link to="/">
            <Button classes="btn--md btn--black">
              <span>Вернуться назад</span>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PizzaFull;
