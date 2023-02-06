import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductTab from "./ProductTab";
import ProductInfo from "./ProductInfo";
import productApi from "../../../api/productApi";
import ProductList from "../../GlobalItem/ProductList";
import { HomeTitle } from "../../pages/Home/components/GlobalItem";

import styles from "./Product.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [listProduct, setListProduct] = useState("");
  const [loading, setLoading] = useState(true);
  //Lấy dữ liệu
  useEffect(() => {
    const product = async () => {
      try {
        const response = await productApi.getById(id);
        console.log("res" + response);
        setProduct(response[0]);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        console.log(error);
      }
    };
    product();
  }, [id]);
  useEffect(() => {
    const productList = async () => {
      try {
        const response = await productApi.getCategory(product.category, {
          _limit: 4,
        });
        setListProduct(response);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        console.log(error);
      }
    };
    productList();
  }, [product.category]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <ProductInfo data={product} idCategory={id} loading={loading} />
        <div className={cx("product-tab")}>
          <ProductTab data={product} />
        </div>
        {listProduct.length > 0 && (
          <div className={cx("product-recommand")}>
            <HomeTitle title='CÓ THỂ BẠN THÍCH' desc='' />
            <ProductList data={listProduct} column={4} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
