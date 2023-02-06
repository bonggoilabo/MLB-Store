import { Link } from "react-router-dom";

import styles from "./Register.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Register() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("form")}>
          <ul>
            <li>
              <Link to='/account/login'>Đăng nhập</Link>
            </li>
            <li className={cx("active")}>
              <Link to='/account/register'>Đăng kí</Link>
            </li>
          </ul>
          <form className={cx("form-controls")} action='' method='post'>
            <div className={cx("form-group")}>
              <label htmlhtmlFor='fullname' className={cx("form-label")}>
                HỌ
                <span>*</span>
              </label>
              <input
                id='firstname'
                name='firstname'
                type='text'
                placeholder='Nhập họ'
                className={cx("form-control")}
              />
              <span className={cx("form-message")}></span>
            </div>
            <div className={cx("form-group")}>
              <label htmlFor='lastname' className={cx("form-label")}>
                TÊN
                <span>*</span>
              </label>
              <input
                id='lastname'
                name='lastname'
                type='text'
                placeholder='Nhập tên'
                className={cx("form-control")}
              />
              <span className={cx("form-message")}></span>
            </div>
            <div className={cx("form-group")}>
              <label htmlFor='phonenumber' className={cx("form-label")}>
                SỐ ĐIỆN THOẠI
                <span>*</span>
              </label>
              <input
                id='phonenumber'
                name='phonenumber'
                type='text'
                placeholder='Nhập số điện thoại'
                className={cx("form-control")}
              />
              <span className={cx("form-message")}></span>
            </div>
            <div className={cx("form-group")}>
              <label htmlhtmlFor='email' className={cx("form-label")}>
                EMAIL
                <span>*</span>
              </label>
              <input
                id='email'
                name='email'
                type='text'
                placeholder='Nhập email'
                className={cx("form-control")}
              />
              <span className={cx("form-message")}></span>
            </div>
            <div className={cx("form-group")}>
              <label htmlFor='password' className={cx("form-label")}>
                MẬT KHẨU
                <span>*</span>
              </label>
              <input
                id='password'
                name='password'
                type='text'
                placeholder='Nhập mật khẩu'
                className={cx("form-control")}
              />
              <span className={cx("form-message")}></span>
            </div>
            <button className={cx("form-submit")}>TẠO TÀI KHOẢN</button>
          </form>
          <div className={cx("line-break")}>
            <span>hoặc đăng nhập qua</span>
          </div>
          <div className={cx("social-login")}>
            <Link to='/'>
              <img
                width='129px'
                height='37px'
                alt='facebook-login-button'
                src='https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg'
              />
            </Link>
            <Link to='/'>
              <img
                width='129px'
                height='37px'
                alt='google-login-button'
                src='https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
