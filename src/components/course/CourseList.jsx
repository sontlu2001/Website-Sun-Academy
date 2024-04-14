import { Link } from "react-router-dom";
import RightIcon from "../../assets/icons/RightIcon";
import CourseItem from "./CourseItem";
import Slider from "react-slick";
import PropTypes from "prop-types";

// Custom next arrow for the slider
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
    className="h-10 w-10 absolute bg-white rounded-full p-2 right-0 -translate-y-1/2   translate-x-1/2 cursor-pointer top-1/2 shadow-custom"
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-black"
        fill="white"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

// Custom previous arrow for the slider
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={'h-10 w-10 absolute bg-white rounded-full p-2 left-0 -translate-y-1/2   -translate-x-1/2 cursor-pointer top-1/2 shadow-custom'}
      style={{ ...style, }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=""
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const CourseList = (props) => {
  const { heading, courses } = props;
  return (
    <div>
      <div className="p-10 pt-0">
        <div className="p-5 mb-5 flex justify-between">
          <h3 className="text-2xl font-bold">{heading}</h3>
          <Link className="text-lg text-primary font-bold" to="">
            Xem thêm
            <RightIcon />
          </Link>
        </div>
        <div className="slider-container">
        <Slider {...settings} className="relative my-0 mx-auto ">
          {courses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </Slider>
        </div>
       
      </div>
    </div>
  );
};


CourseList.propTypes = {
  heading: PropTypes.string.isRequired,
  courses: PropTypes.array
}; 


export default CourseList;
