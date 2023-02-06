import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import {
  faInstagram,
  faFacebookF,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("footer-container")}>
          <div className={cx("footer-column")}>
            <figure className={cx("footer-logo")}>
              <a href='/'>
                <img
                  src='	https://bizweb.dktcdn.net/100/446/974/themes/849897/assets/logo_footer.png?1667557744791'
                  alt=''
                />
              </a>
            </figure>
            <ul className={cx("footer-contact")}>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='13'
                  height='19'
                  viewBox='0 0 13 19'
                  fill='none'>
                  <path
                    d='M6.46532 0.686035C3.26765 0.686035 0.651367 3.30231 0.651367 6.49999C0.651367 8.08776 2.2 10.9476 2.27636 11.0877C2.27881 11.0922 2.28058 11.0952 2.28318 11.0996L5.87299 17.1867C6.06347 17.5097 6.52849 17.5159 6.72747 17.198L10.4732 11.2154C10.4757 11.2113 10.4773 11.2088 10.4799 11.2049C10.562 11.0807 12.3374 8.37556 12.3374 6.55813C12.3374 3.30231 9.72113 0.686035 6.46532 0.686035ZM6.46532 9.69766C4.60486 9.69766 3.09323 8.18603 3.09323 6.32557C3.09323 4.4651 4.60486 2.95348 6.46532 2.95348C8.32579 2.95348 9.83741 4.4651 9.83741 6.32557C9.77927 8.24417 8.32579 9.69766 6.46532 9.69766Z'
                    stroke='white'
                    strokeWidth='1.25'
                    strokeMiterlimit='10'></path>
                </svg>
                <p>Ho Chi Minh City - Vietnam</p>
                <p>Hanoi Capital - Vietnam</p>
              </li>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'>
                  <path
                    d='M15.4054 19.6889C15.2186 19.6884 15.0324 19.6679 14.8499 19.6278C11.3758 18.9092 8.17522 17.2242 5.61655 14.7667C3.11247 12.3039 1.37577 9.16817 0.616547 5.73895C0.527026 5.31156 0.548998 4.86833 0.68035 4.4519C0.811701 4.03547 1.04801 3.65984 1.36655 3.36117L3.58877 1.22228C3.70227 1.11494 3.83714 1.03274 3.98456 0.981049C4.13198 0.929356 4.28864 0.909331 4.44432 0.922281C4.60575 0.939122 4.76152 0.991122 4.9007 1.07462C5.03987 1.15813 5.15906 1.27111 5.24988 1.40561L8.02766 5.51117C8.13183 5.67047 8.18211 5.859 8.17111 6.04902C8.16011 6.23904 8.0884 6.42051 7.96655 6.56673L6.5721 8.23339C7.12746 9.46253 7.91396 10.5734 8.88877 11.5056C9.85727 12.4716 11.002 13.2429 12.261 13.7778L13.9888 12.4056C14.1339 12.2909 14.3105 12.2231 14.495 12.2112C14.6796 12.1993 14.8635 12.2439 15.0221 12.3389L19.2165 15.0501C19.3605 15.136 19.4831 15.2534 19.5752 15.3935C19.6674 15.5335 19.7266 15.6926 19.7485 15.8588C19.7704 16.025 19.7544 16.194 19.7018 16.3532C19.6491 16.5124 19.5611 16.6575 19.4443 16.7778L17.2777 18.9223C17.0315 19.1672 16.7394 19.361 16.4181 19.4926C16.0968 19.6242 15.7526 19.6909 15.4054 19.6889ZM4.35544 2.02228L2.13321 4.16117C1.95402 4.32814 1.82137 4.53888 1.74832 4.77266C1.67526 5.00644 1.66431 5.25521 1.71655 5.4945C2.4225 8.71236 4.04528 11.6569 6.38877 13.9723C8.79666 16.2843 11.8086 17.8692 15.0777 18.5445C15.3251 18.5962 15.5815 18.5858 15.8239 18.514C16.0663 18.4423 16.2871 18.3115 16.4665 18.1334L18.6332 15.9889L14.5832 13.3723L12.7277 14.8501C12.6566 14.9063 12.5729 14.9443 12.4838 14.9607C12.3947 14.9772 12.303 14.9716 12.2165 14.9445C10.6758 14.3768 9.27958 13.4757 8.12766 12.3056C6.93619 11.193 6.01134 9.82562 5.4221 8.30561C5.39717 8.21359 5.39635 8.11671 5.4197 8.02428C5.44305 7.93184 5.48979 7.84698 5.55544 7.77784L7.05544 5.98339L4.35544 2.02228Z'
                    fill='white'></path>
                </svg>
                <a href='/'>+84813772471</a>
              </li>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'>
                  <path
                    d='M8.99984 0.666748C4.40484 0.666748 0.666504 4.40508 0.666504 9.00008V12.4526C0.666504 13.3059 1.414 14.0001 2.33317 14.0001H3.1665C3.38752 14.0001 3.59948 13.9123 3.75576 13.756C3.91204 13.5997 3.99984 13.3878 3.99984 13.1667V8.88092C3.99984 8.6599 3.91204 8.44794 3.75576 8.29166C3.59948 8.13538 3.38752 8.04758 3.1665 8.04758H2.40984C2.87317 4.82258 5.64817 2.33341 8.99984 2.33341C12.3515 2.33341 15.1265 4.82258 15.5898 8.04758H14.8332C14.6122 8.04758 14.4002 8.13538 14.2439 8.29166C14.0876 8.44794 13.9998 8.6599 13.9998 8.88092V14.0001C13.9998 14.9192 13.2523 15.6667 12.3332 15.6667H10.6665V14.8334H7.33317V17.3334H12.3332C14.1715 17.3334 15.6665 15.8384 15.6665 14.0001C16.5857 14.0001 17.3332 13.3059 17.3332 12.4526V9.00008C17.3332 4.40508 13.5948 0.666748 8.99984 0.666748Z'
                    fill='white'></path>
                </svg>
                <a href='/'>Zalo Business: +84813772471</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} />
                <span>Giờ làm việc: 8:00am -&gt; 10:00pm</span>
              </li>
            </ul>
          </div>
          <div className={cx("footer-column")}>
            <h3>HỖ TRỢ</h3>
            <ul>
              <li>Tìm kiếm sản phẩm</li>
              <li>Giỏ hàng</li>
              <li>Kiểm tra tình trang đơn hàng</li>
              <li>Đăng kí tk</li>
              <li>Đăng nhập tk</li>
            </ul>
          </div>
          <div className={cx("footer-column")}>
            <h3>CHÍNH SÁCH</h3>
            <div className={cx("footer-menu")}>
              <a href='/'>Chính sách đổi trả</a>
              <a href='/'>Chính sách bảo mật</a>
              <a href='/'>Chính sách vận chuyển</a>
              <a href='/'>Qui định sử dụng</a>
            </div>
          </div>
          <div className={cx("footer-column")}>
            <div className={cx("footer-social")}>
              <div className={cx("btn-social")}>
                <a href='/'>
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href='/'>
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href='/'>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <div className={cx("footer-mail")}>
                <h4>ĐĂNG KÝ ĐỂ NHẬN TIN</h4>
                <form>
                  <input type='email' placeholder='Nhập địa chỉ email' />
                  <span>
                    <button type='submit'>Gửi</button>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("footer-copyright")}>
          @ Bản quyền thuộc về MLB Vietnam
          <span> | </span>
          <span>
            Cung cấp bởi
            <a href='/' rel='noopener' title='MLB' target='_blank'>
              MLB
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
