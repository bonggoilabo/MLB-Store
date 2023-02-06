import React from "react";
import ProductRight from "./ProductRight";
import ProductLeft from "./ProductLeft";

import styles from "./ProductInfo.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function ProductInfo({ data, idCategory, loading }) {
  return (
    <div className={cx("product-info")}>
      <div className={cx("product-left")}>
        <ProductLeft data={data} loading={loading} />
      </div>
      <div className={cx("product-right")}>
        <ProductRight data={data} idCategory={idCategory} loading={loading} />
      </div>
    </div>
  );
}
