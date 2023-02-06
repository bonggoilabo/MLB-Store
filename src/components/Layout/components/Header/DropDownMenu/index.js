import styles from "./DropDownMenu.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function DropDownMenu({ children }) {
  return (
    <div className={cx("mega-content")}>
      <ul className={cx("mega-list")}>
        <li className={cx("mega-items")}>
          <a href='/' className={cx("mega-image")}>
            <img
              src='https://bizweb.dktcdn.net/thumb/compact/100/446/974/collections/giay-mlb.gif?v=1645674761937'
              alt=''
            />
          </a>
          <a href='/' className={cx("mega-title")}>
            ALL Shoes
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DropDownMenu;
