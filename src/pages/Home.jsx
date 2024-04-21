import { Fragment, useEffect, useState } from "react";
import Banner from "../components/banner/Carousel";
import CourseList from "../components/course/CourseList";
import api from "../httpClient";

export default function Home() {
  const [coursesByCategory, setCoursesByCategory] = useState([]);

  useEffect(() => {
    api
      .get("/course-categories?populate=courses.image")
      .then((res) => {
        return res.data.data;
      })
      .then((data) => {
        setCoursesByCategory(data);
      });
  }, []);

  return (
    <Fragment>
      <Banner />
      {coursesByCategory &&
        coursesByCategory.length > 0 &&
        coursesByCategory.map((course) => (
          <CourseList
            key={course.id}
            title={course.attributes.title}
            url_params={course.attributes.url_params}
            courses={course.attributes.courses.data}
          />
        ))}
    </Fragment>
  );
}
