import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formatNumber } from "../../../hooks/useFormat";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function Sidebar() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.cart;
  });
  console.log("ds", data);
  return (
    <div className={cx("sidebar")}>
      <h1>Đơn hàng ({data.cartAr.length} sản phẩm)</h1>
      <div className={cx("oder")}>
        <div className={cx("listProduct")}>
          {data.cartAr.map((item, index) => {
            return (
              <div className={cx("productItem")} key={index}>
                <figure>
                  <img src={item.image.content.before} alt='' />
                  <span className={cx("countProduct")}>{item.qty}</span>
                </figure>
                <div className={cx("productInfo")}>
                  <div className={cx("productDesc")}>
                    <h3>{item.title}</h3>
                    <span>{item.size}</span>
                  </div>
                  <span className={cx("productPrice")}>
                    {formatNumber(
                      item.qty >= 5
                        ? item.qty * Number(item.price) * 0.9
                        : item.qty >= 2
                        ? item.qty * Number(item.price) * 0.95
                        : item.qty * Number(item.price)
                    )}
                    ₫
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={cx("discount")}>
          <input
            type='text'
            placeholder=' '
            className={cx("discountControl")}
          />
          <label htmlFor='email' className={cx("discountLabel")}>
            Email ( tùy chọn )
          </label>
          <button className={cx("btnDiscount")}>Áp dụng</button>
        </div>
        <div className={cx("money")}>
          <table>
            <thead>
              <tr>
                <td>
                  <span className={cx("name", "nameLeft")}>Mô tả</span>
                </td>
                <td>
                  <span className={cx("name", "price")}>Giá tiền</span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className={cx("name", "nameLeft")}>Tạm tính</th>
                <td className={cx("price")}>
                  {formatNumber(data.totalPrice)}₫
                </td>
              </tr>
              <tr>
                <th className={cx("name", "nameLeft")}> Phí vận chuyển</th>
                <td className={cx("price")}>-</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>
                  <span className={cx("name", "nameLeft")}>Tổng cộng</span>
                </th>
                <td>
                  <span className={cx("price", "totalPrice")}>
                    {formatNumber(data.totalPrice)}₫
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className={cx("orderSumarry")}>
          <button>ĐẶT HÀNG</button>
          <Link to='/cart'>
            <FontAwesomeIcon icon={faAngleLeft} />
            Quay về giỏ hàng
          </Link>
        </div>
      </div>
    </div>
  );
}
