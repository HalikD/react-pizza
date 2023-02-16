import React, { PropsWithChildren } from "react";
import styles from "./Popup.module.scss";
import cn from "classnames";

interface PopupProps {
  classes?: string;
}

const Popup = ({ classes, children }: PropsWithChildren<PopupProps>) => {
  return <div className={cn(styles.container, classes)}>{children}</div>;
};

export default Popup;
