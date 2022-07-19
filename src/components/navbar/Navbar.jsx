import Nav, {Div,MenuLink,HomePage, Menu,LogoutButton} from './Navbar.style'
import {useState,useContext } from 'react'
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const { currentUser } = useContext(AuthContext);

  return (
    <Nav justify="space-between" wrap="wrap">
      <Div>
      <HomePage to='/'>React Movie-App</HomePage>
      {currentUser ? ( <h5>
        {currentUser?.displayName}
      </h5>
      ) : (
        <MenuLink to='/login'>Login</MenuLink>
        
        )}
        {currentUser ? (
      <LogoutButton >
        <MenuLink to="/logout">Logout</MenuLink>
      </LogoutButton>
      ) : (
        <MenuLink to='/register'>Register</MenuLink>
        )} 
      </Div>
    </Nav>
  )
}

export default Navbar