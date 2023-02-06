import React from "react";

import styles from "./CartEmpty.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function CartEmpty() {
  return (
    <div className={cx("cart-empty")}>
      <img
        src='https://www.bikerackcompany.com/wp-content/themes/mrtailor/images/empty_cart.png'
        alt=''
      />
      <h1>Không có sản phẩm nào trong giỏ hàng của bạn</h1>
    </div>
  );
}
