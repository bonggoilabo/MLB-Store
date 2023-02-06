import React from "react";

import styles from "./Pay.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function Pay() {
  return (
    <div className={cx("pay")}>
      <div className={cx("section-header")}>
        <h2>Thanh toán</h2>
      </div>
      <div className={cx("transport")}>
        <div className={cx("item")}>
          <div className={cx("radio")}>
            <input
              type='radio'
              name='shippingMethod'
              id='shippingMethod'
              value=''></input>
          </div>
          <label className={cx("radio-label")}>
            <span>
              Chuyển khoản qua ngân hàng - Hoàn tiền lên đến 5% giá trị đơn hàng
            </span>
          </label>
        </div>
        <div className={cx("item")}>
          <div className={cx("radio")}>
            <input
              type='radio'
              name='shippingMethod'
              id='shippingMethod'
              value=''></input>
          </div>
          <label className={cx("radio-label")}>
            <span>Thanh toán khi giao hàng (COD)</span>
          </label>
        </div>
      </div>
    </div>
  );
}
