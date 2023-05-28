import React from "react";
import "../components/Navbar.css";
function Navbar() {
  return (
    <nav>
      <div className='navbar-logo'>
        <imagen src='./images/momplanet.png' alt='Logo' />
      </div>
      <ul className='navbar-links'>
        <li>
          <a href='./components/Blog'>Blog</a>
        </li>
        <li>
          <a href='./components/Blog'>Newsletter</a>
        </li>
        <li>
          <a href='./components/Aboutus'>Sobre nosotros</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
