import React, { PropsWithChildren } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps {
  classes?: string;
  onClickHandler?: () => void;
  disabled?: boolean;
}

const Button = ({
  classes = "",
  onClickHandler,
  disabled = false,
  children,
}: PropsWithChildren<ButtonProps>) => {
  const inputStyles = classes.split(" ").map((item) => styles[item]);

  return (
    <button className={cn(styles.button, inputStyles)} onClick={onClickHandler} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
