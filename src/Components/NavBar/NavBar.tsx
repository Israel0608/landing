import React, { useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.scss';

const Navbar: React.FC = () => {

  return (
    <nav className="Navbar">
      <ul>

        {/* <li className="logo">
          לוגו?
        </li> */}

        <li>
          {/* <HashLink smooth to="/home">בית</HashLink> */}
          <a href="#about">בית</a>
        </li>
        <li>
          <a href="#about">אודותינו</a>
        </li>
        <li>
          <a href="#Contact">צור קשר</a>
        </li>
      </ul>
      {/* <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div> */}
    </nav>
  );
};

export default Navbar;
