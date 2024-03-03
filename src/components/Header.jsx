import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="px-6 py-10">
      <nav className="relative z-50 flex justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center md:gap-x-12">
          <Link className="flex items-center md:gap-x-12">
            <img className="h-10" src={logo} alt="React Logo" />
          </Link>
          <ul className="hidden text-lg text-gray-600 font-medium md:flex md:gap-x-6">
            <li className="cursor-pointer py-1 hover:text-gray-800 hover:font-bold relative after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-r from-violet-600 via-red-500 to-yellow-500 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer py-1 hover:text-gray-800 hover:font-bold relative after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-r from-violet-600 via-red-500 to-yellow-500 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:">
              <Link to="/">Course</Link>
            </li>
            <li className="cursor-pointer py-1">
              <Link to="/">Blog</Link>
            </li>
            <li className="cursor-pointer py-1">
              <Link to="/">About</Link>
            </li>
            <li className="cursor-pointer py-1">
              <Link to="/about">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <Link>Sign In</Link>
        </div>
      </nav>
    </header>
  );
}
