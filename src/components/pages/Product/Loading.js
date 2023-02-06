import React from "react";
import { Skeleton } from "../../GlobalItem";

import styles from "./Product.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function Loading() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("grid__row")}>
          <div className={cx("product-right")}>
            <h1 className={cx("product-title")}>
              <Skeleton width='100%' height='72px' />
            </h1>
            <div className={cx("product-reviews")}>
              <Skeleton width='100%' height='24px' />
            </div>
            <div className={cx("product-sku")}>
              <Skeleton height='42px' />
              <Skeleton height='116px' />
            </div>
            <div className={cx("product-price")}>
              <Skeleton height='40px' />
            </div>
            <div className={cx("product-size")}>
              <Skeleton height='72px' />
            </div>
            <div className={cx("form-action-addcart")}>
              <Skeleton height='72px' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
