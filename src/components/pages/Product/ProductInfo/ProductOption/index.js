import React from "react";
import { useState } from "react";
import styles from "./ProductOption.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function ProductOption({
  sizes,
  setCartProduct,
  cartProduct,
  data,
}) {
  const [active, setActive] = useState(0);
  const addClassActive = (index) => {
    setActive(index);
  };
  const setOptionsCart = (index) => {
    setCartProduct({ ...cartProduct, size: sizes[index] });
  };
  return (
    <div className={cx("product-size-option")}>
      {sizes.map((item, index) => {
        return (
          <button
            key={index}
            className={cx("btn-size", active === index ? "active" : "")}
            onClick={() => {
              if (index !== active) {
                addClassActive(index);
                setOptionsCart(index);
              }
            }}>
            {item}
          </button>
        );
      })}
    </div>
  );
}
