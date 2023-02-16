import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { filterSelect, setSearchValue } from "@/redux/filter/filterSlice";

import cn from "classnames";
import styles from "./Search.module.scss";

const Search = () => {
  const { searchValue } = useSelector(filterSelect);
  const [value, setValue] = useState(searchValue);
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const debouncedСhangeInput = useCallback(
    debounce((str: string) => dispatch(setSearchValue(str)), 300),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    debouncedСhangeInput(event.target.value);
  };

  const onClearInput = () => {
    setValue("");
    dispatch(setSearchValue(""));
    inputRef.current?.focus();
  };

  return (
    <div className={styles.container}>
      <svg
        className={cn(styles.icon, styles.icon_search)}
        fill="#000000"
        width="800px"
        height="800px"
        viewBox="0 0 1920 1920"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
          fillRule="evenodd"
        />
      </svg>
      <input value={value} ref={inputRef} onChange={onChangeInput} placeholder="Поиск пиццы..." />
      {value && (
        <svg
          className={cn(styles.icon, styles.icon_clear)}
          onClick={onClearInput}
          fill="#000000"
          width="800px"
          height="800px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.771 8.518c-1.144 0.215-2.83 2.171-2.086 2.915l4.573 4.571-4.573 4.571c-0.915 0.915 1.829 3.656 2.744 2.742l4.573-4.571 4.573 4.571c0.915 0.915 3.658-1.829 2.744-2.742l-4.573-4.571 4.573-4.571c0.915-0.915-1.829-3.656-2.744-2.742l-4.573 4.571-4.573-4.571c-0.173-0.171-0.394-0.223-0.657-0.173v0zM16 1c-8.285 0-15 6.716-15 15s6.715 15 15 15 15-6.716 15-15-6.715-15-15-15zM16 4.75c6.213 0 11.25 5.037 11.25 11.25s-5.037 11.25-11.25 11.25-11.25-5.037-11.25-11.25c0.001-6.213 5.037-11.25 11.25-11.25z"></path>
        </svg>
      )}
    </div>
  );
};

export default Search;
