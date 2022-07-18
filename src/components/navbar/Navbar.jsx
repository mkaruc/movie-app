import Nav, {Div,MenuLink,HomePage, Menu,LogoutButton} from './Navbar.style'
import {useState} from 'react'

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <Nav justify="space-between" wrap="wrap">
      <Div>
      <HomePage to='/'>React Movie-App</HomePage>
      <Menu onClick={()=> setIsLogged(!isLogged)}>
        <MenuLink to='/login'>Login</MenuLink>
        <MenuLink to='/register'>Register</MenuLink></Menu>
      <LogoutButton isLogged={isLogged} onClick={()=> setIsLogged(isLogged)}>
        <MenuLink to="/logout">Logout</MenuLink>
      </LogoutButton>
      </Div>
    </Nav>
  )
}

export default Navbar