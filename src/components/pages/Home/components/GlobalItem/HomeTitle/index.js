import styles from "./HomeTitle.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function HomeTitle({ title = "", desc = "" }) {
  return (
    <div className={cx("title")}>
      <h1 className={cx("text-heading")}>{title}</h1>
      <p className={cx("text-desc")}>{desc}</p>
    </div>
  );
}

export default HomeTitle;
