import { Empty } from "../../GlobalItem";

import styles from "./Favourite.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Favourite() {
  return (
    <div className={cx("wrapper")}>
      <Empty content='Chức năng này sẽ sớm được cập nhật' />
    </div>
  );
}

export default Favourite;
