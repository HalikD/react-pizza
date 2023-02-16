import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem, cartSelect } from "@/redux/cart/cartSlice";
import { ICart } from "@/redux/cart/cartTypes";
import { sizeNames, typeNames } from "@/utils/pizzaConfig";
import Button from "@/components/UI/Button/Button";
import Selector from "@/components/UI/Selector/Selector";

import styles from "./PizzaBlock.module.scss";

interface PizzaBlockProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
}

const PizzaBlock = ({ id, title, price, imageUrl, sizes, types }: PizzaBlockProps) => {
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);

  const { items } = useSelector(cartSelect);
  const dispatch = useDispatch();

  const countItem = items
    .filter((item) => item.title === title)
    .reduce((sum, item) => sum + item.count, 0);

  const availableTypes = types.map((type) => typeNames[type]);
  const availableSizes = sizes.map((type) => sizeNames[type]);

  const onClickAdd = () => {
    const item = {
      id: `${title} ${activeType} ${activeSize}`.replaceAll(" ", "_"),
      title,
      price,
      imageUrl,
      size: sizes[activeSize],
      type: types[activeType],
    };
    dispatch(addItem(item as ICart));
  };

  return (
    <div className={styles.container}>
      <Link to={`/pizza/${id}`}>
        <img className={styles.image} src={imageUrl} alt="Pizza image" />
        <h4 className={styles.title}>{title}</h4>
      </Link>

      <div className={styles.values}>
        <Selector items={availableTypes} active={activeType} onClickHandler={setActiveType} />
        <Selector items={availableSizes} active={activeSize} onClickHandler={setActiveSize} />
      </div>
      <div className={styles.footer}>
        <div className={styles.price}>от {price} ₽</div>
        <Button classes="button--add btn--sm btn--orange-trnrt" onClickHandler={onClickAdd}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{countItem}</i>
        </Button>
      </div>
    </div>
  );
};

export default PizzaBlock;
