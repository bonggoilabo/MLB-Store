import React from "react";
import { useState } from "react";

import styles from "./ProductSort.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function ProductSort({ payload, setPayload }) {
  const sorts = [
    {
      key: "Mặc định",
      value: "",
    },
    {
      key: "Tên A-Z",
      _sort: "title",
      _order: "",
    },
    {
      key: "Tên Z-A",
      _sort: "title",
      _order: "desc",
    },
    {
      key: "Giá thấp đến cao",
      _sort: "price",
      _order: "",
    },
    {
      key: "Giá cao đến thấp",
      _sort: "price",
      _order: "desc",
    },
  ];
  const [active, setActive] = useState(0);
  const addClassActive = (index) => {
    setActive(index);
  };

  const handleSortClick = (newSortValue = "", newOrderValue = "") => {
    setPayload({
      ...payload,
      _sort: newSortValue,
      _order: newOrderValue,
    });
  };
  return (
    <div className={cx("aside-item")}>
      <div className={cx("aside-title")}>
        SẮP XẾP
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='10'
            height='5'
            viewBox='0 0 10 5'
            fill='none'>
            <path
              d='M0.993164 0.968199L5.0001 4.97514L9.00704 0.968201L8.06423 0.0253911L5.0001 3.08952L1.93597 0.0253906L0.993164 0.968199Z'
              fill='#333333'></path>
          </svg>
        </span>
      </div>
      <div className={cx("aside-content")}>
        <ul className={cx("filter-sort")}>
          {sorts.map((item, index) => {
            return (
              <li
                key={index}
                className={cx(active === index ? "active" : "")}
                onClick={() => {
                  if (index !== active) {
                    addClassActive(index);
                    handleSortClick(item._sort, item._order);
                  }
                }}>
                <i></i>
                {item.key}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
