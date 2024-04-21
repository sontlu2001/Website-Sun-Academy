import { Link } from "react-router-dom";
import { BiSearch, BiCartAlt } from "react-icons/bi";
import { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import useDebounce from "../hooks/useDebounce";
const { VITE_STRAPI_BASE_URL } = import.meta.env;
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Header() {
  const [isLogin] = useState(false);
  const [keySearch, setKeySearch] = useState("");
  const [url, setUrl] = useState(`${VITE_STRAPI_BASE_URL}/course/search`);
  const keySearchDebounce = useDebounce(keySearch, 500);

  useEffect(() => {
    if (keySearchDebounce) {
      const capitalizedKeyword = keySearchDebounce.charAt(0).toUpperCase() + keySearchDebounce.slice(1);
      setUrl(
        `${VITE_STRAPI_BASE_URL}/course/search?keyword=${capitalizedKeyword}`
      );
    } else {
      setUrl(`${VITE_STRAPI_BASE_URL}/course/search`);
    }
  }, [keySearchDebounce, url]);

  const { data, error, isLoading } = useSWR(url, fetcher);

  const handleSearch = (e) => {
    setKeySearch(e.target.value);
  };

  return (
    <header className="fixed min-h-[70px] top-0 left-0 right-0 z-50 mb-5 bg-white">
      <div className="flex justify-between item-center relative py-2 border-b-[1px] z-50 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center md:gap-x-12">
          <Link to={"/"} className="flex items-center md:gap-x-12">
            <img className="h-[40px]" src="/logo.png" alt="React Logo" />
          </Link>
        </div>

        {/* Search input */}
        <div className="relative w-full max-w-[400px] relative">
          <div className="w-[400px] shadow-xl flex items-center rounded-full gap-x-2 py-2 px-4">
            {isLoading ? (
              <Spin
                indicator={
                  <LoadingOutlined
                    style={{
                      fontSize: 24,
                    }}
                    spin
                  />
                }
              />
            ) : (
              <BiSearch size="20" className="mr-2" />
            )}
            <input
              className="outline-none text-gray-800 py-[3px]"
              placeholder="Tìm kiếm khoá học..."
              type="text"
              name="search"
              id=""
              onChange={handleSearch}
              autoComplete="off"
            />
          </div>

          {/*Search result*/}
          {!isLoading && data && data.length > 0 && (
            <div>
              <ul className="absolute mt-2 w-full top-full left-0 rounded-xl bg-white z-70 p-3">
                {data.map((course) => (
                  <li key={course.id} className="p-2 cursor-pointer">
                    <Link to={`/learning/${course.slug}/${course.id}`}>Khoá học {course.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* No result data*/}
          {!isLoading && data && data.length === 0 && (
            <div className="absolute text-md text-gray-600 mt-2 w-full top-full left-0 rounded-xl bg-white z-70 py-3 px-4">
              Không tìm thấy kết quả
            </div>
          )}
        </div>

        {/* cart item & login */}
        <div className="flex items-center gap-x-5">
          <div className="relative">
            <button>
              <BiCartAlt size="25" />
            </button>
            <span className="w-4 h-4 bg-red-500 text-white absolute top-[-6px] right-[-5px] rounded-full text-xs flex items-center justify-center">
              0
            </span>
          </div>
          {isLogin ? (
            <Fragment>
              <button className="min-w-fit font-medium bg-hover-primary">
                Khoá học của tôi
              </button>
              <div className="flex gap-x-4 items-center">
                <span className="w-25 flex text-md font-medium">
                  Xin chào, Đỗ Sơn
                </span>
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOfjjDPZUEtzONTet2RjwoKaecpTJbC-j7qIqr-bSSDw&s"
                  alt=""
                />
              </div>
            </Fragment>
          ) : (
            <Link className="w-full btn-ct-primary h-[35px]">Đăng nhập</Link>
          )}
        </div>
      </div>
    </header>
  );
}
