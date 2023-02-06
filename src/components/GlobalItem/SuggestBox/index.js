import React from "react";
import { Link } from "react-router-dom";

import { formatNumber } from "../../hooks/useFormat";

import styles from "./SuggestBox.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function SuggestBox({ data, closeSearch, payload }) {
  return (
    <div className={cx("suggestBox")}>
      {data.length > 0 ? (
        <>
          {data.map((item, index) => {
            return (
              <Link
                to={`/product/${item.id}`}
                className={cx("productLink")}
                key={index}>
                <div className={cx("productBox")}>
                  <div className={cx("productImage")}>
                    <img src={item.image.content.before} alt='' />
                  </div>
                  <div className={cx("productInfo")}>
                    <span className={cx("productName")}>{item.title}</span>
                    <span className={cx("productPrice")}>
                      {formatNumber(Number(item.price)).toString()}₫
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
          <div className={cx("viewMore")}>
            <Link
              to={`/search/${payload.name}`}
              onClick={() => closeSearch(false)}>
              {"Xem tất cả >>"}
            </Link>
          </div>
        </>
      ) : (
        <div className={cx("error")}>
          <span className={cx("")}>Không có kết quả tìm kiếm.</span>
        </div>
      )}
    </div>
  );
}
// <div className={cx("viewMore")}>
//   <Link
//     to={`/search/${payload.name}`}
//     onClick={() => closeSearch(false)}>
//     {"Xem tất cả >>"}
//   </Link>
// </div>
