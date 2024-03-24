import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Register from "./components/user/Register";
import Login from "./pages/Login";
// import CreateCourse from "./components/course/Create";
import Home from "./pages/Home";
// import UserProfile from "../pages/userProfile";
import { UserContext } from "./context/userContext";
// import ShowCourse from "./components/course/Show";
// import EditUser from "./components/user/Edit";
// import ShowLectures from "./components/lectures";
// import SearchResultsPage from "./components/search/SearchResult";
// import QuizPage from "./components/quiz/Show";
// import Layout from "./layouts/Main";
import Main from "./layouts/Main";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/courses/:id" element={<ShowCourse />} /> */}
            {/* <Route path="/profile/:id" element={<UserProfile />} /> */}
            {/* <Route path="/profile/edit/:id" element={<EditUser />} />
            <Route path="/courses/:id/lectures" element={<ShowLectures />} />
            <Route path="/courses/:id/quiz" element={<QuizPage />} />
            <Route path="/search" element={<SearchResultsPage />} /> */}
          </Route>

          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
