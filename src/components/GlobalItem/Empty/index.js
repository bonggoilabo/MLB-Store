import React from "react";
import styles from "./Empty.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function Empty({ content = "" }) {
  return (
    <div className={cx("container")}>
      <div className={cx("empty")}>
        <button type='button' className={cx("close")}>
          <span>×</span>
        </button>
        {content}
      </div>
    </div>
  );
}
