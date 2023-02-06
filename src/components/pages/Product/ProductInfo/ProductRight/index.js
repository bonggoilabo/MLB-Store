import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import ProductOption from "../ProductOption";
import { addCart } from "../../../../redux/action";
import { formatNumber } from "../../../../hooks/useFormat";
import Loading from "./Loading";

import styles from "./ProductRight.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function ProductRight({ data, loading }) {
  const [qty, setQty] = useState(1);
  const [cartProduct, setCartProduct] = useState("");

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    if (data && data.size) {
      const newCartProduct = {
        ...data,
        size: data.size[0],
        qty: qty,
      };
      setCartProduct({ ...newCartProduct });
    } else {
      const newCartProduct = {
        ...data,
        qty: qty,
      };
      setCartProduct({ ...newCartProduct });
    }
  }, [data, cartProduct.qty, qty]);

  // Quanty
  const clickMinus = () => {
    setQty((prev) => prev - 1);
    setCartProduct({ ...cartProduct, qty: cartProduct.qty - 1 });
  };
  const clickPlus = () => {
    setQty((prev) => prev + 1);
    setCartProduct({ ...cartProduct, qty: cartProduct.qty + 1 });
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={cx("product-right")}>
          <h1 className={cx("product-title")}>{data.title}</h1>
          <div className={cx("product-reviews")}>
            <ul className={cx("product-reviews-star")}>
              {Array(5)
                .fill(0)
                .map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={cx(index < data.star ? "rating" : "")}>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                  );
                })}
            </ul>
            <span className={cx("product-evaluate")}>
              <Link to='/'>Đánh giá sản phẩm này</Link>
            </span>
          </div>
          <div className={cx("product-sku")}>
            <span className={cx("product-brand")}>
              Thương hiệu: <strong>MLB Vietnam</strong>
            </span>
            <span className={cx("product-code")}>
              Mã: <strong>{data.code}</strong>
            </span>
          </div>
          <div className={cx("product-price")}>
            <span className={cx("product-price-new")}>
              {formatNumber(Number(data.price))}₫
            </span>
            <span className={cx("product-price-old")}>
              {formatNumber(Number(data.price) + Number(data.price) * 0.05)}₫
            </span>
          </div>
          <div className={cx("product-size")}>
            {cartProduct.size ? (
              <>
                <p>
                  SIZE: <strong>{cartProduct.size}</strong>
                </p>
                <ProductOption
                  sizes={data.size}
                  setCartProduct={setCartProduct}
                  cartProduct={cartProduct}
                  data={data}
                />
              </>
            ) : (
              <></>
            )}
          </div>
          <div className={cx("form-action-addcart")}>
            <div className={cx("input_number_product")}>
              <button
                className={cx("custom-btn-numbers", "btn-minus")}
                onClick={clickMinus}>
                -
              </button>
              <input
                type='text'
                className={cx("input-text")}
                size='4'
                value={qty}
                readOnly
                maxLength='3'
              />
              <button
                className={cx("custom-btn-numbers", "btn-plus")}
                onClick={() => {
                  clickPlus();
                }}>
                +
              </button>
            </div>
            <div className={cx("btn-buy")}>
              <button
                className={cx("btn-add-cart")}
                onClick={() => {
                  addProduct(cartProduct);
                }}>
                Thêm giỏ hàng
              </button>
              <button className={cx("btn-buy-now")}>Mua ngay</button>
            </div>
          </div>
          <table className={cx("qb-app-table")}>
            <thead>
              <tr>
                <th>Số lượng</th>
                <th>Giá bán</th>
                <th>Phần trăm giảm giá</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mua 2</td>
                <td> {formatNumber(Number(data.price * 0.95))}₫</td>
                <td>5%</td>
              </tr>
              <tr>
                <td>Mua 5</td>
                <td> {formatNumber(Number(data.price * 0.9))}₫</td>
                <td>10%</td>
              </tr>
            </tbody>
          </table>
          <div className={cx("tutorial-size")}>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='19'
                viewBox='0 0 18 19'
                fill='none'>
                <path
                  d='M17 6V15.14C17 16.7969 15.6569 18.14 14 18.14H4C2.34315 18.14 1 16.7969 1 15.14V13.855V11.7125M12.2305 1H4C2.34315 1 1 2.34314 1 4V5.285V7.4275'
                  stroke='#292D32'
                  strokeWidth='1.5'
                  strokeLinecap='round'></path>
                <path
                  d='M12.5595 1.09666L16.9033 5.44046C17.1098 5.64694 16.9636 6 16.6716 6H12.3278C12.1467 6 12 5.85325 12 5.67223V1.32843C12 1.03642 12.3531 0.890174 12.5595 1.09666Z'
                  stroke='#292D32'
                  strokeWidth='1.5'></path>
                <line
                  x1='6.75'
                  y1='13.25'
                  x2='11.25'
                  y2='13.25'
                  stroke='#292D32'
                  strokeWidth='1.5'
                  strokeLinecap='round'></line>
                <line
                  x1='5.75'
                  y1='10.25'
                  x2='12.25'
                  y2='10.25'
                  stroke='#292D32'
                  strokeWidth='1.5'
                  strokeLinecap='round'></line>
              </svg>
            </span>
            <h3>
              <Link>Xem hướng dẫn chọn size</Link>
            </h3>
          </div>
          {data.category !== "shoes" ? (
            <div className={cx("product-summary")}>
              <table
                border='2'
                cellPadding='1'
                cellpacing='1'
                style={{ width: `100%` }}>
                <tbody>
                  {data.summary.origin ? (
                    <tr>
                      <td>
                        <strong>Xuất Xứ:</strong>
                      </td>
                      <td>{data.summary.origin}.</td>
                    </tr>
                  ) : null}
                  <tr>
                    <td>
                      <strong>SKU:</strong>
                    </td>
                    <td>{data.summary.sku}.</td>
                  </tr>
                  {data.summary.size ? (
                    <tr>
                      <td>
                        <strong>Kích Thước:</strong>
                      </td>
                      <td>{data.summary.size}.</td>
                    </tr>
                  ) : null}
                  {data.summary.substance ? (
                    <tr>
                      <td>
                        <strong>Chất Liệu:</strong>
                      </td>
                      <td>{data.summary.substance}</td>
                    </tr>
                  ) : null}
                  {data.summary.gender ? (
                    <tr>
                      <td>
                        <strong>Giới tính:</strong>
                      </td>
                      <td>{data.summary.gender}</td>
                    </tr>
                  ) : null}
                  {data.summary.made ? (
                    <tr>
                      <td>
                        <strong>Made In:</strong>
                      </td>
                      <td>{data.summary.made}.</td>
                    </tr>
                  ) : null}
                  {data.summary.debut ? (
                    <tr>
                      <td>
                        <strong>Ra Mắt:</strong>
                      </td>
                      <td>{data.summary.debut}.</td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}
