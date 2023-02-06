import Header from "../components/Header";
import Sidebar from "../../pages/CategoryProduct/components/Sidebar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <Banner />
      <div className={cx("container")}>{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
