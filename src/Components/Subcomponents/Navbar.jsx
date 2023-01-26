import React from "react";
import { Link } from "react-scroll";
import '../CSS/Navbar.css'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
  const [showtooglebar,setShowtooglebar]=useState(true);
  const showToggle=()=>{
    setShowtooglebar(!showtooglebar)
  }
  return (
      <div className="parent_div">
      <div className="fontIcondiv">
        <FontAwesomeIcon icon={faBars} onClick={()=>showToggle()}/>
      </div>
      {(showtooglebar)?
        <div className="main_navbar_div">
          <Link>Home</Link>
          <Link>Projects</Link>
          <Link>Contact us</Link>
        </div>: <div className="main_navbar_toggle_div">
          <Link>Home</Link>
          <Link>Projects</Link>
          <Link>Contact us</Link>
        </div>
      }
     </div>
  )
}

export default Navbar
