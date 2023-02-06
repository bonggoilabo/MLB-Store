import React from "react";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import styles from "./Description.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Description({ data }) {
  const [isReadMoreShown, setReadMoreShown] = useState(true);

  const chageActive = () => {
    setReadMoreShown(!isReadMoreShown);
  };
  return (
    <div className={cx("description")}>
      <div className={cx("image", isReadMoreShown ? "" : "fullHeight")}>
        {data?.image?.src.map((item, index) => {
          return <img src={item} alt='' key={index} />;
        })}
      </div>
      <div className={cx("viewmore")}>
        {isReadMoreShown ? (
          <button className={cx("btnViewMore", "open")} onClick={chageActive}>
            Xem thêm
          </button>
        ) : (
          <button className={cx("btnViewMore", "close")} onClick={chageActive}>
            Thu gọn
          </button>
        )}
      </div>
    </div>
  );
}

export default Description;
