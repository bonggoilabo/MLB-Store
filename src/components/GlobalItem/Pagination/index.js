import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Pagination.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Pagination({ payload, setPayload, maxItem }) {
  const { _limit, _page } = payload;
  const totalPage = Math.ceil(maxItem / _limit);
  const arr = [];

  const prev = () => {
    if (_page > 1) {
      setPayload({ ...payload, _page: _page - 1 });
    }
  };
  const next = () => {
    if (_page < totalPage) {
      setPayload({ ...payload, _page: _page + 1 });
    }
  };
  const changePage = (newPage) => {
    if (_page !== newPage) {
      setPayload({ ...payload, _page: newPage });
    }
  };
  for (let index = 1; index <= totalPage; index++) {
    arr.push(index);
  }
  return (
    <div className={cx("pagination")}>
      <ul className={cx("page-list")}>
        {_page > 1 && (
          <li className={cx("page-item")} onClick={prev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </li>
        )}
        {_page > 2 && (
          <li className={cx("page-item")}>
            <span>...</span>
          </li>
        )}

        {arr.map((item) => {
          return (
            <li
              onClick={() => {
                changePage(item);
              }}
              key={item}
              className={cx("page-item", _page === item ? "active" : "")}>
              {item}
            </li>
          );
        })}
        {_page < totalPage - 1 && (
          <li className={cx("page-item")}>
            <span>...</span>
          </li>
        )}

        {_page < totalPage && (
          <li className={cx("page-item")} onClick={next}>
            <FontAwesomeIcon icon={faChevronRight} />
          </li>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
