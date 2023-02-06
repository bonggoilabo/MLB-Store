import { useState } from "react";

import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Search() {
  const [value, setValue] = useState();
  return (
    <div className={cx("Search")}>
      <h1>Nhập từ khóa để tìm kiếm</h1>
      <div className={cx("boxSearch")}>
        <input
          type='text'
          className={cx("inputSearch")}
          placeholder='Bạn cần tìm gì?'
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Link to={`/search/${value}`}>
          <button className={cx("btnSearch")}>Tìm kiếm</button>
        </Link>
      </div>
    </div>
  );
}

export default Search;
