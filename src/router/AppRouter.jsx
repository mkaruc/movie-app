import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";
import Detail from "../pages/detail/Details";
import Register from "../pages/register/Register";
import { GlobalStyles } from "../components/globalStyles/Global.style";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>React Movie App</Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />}>
        
        </Route>

        <Route path="detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter