import { Link } from "react-router-dom";
import RightIcon from "../../assets/icons/RightIcon";
import CourseItem from "./CourseItem";
import Slider from "react-slick";
import { useEffect, useState } from "react";

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
      className={
        "h-10 w-10 absolute bg-white rounded-full p-2 left-0 -translate-y-1/2   -translate-x-1/2 cursor-pointer top-1/2 shadow-custom"
      }
      style={{ ...style }}
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



import PropTypes from "prop-types";

const CourseList = ({ title, courses = [] }) => {

  // Settings for the slider
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 2 : 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="p-10 pt-0">
        <div className="p-5 mb-5 flex justify-between xs:flex-col sm:flex-row">
          <h3 className="text-2xl font-bold">{title}</h3>
          <Link className="text-lg text-primary font-bold" to="">
            Xem thêm
          </Link>
        </div>
        <div className="slider-container">
          <Slider {...settings} className="relative my-0 mx-auto ">
            {courses.map((course) => (
              <CourseItem
                key={course.id}
                courseId={course.id}
                course={course.attributes}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

CourseList.propTypes = {
  title: PropTypes.string.isRequired,
  courses: PropTypes.array,
};

export default CourseList;
    
