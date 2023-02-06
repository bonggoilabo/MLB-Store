import React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../../../hooks/useFormat";
import { useDispatch, useSelector } from "react-redux";
import { updateCart, delCart } from "../../../redux/action";

import styles from "./CartBody.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function CartBody() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.cart;
  });

  const clickMinus = (product) => {
    if (product.qty > 1) {
      const payload = {
        id: product.id,
        qty: product.qty - 1,
      };
      dispatch(updateCart(payload));
    }
  };
  const clickPlus = (product) => {
    const payload = {
      id: product.id,
      qty: product.qty + 1,
    };
    dispatch(updateCart(payload));
  };
  return (
    <>
      <div className={cx("cart-table")}>
        <div className={cx("cart-header-info")}>
          <div>Thông tin sản phẩm</div>
          <div>Đơn giá</div>
          <div>Số lượng</div>
          <div>Thành tiền</div>
        </div>
        <div className={cx("cart-body")}>
          {data.cartAr.map((product, index) => {
            return (
              <div className={cx("cart-body-item")} key={index}>
                <div className={cx("cart-image")}>
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image.content.before} alt='' />
                  </Link>
                  <div className={cx("cart-name")}>
                    <Link>
                      <h3>{product.title}</h3>
                    </Link>
                    {product.size ? (
                      <span className={cx("cart-size")}>
                        SIZE: {product.size}
                      </span>
                    ) : null}
                    <span
                      onClick={() => {
                        dispatch(delCart(product.idProduct));
                      }}>
                      Xóa
                    </span>
                  </div>
                </div>
                <div className={cx("cart-info")}>
                  <div className={cx("cart-price")}>
                    <span>{formatNumber(Number(product.price))}₫</span>
                  </div>
                  <div className={cx("cart-qty")}>
                    <span
                      className={cx("btn-minus")}
                      onClick={() => clickMinus(product)}>
                      -
                    </span>
                    <input
                      type='text'
                      maxLength='10'
                      value={product.qty}
                      readOnly
                      min='0'
                    />
                    <span
                      className={cx("btn-plus")}
                      onClick={() => clickPlus(product)}>
                      +
                    </span>
                  </div>
                  <div className={cx("cart-into-money")}>
                    <span>
                      {formatNumber(
                        product.qty >= 5
                          ? product.qty * Number(product.price) * 0.9
                          : product.qty >= 2
                          ? product.qty * Number(product.price) * 0.95
                          : product.qty * Number(product.price)
                      )}
                      ₫
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
