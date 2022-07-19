import {BrowserRouter, Routes, Route, Navigate, Outlet,useLocation,} from 'react-router-dom'
import Main from '../pages/main/Main'
import Register from '../pages/register/Register'
import Login from '../pages/login/Login'
import Logout from '../pages/login/Logout'
import { useContext } from 'react'
import {AuthContext} from '../context/AuthContext'
import MovieDetail from '../pages/moviedetail/MovieDetail';
import { GlobalStyles } from '../components/globalStyles/Global.style';
import PrivateRouter from './PrivateRouter';
const AppRouter = () => {
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     setCurrentUser(user)
  //   })
  // }, []);
  const { currentUser } = useContext(AuthContext);
  

  return (
    
    <BrowserRouter>
      <GlobalStyles />
        <Routes>
        <Route exact path='/' element={
            <Main />
          }/>
          <Route element={<PrivateRouter />}>
          <Route path="/moviedetail" element={<MovieDetail />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/logout" element={<Logout />} />
        </Routes>
  </BrowserRouter>
  );
}

export default AppRouter;