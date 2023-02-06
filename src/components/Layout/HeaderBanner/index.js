import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import styles from "./HeaderBanner.module.scss"
import classNames from "classnames/bind"
const cx = classNames.bind(styles)

function HeaderBanner({ children}) {
    return (  
        <>
            <Header/>
            <Banner/>
            <div className={cx("container")}>
                <div className={cx("content")}>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default HeaderBanner;
