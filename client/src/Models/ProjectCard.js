import React, { Component } from "react"
import "../CSS/Grid.css"
import "../CSS/ProjectCard.css"

import jsonFile from "../Projects.json"

class ProjectCard extends Component {
  render() {
    return (
      <div className="projectGrid">
        {jsonFile.Projects.map((project, key) => (
          <div key={key} className="projectCard">
            <h2 className="projectName">{project.Name}</h2>
            <div className="projectLinks">
              <a className="projectLink A" href={project.URL}>
                <img className="pGitLink" src="https://res.cloudinary.com/dz3p8xcr8/image/upload/v1594343230/Portfolio/github-1_nqhu66.png"></img>
              </a>
              <a className="projectLink B" href={project.URL}>
                <img className="pHostLink" src="https://res.cloudinary.com/dz3p8xcr8/image/upload/v1594343347/Portfolio/Icon_awesome-link_qwksft.png"></img>
              </a>
            </div>
            <div className="pImgContainer">
                <img
                    className="projectImage"
                    src={project.Image}
                    alt={project.Description}
                ></img>
            </div>
            <p className="projectDescription">{project.Description}</p>
            <div className="projectTech">
              {project.TechUsed.map((tech) => (
                <span className="techTags">#{tech} </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ProjectCard
{
  /* HERES MORE PROJECTS
        
        
       ,
        {
            "Name": "Data Dashboard",
            "Image": "Images4",
            "Tech Used": [
                "React",
                "Node.js",
                "Chart.js",
                "MySQL"
            ],
            "Description": "A data dashboard and or Admin Panel, with Node.js for Login and Registering accounts."
        },
        {
            "Name": "NEED TO MAKE A BIG 5th Project",
            "Image": "Images4",
            "Tech Used": [
                "Node.js",
                "CSS",
                "Handlebars",
                "MailJet API"
            ],
            "Description": "This Is Project 4"
        }

        
        */
}
