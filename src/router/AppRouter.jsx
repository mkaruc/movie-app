import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from '../pages/main/Main'
import Register from '../pages/register/Register'
import VerifyEmail from '../pages/register/VerifyEmail';
import Login from '../pages/login/Login'
import {useState, useEffect} from 'react'
import {AuthProvider} from '../context/AuthContext'
import {auth} from '../auth/firebase'
import {onAuthStateChanged} from 'firebase/auth'
import PrivateRoute from './PrivateRouter'
import {Navigate} from 'react-router-dom'
import MovieDetail from '../pages/moviedetail/MovieDetail';
import { GlobalStyles } from '../components/globalStyles/Global.style';
import Logout from '../pages/login/Logout';
function AppRouter() {

  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    
    <BrowserRouter>
      <GlobalStyles />
      <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
        <Routes>
        <Route exact path='/' element={
            <Main />
          }/>
          <Route exact path='/moviedetail' element={
            <PrivateRoute>
              <MovieDetail />
            </PrivateRoute>
          }/>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path='/verify-email' element={<VerifyEmail/>} />
          <Route exact path="/logout" element={<Logout />} /> 
        </Routes>  
      </AuthProvider>
  </BrowserRouter>
  );
}

export default AppRouter;