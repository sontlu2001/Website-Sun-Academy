import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";
import PropTypes from "prop-types";

const Banner = () => (
  <Slider
    {...settings}
    className="banner-slider relative rounded-lg my-0 mx-auto w-11/12 mt-20 mb-10"
  >
    {/* banner 1*/}
    <div className="bg-gradient-secondary h-80 rounded-3xl relative">
      <div className="w-1/2 p-10 absolute top-0 left-0 text-white flex flex-col gap-y-10">
        <h2 className="text-3xl font-semibold">
          Website cung cấp các khoá học chất lượng nhất !
        </h2>
        <p className="text-lg font-medium">
          Thực hành dự án thực tế, hàng trăm bài tập và thử thách, hướng dẫn chi
          tiết...
        </p>
        <span>
          <a
            className="border cursor-pointer p-3 border-white rounded-full"
            href="https://www.youtube.com/channel/UCuCNFFEoTciqD3LkhaEljJw"
            target="_blank"
            rel="noreferrer noopener noreferrer"
          >
            Đăng ký kênh
          </a>
        </span>
      </div>
      <div className="w-1/2 absolute top-0 right-0">
        <a
          rel="noreferrer noopener noreferrer"
          target="_blank"
          href="https://forms.gle/QRHdZ6DG1sg1k4ZN6"
        >
          <img
            className=""
            src="https://files.fullstack.edu.vn/f8-prod/banners/36/6454dee96205c.png"
            alt="F8 - Học lập trình web offline"
            title="Lớp Offline tại Hà Nội"
          />
        </a>
      </div>
    </div>

    {/* banner 2 */}
    <div className="bg-gradient-tertiary h-80 rounded-3xl relative">
      <div className="w-1/2 p-10 absolute top-0 left-0 text-white flex flex-col gap-y-10">
        <h2 className="text-3xl font-semibold">Ra mắt khoá học VueJS</h2>
        <p className="text-lg font-medium">
          Khóa học về Vue.js cung cấp một cơ hội tuyệt vời để học về một trong
          những framework JavaScript phổ biến nhất hiện nay, đặc biệt là trong
          lĩnh vực phát triển ứng dụng web. Vue.js là một thư viện JavaScript
          dùng để xây dựng giao diện người dùng và ứng dụng web đơn trang (SPA)
          một cách dễ dàng và linh hoạt.
        </p>
      </div>
      <div className="w-1/2 absolute top-1/2 right-0 -translate-y-1/2">
        <div className="flex h-100vh justify-center items-center ">
          <img
            className="w-3/4 rounded-2xl"
            src="https://api.otakoyi.software/uploads/content/2023/11/20/1280/vuejs-and-seo--your-steps-to-take-to-become-more-seo-friendly-317x237.webp"
            alt="F8 - Học lập trình web offline"
            title="Lớp Offline tại Hà Nội"
          />
        </div>
      </div>
    </div>
  </Slider>
);

export function NextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow className="before:text-lg" />,
  prevArrow: <PrevArrow />,
};

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default Banner;
