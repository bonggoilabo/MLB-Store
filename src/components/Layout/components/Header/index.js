import productApi from "../../../../api/productApi";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Menu, SuggestBox } from "../../../GlobalItem";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "./Header.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Header() {
  const inputRef = useRef();
  const countTotalCartRef = useRef();
  const listCartProduct = useSelector((state) => state.cart.cartAr);
  const countProductInCart =
    listCartProduct.length > 0
      ? listCartProduct.reduce((total, item) => {
          return (total += item.qty);
        }, 0)
      : 0;
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showSuggestBox, setShowSuggestBox] = useState(true);
  const [payload, setPayload] = useState({
    name: "",
    _page: 1,
    _limit: 4,
  });
  useEffect(() => {
    const timeId = setTimeout(() => {
      const value = payload.name.trim();
      if (value) {
        const getProduct = async () => {
          const reponse = await productApi.getSearch(payload);
          console.log(reponse);
          setProduct(reponse);
          setShowSuggestBox(true);
        };
        getProduct();
      } else {
        setShowSuggestBox(false);
      }
    }, 700);
    return () => {
      clearTimeout(timeId);
    };
  }, [payload]);
  const searchToggle = () => {
    setShowSearch((prev) => !prev);
  };

  const handleClearValue = () => {
    setPayload({ ...payload, name: "" });
    inputRef.current && inputRef.current.focus();
  };
  return (
    <header className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("logo")}>
          <Link to='/'>
            <img
              src='https://bizweb.dktcdn.net/100/446/974/themes/849897/assets/logo.png?1667557744791'
              alt='logo'
            />
          </Link>
        </div>
        <div className={cx("menu")}>
          <ul className={cx("menu-list")}>
            <li className={cx("menu-item")}>
              <Link
                to='/shoes'
                className={cx("menu-link", id === "shoes" ? "redArrow" : "")}>
                Giày-Dép
              </Link>
              <div className={cx("mega")}></div>
            </li>
            <li className={cx("menu-item")}>
              <Link
                to='/bag'
                className={cx("menu-link", id === "bag" ? "redArrow" : "")}>
                Túi-Balo
              </Link>
              <div className={cx("mega")}></div>
            </li>
            <li className={cx("menu-item")}>
              <Link
                to='/hat'
                className={cx("menu-link", id === "hat" ? "redArrow" : "")}>
                Mũ-Nón
              </Link>
              <div className={cx("mega")}></div>
            </li>
            <li className={cx("menu-item")}>
              <Link
                to='/clothes'
                className={cx("menu-link", id === "clothes" ? "redArrow" : "")}>
                Áo-Quần
              </Link>
              <div className={cx("mega")}></div>
            </li>
            <li className={cx("menu-item")}>
              <Link
                to='/accessory'
                className={cx(
                  "menu-link",
                  id === "accessory" ? "redArrow" : ""
                )}>
                Phụ Kiện
              </Link>
              <div className={cx("mega")}></div>
            </li>
            <li className={cx("menu-item")}>
              <Link
                to='/news'
                className={cx("menu-link", id === "news" ? "redArrow" : "")}>
                Tin Tức
              </Link>
            </li>
          </ul>
        </div>
        <div className={cx("action")}>
          <ul className={cx("action-list")}>
            <li className={cx("action-item", "action-search")}>
              <Link to='#' className={cx("action-link")} onClick={searchToggle}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'>
                  <path
                    d='M7.66667 1C3.98477 1 1 3.98477 1 7.66667C1 11.3486 3.98477 14.3333 7.66667 14.3333C11.3486 14.3333 14.3333 11.3486 14.3333 7.66667C14.3333 5.63913 13.4282 3.823 12 2.60028'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'></path>
                  <path
                    d='M17 17.0001L15.2222 15.2223L14.3333 14.3334L12.5555 12.5557'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'></path>
                  <path
                    d='M11.6667 13.4448C12.9672 13.2884 13.3707 12.9054 13.4444 11.667'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'></path>
                </svg>
              </Link>
              {showSearch && (
                <div className={cx("search")}>
                  <div className={cx("boxSearch")}>
                    <input
                      ref={inputRef}
                      type='text'
                      placeholder='Nhập tên sản phẩm tìm kiếm...'
                      className={cx("inputSearch")}
                      value={payload.name}
                      onChange={(e) => {
                        setPayload({ ...payload, name: e.target.value });
                      }}
                    />
                    <Link to='/search'>
                      <button
                        className={cx("btnSearch")}
                        onClick={handleClearValue}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </Link>
                  </div>
                  {showSuggestBox && (
                    <SuggestBox
                      data={product}
                      closeSearch={setShowSearch}
                      payload={payload}
                    />
                  )}
                </div>
              )}
            </li>

            <li className={cx("action-item", "action-account")}>
              <Link to='' className={cx("action-link")}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='18'
                  viewBox='0 0 16 18'
                  fill='none'>
                  <path
                    d='M11 4C11 5.65685 9.65685 7 8 7C6.34315 7 5 5.65685 5 4C5 2.34315 6.34315 1 8 1C8.36019 1 8.70555 1.06348 9.02551 1.17985'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'></path>
                  <path
                    d='M1 17V13.5589C1 12.4819 1.61649 11.4972 2.62518 11.1197C3.98586 10.6105 6.28001 10 8 10C9.75626 10 11.7051 10.6365 13.2416 11.1518C14.3165 11.5123 15 12.5364 15 13.6702V17'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'></path>
                </svg>
              </Link>
              <div className={cx("drop-account")}>
                <Link to='/account/login' className={cx("")}>
                  Đăng nhập
                </Link>
                <Link to='/account/register' className={cx("")}>
                  Đăng ký
                </Link>
              </div>
            </li>
            <li className={cx("action-item", "action-heart")}>
              <Link to='/favourite' className={cx("action-link")}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='17'
                  viewBox='0 0 18 17'
                  fill='none'>
                  <path
                    d='M1.34821 8.7354C0.330209 5.77575 1.60274 2.00897 4.40225 1.2018C5.92926 0.663681 7.96523 1.20177 8.98323 2.81612C10.0012 1.20177 12.0372 0.663681 13.5642 1.2018C16.6182 2.27803 17.6363 5.77575 16.6183 8.7354C15.3458 13.3094 10.2557 16 8.98323 16C7.71073 15.7309 2.87522 13.5784 1.34821 8.7354Z'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                </svg>
                <span className={cx("headerWishlistCount")}>0</span>
              </Link>
            </li>
            <li className={cx("action-item", "action-cart")}>
              <Link to='/cart' className={cx("action-link")}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='19'
                  height='17'
                  viewBox='0 0 19 17'
                  fill='none'>
                  <circle cx='9' cy='15.7368' r='1.26316' fill='white'></circle>
                  <circle
                    cx='14.0526'
                    cy='15.7368'
                    r='1.26316'
                    fill='white'></circle>
                  <path
                    d='M2.68421 6.05273L1.8421 6.05273'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'></path>
                  <path
                    d='M3.52631 11.1055L2.6842 11.1055'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'></path>
                  <path
                    d='M3.52632 8.5791L1 8.5791'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'></path>
                  <path
                    d='M5.01003 3.94737L6.72226 11.6163C6.87534 12.3019 7.48373 12.7895 8.18622 12.7895H14.6659C15.3684 12.7895 15.9768 12.3019 16.1299 11.6163L17.4342 5.77422C17.6435 4.83706 16.9305 3.94737 15.9703 3.94737H14.6341H12.7895M5.01003 3.94737L4.50902 2.10616C4.33133 1.45315 3.73839 1 3.06164 1H1M5.01003 3.94737H8.21804H9.42105'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'></path>
                </svg>
                <span className={cx("count_item_pr")}>
                  {countProductInCart}
                </span>
              </Link>
            </li>
            <li
              className={cx("action-item", "action-menu")}
              onClick={() => {
                setOpenMenu(true);
              }}>
              <Link to='#' className={cx("action-link", "action-bar")}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='12'
                  viewBox='0 0 18 12'
                  fill='none'>
                  <path d='M6 2V0H18V2H6Z' fill='#F97E6C'></path>
                  <path d='M0 7H18V5H0V7Z' fill='#F97E6C'></path>
                  <path d='M6 12H18V10H6V12Z' fill='#F97E6C'></path>
                </svg>
              </Link>
            </li>
            <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
