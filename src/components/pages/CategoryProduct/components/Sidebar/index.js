import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faFilter } from "@fortawesome/free-solid-svg-icons";
import ProductSort from "./ProductSort";
import CategoryProduct from "../../../CategoryProduct";
import ProductFilters from "./ProductFilters";
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Sidebar({ payload, setPayload, data, setData }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={cx("overlay", open ? "open" : "hidden")}></div>
      <div className={cx("wrapper", open ? "open" : "hidden")}>
        <div className={cx("filter-icon")} onClick={handleOpen}>
          {open ? (
            <FontAwesomeIcon icon={faClose} />
          ) : (
            <FontAwesomeIcon icon={faFilter} />
          )}
        </div>
        <aside className={cx("sidebar")}>
          <ProductSort payload={payload} setPayload={setPayload} />
          <ProductFilters payload={payload} setPayload={setPayload} />
        </aside>
      </div>
    </>
  );
}

export default Sidebar;
