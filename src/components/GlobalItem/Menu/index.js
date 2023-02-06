import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import productApi from "../../../api/productApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function Menu({ openMenu, setOpenMenu }) {
  const close = () => {
    setOpenMenu(!openMenu);
  };

  const { id } = useParams();
  const [data, setData] = useState("");
  const [payload, setPayload] = useState({
    _limit: 6,
    _page: 1,
    _sort: "",
    _order: "",
  });

  //Reset payload khi đổi category
  useEffect(() => {
    setPayload({ ...payload, _page: 1 });
  }, [id]);

  useEffect(() => {
    const productList = async () => {
      try {
        const response = await productApi.getCategory(id, payload);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    productList();
  }, [id, payload]);
  return (
    <>
      <div
        className={cx("overlay", openMenu ? "open" : "hidden")}
        onClick={close}></div>
      <div className={cx("menu", openMenu ? "open" : "hidden")}>
        <div className={cx("close")} onClick={close}>
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fal'
            data-icon='times-circle'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'>
            <path
              fill='currentColor'
              d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 464c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm94.8-285.3L281.5 256l69.3 69.3c4.7 4.7 4.7 12.3 0 17l-8.5 8.5c-4.7 4.7-12.3 4.7-17 0L256 281.5l-69.3 69.3c-4.7 4.7-12.3 4.7-17 0l-8.5-8.5c-4.7-4.7-4.7-12.3 0-17l69.3-69.3-69.3-69.3c-4.7-4.7-4.7-12.3 0-17l8.5-8.5c4.7-4.7 12.3-4.7 17 0l69.3 69.3 69.3-69.3c4.7-4.7 12.3-4.7 17 0l8.5 8.5c4.6 4.7 4.6 12.3 0 17z'></path>
          </svg>
        </div>
        <div className={cx("container")}>
          <div className={cx("logo")}>
            <Link to='/'>
              <img
                src='https://bizweb.dktcdn.net/100/446/974/themes/849897/assets/checkout_logo.png?1671820853813'
                alt='logo'
              />
            </Link>
          </div>
          <div className={cx("content")}>
            <ul className={cx("nav-list")}>
              <li className={cx("nav-item")}>
                <Link to='/shoes'>Giày-Dép</Link>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={cx("toggleBtn")}
                />
                <div className={cx("item--content")}></div>
              </li>
              <li className={cx("nav-item")}>
                <Link to='/bag'>Túi-Balo</Link>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={cx("toggleBtn")}
                />
                <div className={cx("item--content")}></div>
              </li>
              <li className={cx("nav-item")}>
                <Link to='/hat'>Mũ-Nón</Link>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={cx("toggleBtn")}
                />
                <div className={cx("item--content")}></div>
              </li>
              <li className={cx("nav-item")}>
                <Link to='/clothes'>Áo-Quần</Link>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={cx("toggleBtn")}
                />
                <div className={cx("item--content")}></div>
              </li>
              <li className={cx("nav-item")}>
                <Link to='/accessory'>Phụ-Kiện</Link>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={cx("toggleBtn")}
                />
                <div className={cx("item--content")}></div>
              </li>
              <li className={cx("nav-item")}>
                <Link to='/news'>TIN TỨC</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
