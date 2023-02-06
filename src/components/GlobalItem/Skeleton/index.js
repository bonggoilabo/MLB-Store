import React from "react";

import styles from "./Skeleton.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function Skeleton({ width = "100%", height = "100%" }) {
  return (
    <div
      className={cx("skeleton")}
      style={{ width: `${width}`, height: `${height}` }}></div>
  );
}
