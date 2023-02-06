import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, delCart } from "../../redux/action";
import { formatNumber } from "../../hooks/useFormat";
import CartEmpty from "../../pages/Cart/CartEmpty";
import styles from "./ToastCart.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function ToastCart({ cartState, setCartState }) {
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

  const handleActiveCart = () => {
    setCartState(!cartState);
  };
  return (
    <>
      <div
        className={cx("overlay", cartState ? "" : "hidden")}
        onClick={handleActiveCart}></div>
      <div className={cx("wrapper", cartState ? "active" : "hidden")}>
        <div className={cx("container")}>
          <div className={cx("cart-sidebar")}>
            <div className={cx("cart-heading")}>
              <h4>GIỎ HÀNG</h4>
              <div className={cx("cart-btn-close")} onClick={handleActiveCart}>
                <svg height={15} width={15} viewBox='0 0 16 14'>
                  <path
                    d='M15 0L1 14m14 0L1 0'
                    stroke='currentColor'
                    fill='none'
                    fillRule='evenodd'></path>
                </svg>
              </div>
            </div>
            <div className={cx("inner")}>
              {data.cartAr.length > 0 ? (
                <>
                  <div className={cx("cart-list")}>
                    {data.cartAr.map((product, index) => {
                      return (
                        <div className={cx("cart-body-item")} key={index}>
                          <div className={cx("cart-image")}>
                            <Link to={`/product/${product.id}`}>
                              <img src={product.image.content.before} alt='' />
                            </Link>
                          </div>
                          <div className={cx("cart-info")}>
                            <div className={cx("cart-name")}>
                              <Link to={`/product/${product.id}`}>
                                {product.title}
                              </Link>
                              {product.size ? (
                                <span className={cx("cart-size")}>
                                  SIZE: {product.size}
                                </span>
                              ) : null}
                            </div>
                            <div className={cx("cart-box-price")}>
                              <div className={cx("cart-qty")}>
                                <label>Số lượng</label>
                                <div className={cx("cart-btn-qty")}>
                                  <span
                                    className={cx("btn-minus")}
                                    onClick={() => {
                                      clickMinus(product);
                                    }}>
                                    -
                                  </span>
                                  <input
                                    type='text'
                                    maxLength='10'
                                    readOnly
                                    value={product.qty}
                                    min='0'
                                  />
                                  <span
                                    className={cx("btn-plus")}
                                    onClick={() => {
                                      clickPlus(product);
                                    }}>
                                    +
                                  </span>
                                </div>
                              </div>
                              <div className={cx("cart-price")}>
                                <span>
                                  {formatNumber(
                                    product.qty >= 5
                                      ? product.qty *
                                          Number(product.price) *
                                          0.9
                                      : product.qty >= 2
                                      ? product.qty *
                                        Number(product.price) *
                                        0.95
                                      : product.qty * Number(product.price)
                                  )}
                                  ₫
                                </span>
                                <span
                                  onClick={() => {
                                    dispatch(delCart(product.idProduct));
                                  }}>
                                  Xóa
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className={cx("cart-total-money")}>
                    <div className={cx("cart-subtotal")}>
                      <span>Tổng tiền:</span>
                      <span>{formatNumber(data.totalPrice)}₫</span>
                    </div>
                    <Link to='/checkout'>
                      <div className={cx("cart-pay")}>
                        <button>Thanh toán</button>
                      </div>
                    </Link>
                  </div>
                </>
              ) : (
                <CartEmpty />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
