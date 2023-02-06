import { Link } from "react-router-dom";
import { useState } from "react";
import Loading from "./Loading";
import { addCart } from "../../../redux/action";
import { useDispatch } from "react-redux";
import { formatNumber } from "../../../hooks/useFormat";
import ToastCart from "../../ToastCart";

import styles from "./Product.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Product({ data, loading }) {
  const [cartState, setCartState] = useState(false);
  const dispatch = useDispatch();
  const addProduct = (data) => {
    if (data.size) {
      const payload = {
        ...data,
        size: data.size[0],
        qty: 1,
      };
      dispatch(addCart(payload));
    } else {
      const payload = {
        ...data,
        qty: 1,
      };
      dispatch(addCart(payload));
    }
  };

  const handleCart = () => {
    addProduct(data);
    setCartState(true);
  };
  return (
    <div className={cx("product-item")}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={cx("product-thumbnail")}>
            <div className={cx("btn-action")}>
              <Link to='/' className={cx("action-heart")}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='15'
                  viewBox='0 0 16 15'
                  fill='none'>
                  <path
                    d='M1.30469 7.70401C0.413933 5.13899 1.5274 1.87444 3.97697 1.17489C5.3131 0.708524 7.09458 1.17487 7.98533 2.57397C8.87608 1.17487 10.6576 0.708524 11.9937 1.17489C14.6659 2.10763 15.5567 5.13899 14.666 7.70401C13.5525 11.6681 9.09877 14 7.98533 14C6.87189 13.7668 2.64081 11.9013 1.30469 7.70401Z'
                    stroke='#949494'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                </svg>
              </Link>
              <div className={cx("action-cart")}>
                <button
                  className={cx("btn-buy")}
                  title='Thêm vào giỏ hàng'
                  onClick={handleCart}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='19'
                    height='19'
                    viewBox='0 0 19 17'
                    fill='none'>
                    <circle
                      cx='9'
                      cy='15.7368'
                      r='1.26316'
                      fill='white'></circle>
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
                </button>
              </div>
            </div>
            <ToastCart cartState={cartState} setCartState={setCartState} />
            <Link
              className={cx("image_thumb")}
              to={`/product/${data.id}`}
              title='Giày MLB Chunky-Liner High New York Yankees D.Navy'>
              <div className={cx("product-image")}>
                <img
                  src={data.image.content.before}
                  alt={data.image.content.before}
                />
              </div>

              <div className={cx("product-image", "second-image")}>
                <img
                  src={data.image.content.after}
                  alt={data.image.content.after}
                />
              </div>
            </Link>
          </div>
          <div className={cx("product-info")}>
            <span className={cx("brand")}>MLB Vietnam</span>
            <h3 className={cx("product-name")}>
              <Link
                to={`/product/${data.id}`}
                title='Giày MLB Chunky-Liner High New York Yankees D.Navy'>
                {data.title}
              </Link>
            </h3>
            <div className={cx("bottom-action")}>
              <div className={cx("price-box")}>
                <span className={cx("price")}>{formatNumber(data.price)}₫</span>
                <span className={cx("compare-price")}></span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
