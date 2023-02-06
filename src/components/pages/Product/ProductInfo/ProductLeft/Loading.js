import React from "react";
import { Skeleton } from "../../../../GlobalItem";

import styles from "./ProductLeft.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function Loading() {
  return (
    <div className={cx("product-left")}>
      <div className={cx("slider-content")}>
        <Skeleton width='100%' height='600px' />
      </div>
    </div>
  );
}
