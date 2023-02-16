import { useEffect, useRef, useState, memo } from "react";

import { useAppDispatch } from "@/redux/store";
import { setOrderBy, setSortInfo } from "@/redux/filter/filterSlice";
import { ISort, orderType, SortType } from "@/redux/filter/filterTypes";

import Popup from "@/components/UI/Popup/Popup";

import cn from "classnames";
import styles from "./Sort.module.scss";

const sortList: ISort[] = [
  { name: "популярности", sort: SortType.RATING },
  { name: "цене", sort: SortType.PRICE },
  { name: "алфавиту", sort: SortType.TITLE },
];

type SortProps = {
  sortInfo: ISort;
  orderBy: orderType;
};

const Sort = memo(({ sortInfo, orderBy }: SortProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const onClickSortItem = (sortObj: ISort) => {
    dispatch(setSortInfo(sortObj));
    setIsVisible(false);
  };

  const onClickOrder = () => {
    const nextOrder = orderBy === "desc" ? "asc" : "desc";
    dispatch(setOrderBy(nextOrder));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.composedPath().includes(sortRef.current as HTMLDivElement)) setIsVisible(false);
    };

    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className={styles.container}>
      <div className={styles.label}>
        <div onClick={onClickOrder} className={styles.angle}>
          {orderBy === "desc" ? (
            <svg
              width="28px"
              height="28px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icomoon-ignore"></g>
              <path d="M15.976 2.656c-7.366 0-13.337 5.97-13.337 13.337s5.97 13.337 13.337 13.337 13.337-5.97 13.337-13.337-5.97-13.337-13.337-13.337zM15.976 28.262c-6.765 0-12.27-5.504-12.27-12.27s5.505-12.27 12.27-12.27 12.27 5.505 12.27 12.27c0 6.765-5.505 12.27-12.27 12.27z"></path>
              <path d="M15.214 19.175l0.754 0.754 6.035-6.035-0.754-0.754-5.281 5.281-5.256-5.256-0.754 0.754 3.013 3.013z"></path>
            </svg>
          ) : (
            <svg
              width="28px"
              height="28px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icomoon-ignore"></g>
              <path d="M15.976 29.329c7.366 0 13.337-5.97 13.337-13.337s-5.97-13.337-13.337-13.337-13.337 5.97-13.337 13.337 5.97 13.337 13.337 13.337zM15.976 3.723c6.765 0 12.27 5.504 12.27 12.27s-5.505 12.27-12.27 12.27-12.27-5.505-12.27-12.27c0-6.765 5.505-12.27 12.27-12.27z"></path>
              <path d="M16.737 12.809l-0.754-0.754-6.035 6.035 0.754 0.754 5.281-5.281 5.256 5.256 0.754-0.754-3.013-3.013z"></path>
            </svg>
          )}
        </div>

        <b>Сортировка по:</b>
        <span onClick={() => setIsVisible((prev) => !prev)}>{sortInfo.name}</span>
      </div>
      {isVisible && (
        <Popup classes={styles.popup}>
          <ul className={styles.popup__list}>
            {sortList.map((sortObj, i) => (
              <li
                key={i}
                onClick={() => onClickSortItem(sortObj)}
                className={
                  sortInfo.sort === sortObj.sort
                    ? cn(styles.popup__item, styles.popup__active)
                    : styles.popup__item
                }
              >
                {sortObj.name}
              </li>
            ))}
          </ul>
        </Popup>
      )}
    </div>
  );
});

export default Sort;
