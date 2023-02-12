import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../images/mylogo.png';

const NavBar = () => {
  return (
    <div className = 'navbar'>
      <div className = 'container'>
        <div className = 'logo'>
          <img src = {Logo} alt = 'logo' />
        </div>
        <div className = 'links'>
          <Link className = 'link' to = '/?cat = addiction'>
            <h6>ADDICTION</h6>
          </Link>
          <Link className = 'link' to = '/?cat = confession'>
            <h6>CONFESSION</h6>
          </Link>
          <Link className = 'link' to = '/?cat = fear'>
            <h6>FEAR</h6>
          </Link>
          <Link className = 'link' to = '/?cat = trauma'>
            <h6>TRAUMA</h6>
          </Link>
          <span><i>User Name</i></span>
          <span>Logout</span>
          <span className = 'new'>
            <Link className = 'link' to = '/new'>New</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default NavBar