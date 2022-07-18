import Nav, {Div,MenuLink,HomePage, Menu} from './Navbar.style'


const Navbar = () => {
  return (
    <Nav justify="space-between" wrap="wrap">
      <Div>
      <HomePage to='/'>React Movie-App</HomePage>
      <Menu>
        <MenuLink to='/login'>Login</MenuLink>
        <MenuLink to='/register'>Register</MenuLink>
        {/* <MenuLink to='/' onClick={() => sessionStorage.clear()}>Logout</MenuLink> */}
      </Menu>
      </Div>
    </Nav>
  )
}

export default Navbar