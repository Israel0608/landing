import React, { useRef, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './NavBar.scss';
import logo from "../../Assets/images/logo-page.jpeg"

const Navbar: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="Navbar">
      <ul className='outer-ul'>

        <li className="trigger" onClick={() => setIsOpen(!isOpen)}>
          <a>XXX</a>
        </li>
        <li className="logo">
          <img src={logo} alt="logo" />
        </li>
        <li className={`li-inner-ul ${isOpen ? "is-open" : ""}`}>
          <ul className='inner-ul'>
            <li>
              <a href="#home">בית</a>
              <a href="#AboutSection">אודותינו</a>
              <a href="#Contact">צור קשר</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
