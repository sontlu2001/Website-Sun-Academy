import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";
const { VITE_STRAPI_BASE_URL, VITE_STRAPI_BASE_URL_UPLOAD } = import.meta.env;

const CourseItem = (props) => {
  
  const courseId = props.courseId;
  const currentPrice = props.course.current_Price;
  const description = props.course.description;
  const isFree = props.course.is_fress;
  const name = props.course.name;
  const originalPrice = props.course.original_Price;
  const slug = props.course.slug;

const imageURL = props.course.image.data ?
VITE_STRAPI_BASE_URL_UPLOAD+props.course.image?.data[0].attributes.formats.medium.url : "";
  
  const randomUser = () => {
    return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
  };

  return (
    <div className="mx-3 rounded-lg p-3 shadow-xl transform transition-transform duration-300 hover:translate-y-[-15px]">
      <div className="">
      <Link to={`/learning/${slug}/${courseId}`} key={courseId} className="">
        <img
          className="rounded-md h-[150px] object-cover w-full"
          src={imageURL}
          alt="Ảnh minh hoạ"
        />
      </Link>
      </div>
        <Link to></Link>
        <h3 className="text-lg py-2 mt-3 font-bold">
         <Link to={`/learning/${slug}/${courseId}`}> {name}</Link>
        </h3>
        <div className="flex items-center">
          <span className="text-sm line-through">
            {originalPrice.toLocaleString('en-US')}
          </span>
          <span className="ml-4 text-lg text-lg text-primary ">
            {currentPrice.toLocaleString('en-US')}
          </span>
        </div>
        <small className="flex items-center gap-1">
          <BsPeopleFill />
          {randomUser()}
        </small>
      
    </div>
  );
};

export default CourseItem;
