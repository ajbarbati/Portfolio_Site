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
      <article>
        <h1>A List of all my projects</h1>
        <p>Here's a project there's a projects</p>
      </article>
      <div className='projects'>
        <ProjectCard/>
    </div>
  </div>
  )
  }
}

export default ProjectList
