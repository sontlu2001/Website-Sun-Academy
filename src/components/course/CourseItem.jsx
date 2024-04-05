import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";


const CourseItem = (props) => {
  const { course } = props;
  return (
    <div className="mx-3 rounded-lg p-3 shadow-xl transform transition-transform duration-300 hover:translate-y-[-15px]">
      <Link
        to={`/learning/vuejs/87fnds342`}
        key={course.id}
        className=""
      >
        <img className="rounded-md min-h-[150px]" src={course.imageUrl} alt={course.title} />
        <h3 className="text-lg py-2 mt-3 font-bold">{course.title}</h3>
        <div className="flex items-center">
          <span className="text-sm line-through">{course.old_price}</span>
          <span className="ml-4 text-lg text-lg text-primary ">{course.price}</span>
        </div>
        <small className="flex items-center gap-1"><BsPeopleFill />54353</small>
      </Link>
    </div>
  );
};

CourseItem.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    old_price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CourseItem;
