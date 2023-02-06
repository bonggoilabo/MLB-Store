import { HomeTitle } from "../../components/GlobalItem";

import styles from "./News.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function News({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <HomeTitle title='NEWS' desc='Tin Tức MLB Mới Nhất' />
        <div className={cx("new-list")}>
          <div className={cx("new-item")}>
            <figure className={cx("new-image")}>
              <a href='/'>
                <img
                  src='https://bizweb.dktcdn.net/100/446/974/articles/nhanh-nhen-va-tu-tin-cung-bo-ba-mau-tui-mlb-mini-nho-gon.jpg?v=1667359615160'
                  alt=''
                />
              </a>
            </figure>
            <div className={cx("new-info")}>
              <h1 className={cx("new-title")}>
                Nhanh nhẹn - Tự tin cùng bộ những mẫu Túi MLB Mini nhỏ gọn và
                hiện đại!
              </h1>
              <p className={cx("new-origin")}>
                Đăng bởi: <b>MLB Vietnam - 02/11/2022</b>
              </p>
              <p className={cx("new-desc")}>
                Bên cạnh các điều kiện cần thiết trong lối thiết kế để tạo nên
                một sản phẩm thời trang thời thượng, phù hợp với nhu cầu thẩm mỹ
                của giới trẻ hiện đại thì nhu cầu về tính thực dụng cũng là yếu
                tố được rất nhiều bạn trẻ lưu tâm, đặc biệt là những bạn trẻ yêu
                thích cảm giác nhẹ nhàng và năng động mỗi khi bước chân xuống
                phố. Sở hữu đồng thời cả hai yếu tố đó, MLB Korea là một trong
                những thương hiệu thời trang đi đầu trong lĩnh vực này với những
                chiếc Túi MLB Mini mang đậm bản sắc của riêng họ. Với sự sáng
                tạo mang cá tính rất riêng được lấy cảm hứng từ phong cách thời
                tr...
              </p>
            </div>
          </div>
          <div className={cx("new-item")}>
            <figure className={cx("new-image")}>
              <a href='/'>
                <img
                  src='https://bizweb.dktcdn.net/100/446/974/articles/phoi-do-ca-tinh-hon-voi-nhung-mau-tui-mlb-tote-thuc-dung.png?v=1666495876293'
                  alt=''
                />
              </a>
            </figure>
            <div className={cx("new-info")}>
              <h1 className={cx("new-title")}>
                <a href='/'>
                  Phối Đồ Cá Tính Hơn Với Những Chiếc Túi MLB Tote Thực Dụng
                </a>
              </h1>
              <p className={cx("new-origin")}>
                Đăng bởi: <b>MLB Vietnam - 02/11/2022</b>
              </p>
              <p className={cx("new-desc")}>
                Với những ai yêu thích thời trang, đặc biệt là phong cách đường
                phố phóng khoáng và hiện đại, chắc hẳn đã không còn quá xa lạ
                với các món phụ kiện như túi xách, mang trên mình tính thực dụng
                cho nhu cầu cá nhân lẫ...
              </p>
            </div>
            <div className={cx("entry-date")}>
              <p className={cx("day")}>21</p>
              <p className={cx("year")}>10/2022</p>
            </div>
          </div>
          <div className={cx("new-item")}>
            <figure className={cx("new-image")}>
              <a href='/'>
                <img
                  src='https://bizweb.dktcdn.net/100/446/974/articles/thu-suc-phoi-do-cung-bo-ba-tui-mlb-ny-tiem-nang-mua-moi-tu-mlb-korea.png?v=1665911455977'
                  alt=''
                />
              </a>
            </figure>
            <div className={cx("new-info")}>
              <h1 className={cx("new-title")}>
                <a href='/'>
                  Nhanh nhẹn - Tự tin cùng bộ những mẫu Túi MLB Mini nhỏ gọn và
                  hiện đại!
                </a>
              </h1>
              <p className={cx("new-origin")}>
                Đăng bởi: <b>MLB Vietnam - 02/11/2022</b>
              </p>
              <p className={cx("new-desc")}>
                Bên cạnh các điều kiện cần thiết trong lối thiết kế để tạo nên
                một sản phẩm thời trang thời thượng, phù hợp với nhu cầu thẩm mỹ
                của giới trẻ hiện đại thì nhu cầu về tính thực dụng cũng là yếu
                tố được rất nhiều bạn trẻ lưu tâm, đặc biệt là những bạn trẻ yêu
                thích cảm giác nhẹ nhàng và năng động mỗi khi bước chân xuống
                phố. Sở hữu đồng thời cả hai yếu tố đó, MLB Korea là một trong
                những thương hiệu thời trang đi đầu trong lĩnh vực này với những
                chiếc Túi MLB Mini mang đậm bản sắc của riêng họ. Với sự sáng
                tạo mang cá tính rất riêng được lấy cảm hứng từ phong cách thời
                tr...
              </p>
            </div>
            <div className={cx("entry-date")}>
              <p className={cx("day")}>21</p>
              <p className={cx("year")}>10/2022</p>
            </div>
          </div>
          <div className={cx("new-item")}>
            <figure className={cx("new-image")}>
              <a href='/'>
                <img
                  src='https://bizweb.dktcdn.net/100/446/974/articles/tui-mlb-nam-gioi-dang-so-huu-nhat-mua-nay-trong-nam-2022.jpg?v=1666322495487'
                  alt=''
                />
              </a>
            </figure>
            <div className={cx("new-info")}>
              <h1 className={cx("new-title")}>
                <a href='/'>
                  Nhanh nhẹn - Tự tin cùng bộ những mẫu Túi MLB Mini nhỏ gọn và
                  hiện đại!
                </a>
              </h1>
              <p className={cx("new-origin")}>
                Đăng bởi: <b>MLB Vietnam - 02/11/2022</b>
              </p>
              <p className={cx("new-desc")}>
                Bên cạnh các điều kiện cần thiết trong lối thiết kế để tạo nên
                một sản phẩm thời trang thời thượng, phù hợp với nhu cầu thẩm mỹ
                của giới trẻ hiện đại thì nhu cầu về tính thực dụng cũng là yếu
                tố được rất nhiều bạn trẻ lưu tâm, đặc biệt là những bạn trẻ yêu
                thích cảm giác nhẹ nhàng và năng động mỗi khi bước chân xuống
                phố. Sở hữu đồng thời cả hai yếu tố đó, MLB Korea là một trong
                những thương hiệu thời trang đi đầu trong lĩnh vực này với những
                chiếc Túi MLB Mini mang đậm bản sắc của riêng họ. Với sự sáng
                tạo mang cá tính rất riêng được lấy cảm hứng từ phong cách thời
                tr...
              </p>
            </div>
            <div className={cx("entry-date")}>
              <p className={cx("day")}>21</p>
              <p className={cx("year")}>10/2022</p>
            </div>
          </div>
          <div className={cx("new-item")}>
            <figure className={cx("new-image")}>
              <a href='/'>
                <img
                  src='https://bizweb.dktcdn.net/100/446/974/articles/mlb-ra-mat-bigball-chunky-mega-logo-chao-don-mua-thu-2022-1.png?v=1665762801347'
                  alt=''
                />
              </a>
            </figure>
            <div className={cx("new-info")}>
              <h1 className={cx("new-title")}>
                <a href='/'>
                  Nhanh nhẹn - Tự tin cùng bộ những mẫu Túi MLB Mini nhỏ gọn và
                  hiện đại!
                </a>
              </h1>
              <p className={cx("new-origin")}>
                Đăng bởi: <b>MLB Vietnam - 02/11/2022</b>
              </p>
              <p className={cx("new-desc")}>
                Bên cạnh các điều kiện cần thiết trong lối thiết kế để tạo nên
                một sản phẩm thời trang thời thượng, phù hợp với nhu cầu thẩm mỹ
                của giới trẻ hiện đại thì nhu cầu về tính thực dụng cũng là yếu
                tố được rất nhiều bạn trẻ lưu tâm, đặc biệt là những bạn trẻ yêu
                thích cảm giác nhẹ nhàng và năng động mỗi khi bước chân xuống
                phố. Sở hữu đồng thời cả hai yếu tố đó, MLB Korea là một trong
                những thương hiệu thời trang đi đầu trong lĩnh vực này với những
                chiếc Túi MLB Mini mang đậm bản sắc của riêng họ. Với sự sáng
                tạo mang cá tính rất riêng được lấy cảm hứng từ phong cách thời
                tr...
              </p>
            </div>
            <div className={cx("entry-date")}>
              <p className={cx("day")}>21</p>
              <p className={cx("year")}>10/2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
