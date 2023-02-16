import styles from "./Loader.module.scss";

import pizza_loader from "@/assets/img/pizza-loader.svg";

const Loader = () => {
  return (
    <div className={styles.container}>
      <img className={styles.loader} src={pizza_loader}></img>
    </div>
  );
};

export default Loader;
