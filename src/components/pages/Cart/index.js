import { useSelector } from "react-redux";
import CartBody from "./CartBody";
import CartTotal from "./CartTotal";
import CartEmpty from "./CartEmpty";

import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Cart() {
  const data = useSelector((state) => {
    return state.cart;
  });
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <h1 className={cx("cart-title")}>Giỏ hàng của bạn</h1>
        {data.cartAr.length > 0 ? (
          <>
            <CartBody />
            <CartTotal />
          </>
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
}

export default Cart;
