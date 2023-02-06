import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import productApi from "../../../../api/productApi";
import { Pagination } from "../../../GlobalItem";
import Search from "../index";

import ListProduct from "../../../GlobalItem/ProductList";

import styles from "./SearchName.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function SearchName() {
  const { name } = useParams();
  const [listProduct, setListProduct] = useState([]);
  const [countItemProduct, setCountItemProduct] = useState(0);
  const [loadingProduct, setLoadingProduct] = useState(false);
  const [listNews, setListNews] = useState([]);
  const [countItemNews, setCountItemNews] = useState(0);
  const [loadingNews, setLoadingNews] = useState(false);
  const [checkBox, setCheckBox] = useState({
    all: true,
    product: false,
  });
  const [payLoadProduct, setPayLoadProduct] = useState({
    name,
    _page: 1,
    _limit: 8,
  });
  const [payloadNews, setPayloadNews] = useState({
    name,
    _page: 1,
    _limit: 6,
  });

  useEffect(() => {
    const { _limit, _page, ...rest } = payLoadProduct;
    const count = async () => {
      try {
        const countItem = await productApi.getSearch(rest);
        setCountItemProduct(countItem.length);
      } catch (err) {
        console.log(err);
      }
    };
    count();
  }, [payLoadProduct]);
  useEffect(() => {
    setPayLoadProduct({ ...payLoadProduct, name });
  }, [name]);
  useEffect(() => {
    if (checkBox.all || checkBox.product) {
      const getProduct = async () => {
        const res = await productApi.getSearch(payLoadProduct);
        setListProduct(res);
      };
      getProduct();
    }
  }, [payLoadProduct]);
  return (
    <div className={cx("searchName")}>
      {checkBox.product || checkBox.all ? (
        <>
          <div className={cx("title")}>
            <h1>
              Tìm thấy{" "}
              <strong>{`${
                (checkBox.product || checkBox.all ? countItemProduct : 0) +
                (checkBox.news || checkBox.all ? countItemNews : 0)
              }`}</strong>{" "}
              kết quả với từ khóa
              <strong>{`"${name}"`}</strong>
            </h1>
            <div className={cx("searchOption")}>
              <Link
                to='\'
                onClick={() => {
                  setCheckBox({
                    ...checkBox,
                    all: false,
                    product: true,
                    news: false,
                  });
                }}>
                <i></i>
                Sản phẩm
              </Link>
              <Link
                to='\'
                onClick={() => {
                  setCheckBox({
                    ...checkBox,
                    all: false,
                    product: true,
                    news: false,
                  });
                }}>
                <i></i>
                Tin tức
              </Link>
            </div>
          </div>
          <div className={styles.wapper_pd}>
            <ListProduct
              data={listProduct}
              loading={loadingProduct}
              column={4}
            />
            {countItemProduct > payLoadProduct._limit && (
              <Pagination
                maxItem={countItemProduct}
                payload={payLoadProduct}
                setPayload={setPayLoadProduct}
              />
            )}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
