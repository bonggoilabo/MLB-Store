import Product from "./Product";

import styles from "./ProductList.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function ProductList({ data, column, loading }) {
  return (
    <div
      className={cx("product-list")}
      style={{ gridTemplateColumns: `repeat(${column}, 1fr)` }}>
      {data.map((item, index) => {
        return (
          <Product key={index} loading={loading} column={column} data={item} />
        );
      })}
    </div>
  );
}

export default ProductList;
