import React, { Component } from "react"
import ProjectCard from "../Models/ProjectCard.js"

import "../CSS/Grid.css"
import "../CSS/ProjectCard.css"


class ProjectList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      colors: [
          "#A7D7C5",
          "#75A7BA",
          "#5C8D89",
          "#365E59",
          "#5C8D89",
          "#A7D7C5",
          "#365E59",
          "#75A7BA",
          "#5C8D89",
          "#365E59",
          "#5C8D89",
          "#A7D7C5",
          "#75A7BA"
        ]
    }
  }
  render() {
  return (
    <div className="ProjectList">
      <div className="projectWrap">
       
        <ProjectCard/>
      </div>
  </div>
  )
  }
}

export default ProjectList
