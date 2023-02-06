import images from "../../../../asset/images";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

import styles from "./Slide.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Slide() {
  return (
    <div className={cx("wrapper")}>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className={cx("mySwiper")}>
        {images.slider.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={cx("slide-item")}>
                <img
                  height='100%'
                  width='100%'
                  className={cx("slide-image")}
                  src={image}
                  alt='imageSlide'
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slide;
