import React from "react";
import { Link } from "react-scroll";
import '../CSS/Navbar.css'
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


//"function to reverse array"


const Navbar = () => {
  const [showtooglebar,setShowtooglebar]=useState(true);
  const showToggle=()=>{
    setShowtooglebar(!showtooglebar)
  }
 return(
      <div className="parent_div">
      <div className="fontIcondiv">
        <FontAwesomeIcon icon={faBars} onClick={()=>showToggle()}/>
      </div>
      <div className="name_div">
        <span>Ankit Verma</span>
      </div>
      {(showtooglebar)?
        <div className="main_navbar_div">
          <Link to="home">Home</Link>
          <Link to="projects" >Projects</Link>
          <Link to="contact">Contact us</Link>
        </div>: <div className="main_navbar_toggle_div">
          <Link to="home"onClick={()=>showToggle()}>Home</Link>
          <Link to="projects"onClick={()=>showToggle()}>Projects</Link>
          <Link to="contact"onClick={()=>showToggle()}>Contact us</Link>
        </div>
      }
     </div>
  )
}

export default Navbar
