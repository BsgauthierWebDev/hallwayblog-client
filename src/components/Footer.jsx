import React from 'react'
import Logo from '../images/mylogo.png';

const Footer = () => {
  return (
    <footer>
      <img src = {Logo} alt = 'logo' />
      <span>&copy; 2023 by BSGauthierWebDev using <b>React.js</b></span>
    </footer>
  )
}

export default Footer