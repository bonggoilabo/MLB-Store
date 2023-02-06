import React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../../../hooks/useFormat";
import { useDispatch, useSelector } from "react-redux";

import styles from "./CartTotal.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function CartTotal() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.cart;
  });
  return (
    <div className={cx("cart-total-money")}>
      <div className={cx("cart-subtotal")}>
        <span>Tổng tiền:</span>
        <span>{formatNumber(data.totalPrice)}₫</span>
      </div>
      <div className={cx("cart-pay")}>
        <Link to='/checkout'>
          <button>Thanh toán</button>
        </Link>
      </div>
    </div>
  );
}
