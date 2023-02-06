import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUserCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./DeliveryInfo.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function DeliveryInfo() {
  return (
    <section className={cx("section")}>
      <div className={cx("section-header")}>
        <h2>Thông tin mua hàng</h2>
        <Link to='/account/login'>
          <FontAwesomeIcon icon={faUserCircle} />
          <span>Đăng nhập</span>
        </Link>
      </div>
      <div className={cx("section-content")}>
        <form action='' method='POST' id='form-1'>
          <div className={cx("form-group")}>
            <input
              id='email'
              name='email'
              type='text'
              placeholder=' '
              className={cx("form-control")}
            />
            <label htmlFor='email' className={cx("form-label")}>
              Email ( tùy chọn )
            </label>
            <span></span>
          </div>
          <div className={cx("form-group")}>
            <input
              id='fullname'
              name='fullname'
              placeholder=' '
              type='text'
              className={cx("form-control")}
            />
            <label htmlFor='fullname' className={cx("form-label")}>
              Họ và tên
            </label>
            <span></span>
          </div>

          <div className={cx("form-group")}>
            <input
              id='billingPhone'
              name='billingPhone'
              placeholder=' '
              type='tel'
              className={cx("form-control")}
            />
            <label htmlFor='password' className={cx("form-label")}>
              Số điện thoại
            </label>
            <span></span>
          </div>

          <div className={cx("form-group")}>
            <input
              id='billingAddress'
              name='billingAddress'
              placeholder=' '
              type='text'
              className={cx("form-control")}
            />
            <label htmlFor='billingAddress' className={cx("form-label")}>
              Địa chỉ
            </label>
            <span></span>
          </div>

          <div className={cx("form-group")}>
            <input
              id='billingProvince'
              name='billingProvince'
              placeholder=' '
              type='text'
              className={cx("form-control")}
            />
            <label htmlFor='billingProvince' className={cx("form-label")}>
              Tỉnh thành
            </label>
            <span></span>
          </div>

          <div className={cx("form-group")}>
            <input
              id='billingDistrict'
              name='billingDistrict'
              placeholder=' '
              type='text'
              className={cx("form-control")}
            />
            <label htmlFor='billingDistrict' className={cx("form-label")}>
              Quận huyện
            </label>
            <span></span>
          </div>

          <div className={cx("form-group")}>
            <input
              id='billingWard'
              name='billingWard'
              placeholder=' '
              type='text'
              className={cx("form-control")}
            />
            <label htmlFor='billingWard' className={cx("form-label")}>
              Phường xã (tùy chọn)
            </label>
            <span></span>
          </div>
        </form>
      </div>
    </section>
  );
}
