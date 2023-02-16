import React from "react";

import styles from "./ErrorBlock.module.scss";

const ErrorBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>
          Произошла ошибка<span>😕</span>
        </h2>
      </div>
      <div className={styles.text}>
        <p>
          Не получилось загрузить пиццы <br />
          Повторите попытку позже
        </p>
      </div>
    </div>
  );
};

export default ErrorBlock;
