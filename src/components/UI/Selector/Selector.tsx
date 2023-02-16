import cn from "classnames";

import styles from "./Selector.module.scss";

interface SelectorProps {
  items: string[];
  active: number;
  onClickHandler: (i: number) => void;
}

const Selector = ({ items, active, onClickHandler }: SelectorProps) => {
  return (
    <ul className={styles.selector}>
      {items.map((item, i) => (
        <li
          key={item}
          onClick={() => onClickHandler(i)}
          className={
            active === i
              ? cn(styles.selector__item, styles.selector__active)
              : styles.selector__item
          }
        >
          {items[i]}
        </li>
      ))}
    </ul>
  );
};

export default Selector;
