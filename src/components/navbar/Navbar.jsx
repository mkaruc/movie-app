import React from 'react'
import Main from '../../pages/main/Main'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className="homeLink">
      <Main> <h1>React Movie App</h1> </Main>
      </div>
      <div className="menuLinks">
        <Link to='/login'>Login</Link>
        <Link to='/Register'>Register</Link>
      </div>
    </div>
  )
}

export default Navbar