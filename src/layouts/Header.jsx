import { Link } from "react-router-dom";
import { BiSearch, BiCartAlt} from "react-icons/bi";
import { Fragment, useState } from "react";

export default function Header() {
  const [isLogin] = useState(false);

  return (
    <header className="fixed min-h-[70px] top-0 left-0 right-0 z-50 mb-5 bg-white">
      <nav className="flex justify-between item-center relative py-2 border-b-[1px] z-50 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center md:gap-x-12">
          <Link to={'/'} className="flex items-center md:gap-x-12">
            <img className="h-[50px]" src="/logo.png" alt="React Logo" />
          </Link>
        </div>
        <div className="shadow-xl flex items-center p-2 rounded-full border gap-x-2 ">
          <BiSearch size="20" />
          <input
            className="outline-none"
            placeholder="Tìm kiếm khoá học..."
            type="text"
            name=""
            id=""
          />
        </div>
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
      </nav>
    </header>
  );
}
