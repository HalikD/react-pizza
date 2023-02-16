import { memo } from "react";
import { useAppDispatch } from "@/redux/store";
import { setCategoryInfo } from "@/redux/filter/filterSlice";

import styles from "./Categories.module.scss";
import cn from "classnames";
import { ICategory } from "@/redux/filter/filterTypes";

const categoriesList: ICategory[] = [
  { name: "Все", category: 0 },
  { name: "Мясные", category: 1 },
  { name: "Вегетарианские", category: 2 },
  { name: "Гриль", category: 3 },
  { name: "Острые", category: 4 },
  { name: "Закрытые", category: 5 },
];

type CategoriesProps = {
  categoryInfo: ICategory;
};

const Categories = memo(({ categoryInfo }: CategoriesProps) => {
  const dispatch = useAppDispatch();

  const onChangeCategory = (categoryObj: ICategory) => {
    dispatch(setCategoryInfo(categoryObj));
  };

  return (
    <div className={styles.container}>
      <ul className={styles.category__list}>
        {categoriesList.map((categoryObj, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(categoryObj)}
            className={
              categoryInfo.category === categoryObj.category
                ? cn(styles.category__item, styles.category__active)
                : styles.category__item
            }
          >
            {categoryObj.name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
