import { useState, useEffect } from "react";

import { ViewMore, HomeTitle } from "../../components/GlobalItem";
import { ProductList } from "../../../../GlobalItem";
import productApi from "../../../../../api/productApi";

import { Link } from "react-router-dom";

import styles from "./NewShoes.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function NewShose({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataShoes = async () => {
      try {
        const response = await productApi.getCategory("shoes");
        setData(response);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        console.log(error);
      }
    };
    dataShoes();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <HomeTitle
          title='NEW SHOES'
          desc='Những phiên bản Sneaker MLB mới nhất tại Việt Nam'
        />
        <div className={cx("banner-product")}>
          <Link href='giay-mlb-chinh-hang-moi-nhat' title='NEW SHOES'>
            <img
              width=''
              height=''
              src='https://bizweb.dktcdn.net/100/446/974/collections/giay-mlb-moi.gif?v=1657736415377'
              data-src='https://bizweb.dktcdn.net/100/446/974/collections/giay-mlb-moi.gif?v=1657736415377'
              alt='NEW SHOES'
            />
          </Link>
        </div>
        <div className={cx("block-product")}>
          <ProductList loading={loading} column={4} data={data} />
          <ViewMore to='/shoes' />
        </div>
      </div>
    </div>
  );
}

export default NewShose;
