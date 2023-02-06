import { Link } from "react-router-dom";

import styles from "./ViewMore.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function ViewMore({ to = "/" }) {
  return (
    <div className={cx("view-more")}>
      <Link to={to} title='Xem tất cả'>
        Xem tất cả
      </Link>
    </div>
  );
}

export default ViewMore;
