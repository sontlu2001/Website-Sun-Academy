import { Menu } from "antd";
import { Fragment } from "react";
import ReactPlayer from "react-player";

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Navigation One', 'sub1', [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2', [
    getItem('Item 3', 'g3', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 4', 'g4', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
]
export default function Learning() {
  return (
    <div className="flex">
      <div className="flex-1 py-4 mt-9">
          <div className="mt-5">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=mx5RcI6NbkA"
              width="100%"
              height="640px"
              playing={false}
              controls={true}
            />
          </div>
          <div id="video_content" className="p-10">
            <h1 className="text-2xl font-bold">Bài học số 1</h1>
          </div>
      </div>
      <div className="w-1/5 bg-slate-400 mt-[76px]">
          <header className="bg-white text-black p-3">Nội dung khóa học</header>
          <Menu
        
            style={{
              width: "full",
            }}
            defaultSelectedKeys={[]}
            mode="inline"
            items={items}
          />
      </div>
      
    </div>
  );
}
