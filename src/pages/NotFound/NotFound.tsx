import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>Ничего нет</h1>
      <p>На данной странице отсутствует информация</p>
    </div>
  );
};

export default NotFound;
