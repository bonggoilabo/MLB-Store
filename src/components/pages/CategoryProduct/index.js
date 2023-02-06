import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ProductList, Pagination, Empty } from "../../../components/GlobalItem";
import productApi from "../../../api/productApi";
import Sidebar from "./components/Sidebar";

import styles from "./CategoryProduct.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function CategoryProduct() {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [idCategory, setIdCategory] = useState(id);
  const [loading, setLoading] = useState(true);
  const [maxItem, setMaxItem] = useState();
  const [payload, setPayload] = useState({
    _limit: 6,
    _page: 1,
    _sort: "",
    _order: "",
  });

  //Đếm số lượng sản phẩm tối đa
  useEffect(() => {
    const { _limit, _page, ...rest } = payload;
    const count = async () => {
      try {
        const countItem = await productApi.getCategory(id, rest);
        setMaxItem(countItem.length);
      } catch (err) {
        console.log(err);
      }
    };
    count();
  }, [id, payload]);

  //Reset payload khi đổi category
  useEffect(() => {
    if (id !== idCategory) {
      setIdCategory(id);
      setPayload({ ...payload, _page: 1 });
    }
  }, [id]);

  useEffect(() => {
    const productList = async () => {
      try {
        setLoading(true);
        const response = await productApi.getCategory(id, payload);
        setData(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    productList();
  }, [id, payload]);
  return (
    <div className={cx("wrapper")}>
      <Sidebar
        payload={payload}
        setPayload={setPayload}
        setData={setData}
        data={data}
      />
      <div className={cx("content")}>
        {data.length > 0 ? (
          <ProductList column={3} data={data} loading={loading} />
        ) : (
          <Empty content='Không có sản phẩm trong danh mục này.' />
        )}
        {maxItem > payload._limit && (
          <Pagination
            payload={payload}
            setPayload={setPayload}
            maxItem={maxItem}
          />
        )}
      </div>
    </div>
  );
}

export default CategoryProduct;
