import React, { Component } from "react"
import About from './About.js'
import ProjectList from './ProjectList.js'

import "../CSS/Grid.css"
import "../CSS/Home.css"
import jsonFile from "../Projects.json"


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  } 
  componentDidMount() {
    this.setState({ projects: jsonFile})
    console.log(jsonFile)
  }
  //   async getData(){
  //     const res = await fetch('./Projects.json');
  //     const data = await res.json();
  //     return this.setState({projects: data});
  //  }
  render() {
    return (
      <div className="Home">
        <div className="otherPages">
          <About/>
          <ProjectList/>
        </div>
      </div>
    )
  }
}

export default Home
