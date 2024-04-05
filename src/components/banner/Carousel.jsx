import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css'
import PropTypes from "prop-types";

const Banner = () => (
  <Slider {...settings} className="banner-slider relative rounded-lg my-0 mx-auto w-11/12 mt-20 mb-10">
    <div className="bg-gradient-secondary h-80 rounded-3xl relative">
      <div className="w-1/2 p-10 absolute top-0 left-0 text-white flex flex-col gap-y-10">
        <h2 className="text-3xl font-semibold">Lớp Offline tại Hà Nội</h2>
        <p className="text-lg font-medium">
          Thực hành dự án với Figma, hàng trăm bài tập và thử thách, hướng dẫn
          100% bởi Sơn Đặng, tặng kèm Flashcards, v.v.
        </p>
        <span>
          <a
            className="border cursor-pointer p-3 border-white rounded-full"
            href="https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw"
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
    <div className="bg-gradient-tertiary h-80 rounded-3xl relative">
      <div className="w-1/2 p-10 absolute top-0 left-0 text-white flex flex-col gap-y-10">
        <h2 className="text-3xl font-semibold">Lớp Offline tại Hà Nội</h2>
        <p className="text-lg font-medium">
          Thực hành dự án với Figma, hàng trăm bài tập và thử thách, hướng dẫn
          100% bởi Sơn Đặng, tặng kèm Flashcards, v.v.
        </p>
        <span>
          <a
            className="border cursor-pointer p-3 border-white rounded-full"
            href="https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw"
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
  </Slider>
);

export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
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
  nextArrow: <NextArrow className="before:text-lg"/>,
  prevArrow: <PrevArrow />,
};

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
}

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
}

export default Banner;
