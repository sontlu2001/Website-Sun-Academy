import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Register from "./components/user/Register";
import { UserContext } from "./context/userContext";
import Main from "./layouts/Main";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Learning from "./pages/Learning/Learning";

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
            <Route path="/learning/:slug/:courseId" element={<Learning />} />
            {/* <Route path="/search" element={<SearchResultsPage />} /> */} 
          </Route>

          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
