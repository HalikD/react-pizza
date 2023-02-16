import ContentLoader from "react-content-loader";

import styles from "./PizzaBlock.module.scss";

const PizzaSkeleton = () => (
  <ContentLoader
    className={styles.container}
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="141" cy="129" r="105" />
    <rect x="0" y="245" rx="0" ry="0" width="280" height="25" />
    <rect x="11" y="384" rx="6" ry="6" width="90" height="30" />
    <rect x="120" y="380" rx="23" ry="23" width="150" height="44" />
    <rect x="0" y="290" rx="16" ry="16" width="280" height="80" />
  </ContentLoader>
);

export default PizzaSkeleton;
