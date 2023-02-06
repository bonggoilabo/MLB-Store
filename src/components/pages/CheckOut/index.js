import React from "react";
import { Link } from "react-router-dom";

import DeliveryInfo from "./DeliveryInfo";
import Transport from "./Transport";
import Pay from "./Pay";
import Sidebar from "./Sidebar";

import styles from "./CheckOut.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function CheckOut() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <main className={cx("main")}>
          <header className={cx("header")}>
            <div className={cx("logo")}>
              <Link to='/'>
                <img
                  src='https://bizweb.dktcdn.net/100/446/974/themes/849897/assets/checkout_logo.png?1671820853813'
                  alt='logo'
                />
              </Link>
            </div>
          </header>
          <div className={cx("content")}>
            <div className={cx("content-item")}>
              <DeliveryInfo />
            </div>
            <div className={cx("content-item")}></div>
          </div>
          <footer className={cx("footer")}></footer>
        </main>
        <aside className={cx("sidebar")}>
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}
