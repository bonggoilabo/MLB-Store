import React from "react";

import styles from "./Transport.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function Transport() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("section-header")}>
          <h2>Vận chuyển</h2>
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
              <span> Giao hàng tận nơi - COD tiêu chuẩn 1-2 ngày</span>
              <span>Miễn phí</span>
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
              <span>Ship Grab trong ngày (Chỉ áp dụng cho HCM và HN)</span>
              <span>35.000₫</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
