import { Fragment } from "react";
import Banner from "../components/banner/Carousel";
import CourseList from "../components/course/CourseList";

export default function Home() {
  // const [courses, setCourses] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("/courses")
  //     .then((response) => {
  //       setCourses(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  
  return (
    <Fragment>
      <Banner />
      <CourseList heading="Khoá học trả phí"></CourseList>
      <CourseList heading="Khoá học miễn phí"></CourseList>

    </Fragment>
  );
}
