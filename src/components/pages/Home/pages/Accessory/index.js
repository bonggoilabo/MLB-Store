import { HomeTitle, ViewMore } from "../../components/GlobalItem";
import { Link } from "react-router-dom";

import styles from "./Accessory.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Accessory({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <HomeTitle title='PHỤ KIỆN' desc='Tất cả phụ kiện' />
        <div className={cx("cate-list")}>
          <div className={cx("cate-item")}>
            <figure className={cx("cate-image")}>
              <Link to='/accessory'>
                <img
                  src='https://bizweb.dktcdn.net/100/446/974/themes/849897/assets/accessories_1.jpg?1667557744791'
                  alt=''
                />
              </Link>
            </figure>
            <div className={cx("cate-info")}>
              <h1 className={cx("cate-title")}>
                <Link to='/accessory'>Mask</Link>
              </h1>
              <Link to='/accessory' className={cx("cate-more")}>
                Xem thêm
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='12'
                  viewBox='0 0 16 12'
                  fill='none'>
                  <path
                    d='M10.0586 1L14.9998 6.02351L10.0586 10.9647'
                    stroke='#3F3FDB'
                    strokeWidth='1.25'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                  <path
                    d='M7.17627 6.02344H14.9175'
                    stroke='#3F3FDB'
                    strokeWidth='1.25'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                  <path
                    d='M1 6.02344H3.88235'
                    stroke='#3F3FDB'
                    strokeWidth='1.25'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className={cx("cate-item")}>
            <figure className={cx("cate-image")}>
              <Link to='/bag'>
                <img
                  src='https://bizweb.dktcdn.net/100/446/974/themes/849897/assets/accessories_2.jpg?1667557744791'
                  alt=''
                />
              </Link>
            </figure>
            <div className={cx("cate-info")}>
              <h1 className={cx("cate-title")}>
                <Link to='/bag'>Balo MLB</Link>
              </h1>
              <Link to='/bag' className={cx("cate-more")}>
                Xem thêm
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='12'
                  viewBox='0 0 16 12'
                  fill='none'>
                  <path
                    d='M10.0586 1L14.9998 6.02351L10.0586 10.9647'
                    stroke='#3F3FDB'
                    strokeWidth='1.25'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                  <path
                    d='M7.17627 6.02344H14.9175'
                    stroke='#3F3FDB'
                    strokeWidth='1.25'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                  <path
                    d='M1 6.02344H3.88235'
                    stroke='#3F3FDB'
                    strokeWidth='1.25'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className={cx("cate-item")}>
            <figure className={cx("cate-image")}>
              <Link to='/accessory'>
                <img
                  src='https://bizweb.dktcdn.net/100/446/974/themes/849897/assets/accessories_3.jpg?1667557744791'
                  alt=''
                />
              </Link>
            </figure>
            <div className={cx("cate-info")}>
              <h1 className={cx("cate-title")}>
                <Link to='/accessory'>Socks</Link>
              </h1>
              <Link to='/accessory' className={cx("cate-more")}>
                Xem thêm
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='12'
                  viewBox='0 0 16 12'
                  fill='none'>
                  <path
                    d='M10.0586 1L14.9998 6.02351L10.0586 10.9647'
                    stroke='#3F3FDB'
                    strokeWidth='1.25'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                  <path
                    d='M7.17627 6.02344H14.9175'
                    stroke='#3F3FDB'
                    strokeWidth='1.25'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                  <path
                    d='M1 6.02344H3.88235'
                    stroke='#3F3FDB'
                    strokeWidth='1.25'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <ViewMore to='/accessory' />
      </div>
    </div>
  );
}

export default Accessory;
