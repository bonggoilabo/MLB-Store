import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

import Loading from "./Loading";
import styles from "./ProductLeft.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function ProductLeft({ data, loading }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={cx("product-left")}>
          <div className={cx("btn-heart")}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='15'
              viewBox='0 0 16 15'
              fill='none'>
              <path
                d='M1.30469 7.70401C0.413933 5.13899 1.5274 1.87444 3.97697 1.17489C5.3131 0.708524 7.09458 1.17487 7.98533 2.57397C8.87608 1.17487 10.6576 0.708524 11.9937 1.17489C14.6659 2.10763 15.5567 5.13899 14.666 7.70401C13.5525 11.6681 9.09877 14 7.98533 14C6.87189 13.7668 2.64081 11.9013 1.30469 7.70401Z'
                stroke='#949494'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'></path>
            </svg>
          </div>
          <div className={cx("slider")}>
            <div className={cx("slider-content")}>
              <Swiper
                pagination={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className='mySwiper2'>
                {data.image?.detail?.src.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img
                        className={cx("slider-image")}
                        key={index}
                        src={item}
                        alt=''
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className={cx("slider-dots")}>
              <Swiper
                onSwiper={setThumbsSwiper}
                navigation
                freeMode={true}
                spaceBetween={8}
                modules={[FreeMode, Navigation, Thumbs]}
                className='mySwiper'
                breakpoints={{
                  0: {
                    slidesPerView: 4,
                    spaceBetween: 4,
                  },
                  480: {
                    slidesPerView: 7,
                    direction: "horizontal",
                    spaceBetween: 8,
                  },
                  990: {
                    slidesPerView: 6,
                    direction: "vertical",
                  },
                  1024: {
                    slidesPerView: 6,
                    direction: "vertical",
                  },
                }}>
                {data.image?.detail?.src.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img
                        className={cx("image-dots")}
                        key={index}
                        src={item}
                        alt=''
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
