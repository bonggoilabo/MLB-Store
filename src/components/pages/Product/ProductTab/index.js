import React from "react";
import { useState } from "react";

import Description from "./Description";
import ProductSize from "./ProductSize";
import Rating from "./Rating";
import Policy from "./Policy";

import styles from "./ProductTab.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function ProductTab({ data }) {
  const [active, setActive] = useState(0);
  const handleActive = (id) => {
    setActive(id);
  };
  const type = [
    "mô tả sản phẩm",
    "mlb size chart",
    "đánh giá sp",
    "chính sách đổi/ trả",
  ];
  return (
    <>
      <div className={cx("nav_tab")}>
        <ul className={cx("nav_tab-list")}>
          {type.map((item, index) => {
            return (
              <li
                key={index}
                className={cx(
                  "nav_tab-item",
                  active === index ? "active" : null
                )}
                onClick={() => {
                  handleActive(index);
                }}>
                {item}
              </li>
            );
          })}
        </ul>
        {active === 0 ? <Description data={data.description} /> : null}
        {active === 1 ? <ProductSize data={data} /> : null}
        {active === 2 ? <Rating data={data} /> : null}
        {active === 3 ? <Policy data={data} /> : null}
      </div>
    </>
  );
}
