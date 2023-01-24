import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-scroll";
import '../CSS/Navbar.css'

const MainNavbar = () => {
  return (
    <div className="navbar_main_div">
              <Link className="nav_link p-2" to="home"
                 span={true}
              smooth={true}
              >Home</Link>
              <Link className="nav_link p-2"  to="projects"
              span={true}
              smooth={true}
           >Projects</Link>
              <Link className="nav_link p-2"  to="contact"
              span={true}
              smooth={true}
              >Contact</Link>
    </div>
  )
}
export default MainNavbar