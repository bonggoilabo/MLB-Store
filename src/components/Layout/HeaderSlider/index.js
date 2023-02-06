import Header from "../components/Header";
import Slide from "./Slide";
import Footer from "../components/Footer";

import styles from "./HeaderSlider.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function HeaderSlider({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <Slide />
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default HeaderSlider;
