import React from "react";
import "../CSS/Project.css";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import National_CSR_Logo from "../images/National_CSR_Logo.png";

const Projects = () => {
  return (
    <div className="project_parent_div" id="projects">

      {/* *********headings************* */}
      <div className="headin_div">
        <h2>
          My<span className="span">Projects</span>
          <hr  className="hrline"/>
        </h2>
      </div>

{/* ****************card div************************* */}
        <div className="project_subparent_div ">

          <div className="project_1 card">
            <img className="images" src={image1} alt=''></img>
            <a
              href="https://github.com/Ankit0827/weatherforcast"
              className=" para text-white">
              Weatherforecast
            </a>
            <p className="para2 text-white">
              I had created this project using React.js. Where you will
              find weather report of all country.
            </p>
          </div>

          <div className="project_2 card">
            <img className="images" src={image2} alt=''></img>
            <a
              href="https://github.com/Ankit0827/crud"
              className=" para text-white">
              CRUD Operation
            </a>
            <p className="para2 text-white">
              In this Project i shown CRUD operation. To show Crud
              operation i used fake API from GOOGLE.
            </p>
          </div>

          <div className="project_3 card">
            <img className="images3" src={National_CSR_Logo} alt=''></img>
            <a
              href="https://github.com/Ankit0827/cloneOfNCR"
              className="para text-white">
              National CSR Portal
            </a>
            <p className="para2 text-white">
              This project basicaly clone of Government Website.
            </p>
          </div>
  
        </div>


    </div>
  );
};
export default Projects;
