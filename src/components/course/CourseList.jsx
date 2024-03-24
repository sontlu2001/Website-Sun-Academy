import { Link } from "react-router-dom";
import RightIcon from "../../assets/icons/RightIcon";
import CourseCard from "./CourseCard";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "./CourseList.css";

const CourseList = (props) => {
  const { heading } = props;
  const courses = [
    {
      id: 1,
      title: "HTML CSS ProHTML",
      category: "Web Development",
      price: 1299000,
      old_price: 2500000,
      description: "HTML CSS Pro",
      slug: "html-css-pro",
      viewer: 100,
      imageUrl:
        "https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png",
    },
    {
      id: 2,
      title: "Ngôn ngữ tiền xử lý Sass",
      category: "Web Development",
      price: 1299000,
      old_price: 2500000,
      description: "Sass",
      viewer: 100,
      slug: "sass",
      imageUrl:
        "https://files.fullstack.edu.vn/f8-prod/courses/20/648020fc16597.png",
    },
    {
      id: 2,
      title: "Ngôn ngữ tiền xử lý Sass",
      category: "Web Development",
      price: 1299000,
      old_price: 2500000,
      description: "Sass",
      viewer: 100,
      slug: "sass",
      imageUrl:
        "https://files.fullstack.edu.vn/f8-prod/courses/20/648020fc16597.png",
    },
    {
      id: 2,
      title: "Ngôn ngữ tiền xử lý Sass",
      category: "Web Development",
      price: 1299000,
      old_price: 2500000,
      description: "Sass",
      viewer: 100,
      slug: "sass",
      imageUrl:
        "https://files.fullstack.edu.vn/f8-prod/courses/20/648020fc16597.png",
    },
    {
      id: 2,
      title: "Ngôn ngữ tiền xử lý Sass",
      category: "Web Development",
      price: 1299000,
      old_price: 2500000,
      description: "Sass",
      viewer: 100,
      slug: "sass",
      imageUrl:
        "https://files.fullstack.edu.vn/f8-prod/courses/20/648020fc16597.png",
    },
  ];

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
        <Slider {...settings} className="relative my-0 mx-auto ">
        {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};

CourseList.propTypes = {
  heading: PropTypes.string.isRequired,
}; 


export default CourseList;
