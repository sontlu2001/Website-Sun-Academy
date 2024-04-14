import { Fragment, useEffect, useState } from "react";
import Banner from "../components/banner/Carousel";
import CourseList from "../components/course/CourseList";
import api from "../httpClient";

export default function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
   api.get('/courses?populate=*')
   .then(res => {
      return res.data.data
   })
   .then(data => {
    setCourses(data)
   })
  },[])
  
  return (
    <Fragment>
      <Banner />
      {/* <CourseList heading="Khoá học trả phí" courses={courses}></CourseList> */}
      <CourseList heading="Khoá học miễn phí" courses={courses}></CourseList>

    </Fragment>
  );
}
