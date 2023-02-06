import { useState, useEffect } from "react";

import productApi from "../../../../../api/productApi";
import { ProductList } from "../../../../GlobalItem";
import { HomeTitle } from "../../components/GlobalItem";

import styles from "./MlbBag.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const tabs = [
  "Cross Bag",
  "Bucket Bag",
  "Hip Sack",
  "Hobo Bag",
  "Tote Bag",
  "Phone Pouch",
];

function MlbBag({ children }) {
  const [type, setType] = useState("Cross Bag");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productList = async () => {
      const payload = {
        _limit: 8,
        categoryDetail: type,
      };
      try {
        setLoading(true);
        const response = await productApi.getCategory("bag", payload);
        setData(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    productList();
  }, [type]);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("block-title")}>
          <HomeTitle title='MLB BAG' desc='Những Bộ Sưu Tập Túi MLB Hot Nhất' />
          <ul className={cx("tab-list")}>
            {tabs.map((tab, index) => {
              return (
                <li
                  key={index}
                  className={cx("tab-link", type === tab ? "active" : "")}
                  onClick={(e) => {
                    setType(tab);
                  }}>
                  {tab}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={cx("block-product")}>
          <ProductList column={4} data={data} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default MlbBag;
