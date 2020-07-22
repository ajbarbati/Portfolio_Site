import React, { Component } from "react"
import ProjectCard from "../Models/ProjectCard.js"

import "../CSS/Grid.css"
import "../CSS/ProjectCard.css"

import jsonFile from "../Projects.json"

class ProjectList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
  return (
    <div className="ProjectList">
      <h2 className="projectTitle">Projects</h2>
      <div className='projects'>
        <ProjectCard/>
      </div>
  </div>
  )
  }
}

export default ProjectList
