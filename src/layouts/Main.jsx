import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="max-w-screen-2xl text-base mx-auto font-medium">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
