import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";
const { VITE_STRAPI_BASE_URL } = import.meta.env;

const CourseItem = (props) => {
  const { course } = props;
  const imageURL =
    VITE_STRAPI_BASE_URL +
      course.attributes.imageObj.data[0].attributes.formats.medium.url || "";
  

  const randomUser = () => {
    return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
  };

  return (
    <div className="mx-3 rounded-lg p-3 shadow-xl transform transition-transform duration-300 hover:translate-y-[-15px]">
      <div className="">
      <Link to={`/learning/${course.attributes.slug}/${course.id}`} key={course.id} className="">
        <img
          className="rounded-md h-[150px] object-cover"
          src={imageURL}
          alt={course.attributes.name}
        />
      </Link>
      </div>
     
        <h3 className="text-lg py-2 mt-3 font-bold">
          {course.attributes.name}
        </h3>
        <div className="flex items-center">
          <span className="text-sm line-through">
            {course.attributes.original_Price}
          </span>
          <span className="ml-4 text-lg text-lg text-primary ">
            {course.attributes.current_Price}
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
