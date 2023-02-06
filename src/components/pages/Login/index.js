import { Link } from "react-router-dom";

import styles from "./Login.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Login() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("form")}>
          <ul>
            <li className={cx("active")}>
              <Link to='/account/login'>Đăng nhập</Link>
            </li>
            <li>
              <Link to='/account/register'>Đăng kí</Link>
            </li>
          </ul>

          <form className={cx("form-controls")} action='' method='post'>
            <div className={cx("form-group")}>
              <label htmlFor='account' className={cx("form-label")}>
                TÀI KHOẢN
                <span>*</span>
              </label>
              <input
                id='account'
                name='account'
                type='text'
                placeholder='Nhập tài khoản'
                className={cx("form-control")}
              />
              <span className={cx("form-message")}></span>
            </div>
            <div className={cx("form-group")}>
              <label for='password' className={cx("form-label")}>
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
            <p className={cx("recover")}>
              <Link to='/'>Quên mật khẩu</Link>
            </p>
            <button className={cx("form-submit")}>ĐĂNG NHẬP</button>
            <p className={cx("login-notes")}>
              MLB Vietnam cam kết bảo mật và sẽ không bao giờ đăng <br></br>
              hay chia sẻ thông tin mà chưa có được sự đồng ý của bạn.
            </p>
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

export default Login;
