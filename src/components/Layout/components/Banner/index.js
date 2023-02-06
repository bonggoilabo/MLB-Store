import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Banner() {
  return (
    <div className={cx("banner")}>
      <div className={cx("container")}>
        <div className={cx("text-heading")}>
          MLB Vietnam | MLB Chính Hãng Tại Việt Nam
        </div>
        <ul className={cx("banner-link")}>
          <li>Chào mừng quý khách !</li>
        </ul>
      </div>
    </div>
  );
}

export default Banner;
