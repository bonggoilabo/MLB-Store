import React from "react";

import Skeleton from "../../Skeleton";

import styles from "./Product.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function Loading({ count = 1 }) {
  return Array(count)
    .fill(0)
    .map((item, index) => {
      return (
        <div
          key={index}
          className={cx("product-item")}
          style={{ width: `100%` }}>
          <div className={cx("product-thumbnail")}>
            <Skeleton height='400px' width='100%' />
          </div>
          <div className={cx("product-info")}>
            <span className={cx("brand")}>
              <Skeleton height='20px' width='100%' />
            </span>
            <h3 className={cx("product-name")}>
              <Skeleton height='20px' width='100%' />
            </h3>
            <div className={cx("bottom-action")}>
              <div className={cx("price-box")}>
                <span className={cx("price")}>
                  <Skeleton height='20px' width='100%' />
                </span>
                <span className={cx("compare-price")}></span>
              </div>
            </div>
          </div>
        </div>
      );
    });
}
