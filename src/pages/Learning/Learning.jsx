import { Menu } from "antd";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import api from "../../httpClient";
import "./Learning.css"
import { useParams } from "react-router-dom";

export default function Learning() {
  const [lessons, setLesson] = useState([]);
  const [urlVideo, setUrlVideo] = useState("");
  const selectedKeys = [];
  const openKeys = [];
  const {courseId} = useParams();

  async function updateCurrentVideo(lessonId) {
    const res = await api.get(`/lessons/${lessonId}`);
    setUrlVideo(res.data.data.attributes.URL_video);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/getLessonByCourse/${courseId}`);
        const listLesson = response.data.chapters.map((chapter) => {
          return {
            key: chapter.id,
            label: chapter.name,
            children: response.data.lessons
              .filter((lesson) => lesson.chapter_id.id === chapter.id)
              .map((lesson) => ({
                label: (
                  <button key={lesson.URL_video} onClick={() => updateCurrentVideo(lesson.id)}>
                    {lesson.name}
                  </button>
                ),
                key: `Lesson ${lesson.id}`,
                children: null,
                type: [],
              })),
          };
        });
        // set defaultSelectedKeys
        openKeys.push(listLesson[0]["key"].toString());
        // set defaultOpenKeys
        selectedKeys.push(listLesson[0]["children"][0]["key"]);
        // set URL video
        setUrlVideo(listLesson[0]["children"][0]["label"].key);
        //setLesson
        console.log("listLesson", listLesson);
        setLesson(listLesson);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="mt-[70px]">
      <div className="w-9/12">
        <ReactPlayer
          className="p-2"
          url={urlVideo}
          width="100%"
          height="85vh"
          playing={false}
          controls={true}
        />
      </div>

      <div className="pt-2 w-3/12 h-[80vh] mt-[70px] fixed right-0  top-0 overflow-y-auto">
        <Menu
          style={{
            width: "full",
          }}
          defaultSelectedKeys={selectedKeys}
          defaultOpenKeys={openKeys}
          itemSelectedColor="#f33a58"
          mode="inline"
          items={lessons}
        />
      </div>
    </div>
  );
}
