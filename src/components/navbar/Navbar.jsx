import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className="homeLink">
      <Link to='/'>React Movie-App</Link>
      </div>
      <div className="menuLinks">
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/' onClick={() => sessionStorage.clear()}>Logout</Link>
      </div>
    </div>
  )
}

export default Navbar