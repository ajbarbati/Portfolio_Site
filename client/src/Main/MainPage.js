import React, { Component } from "react"

import About from "./About.js"
import ProjectList from "./ProjectList.js"
import Footer from "./Footer.js"


class MainPage extends Component {
  constructor(props) {
    super(props) 
   
    this.state = {
        active: false,
        words: [
          "Developer",
          "Designer",
          "Artist",
          "Engineer",
          "Team Player",
          "Leader"
        ]
    }
}

// componentDidMount() {
 
//   let w

//   while (true) {

//   }
// }

scrollToTop() {
  this.top.scrollIntoView({ behavior: 'smooth', block: "start" });
}
scrollToBottom() {
  this.bottom.scrollIntoView({ behavior: 'smooth', block: "end" });
}
scrollTo() {
  this.project.scrollIntoView({ behavior: 'smooth', block: "start" });
}
  render() { 


    return (
      // <HashRouter>
        <div className="MainPage" ref={(top) => {this.top = top;}}>
          <div className="intro">
            <div className="headerText">
              <div className="textDiv">
                <div className="textWrapper">
                  <h1>Do you need a,</h1>
                  <h1 className="whatDoYou">Developer<span className="qM"> ?</span></h1>
                  <p>
                    I'm a Web Developer currently looking for new opportunities. I have professional experience working for FortisureIT.
                    Recently I worked with a family to set up a website for their small business. Before that I've worked in the retail and service industries.
                    Working in these industries I learned the importance of client retention and a great customer experience.
                    I am blessed to have a wonderful daughter and I adore spending time with my family. 
                  </p>
                </div>
                <div className="buttonDiv">
                  <button className="contactButtonA">Scroll Down to See my Work!</button>
                </div>
              </div>
            </div>
          </div>
          <nav>
            <div className="navInnerCon">
              <button onClick={() => this.scrollToBottom()} className="contactButtonB">Say Hey!</button>
              <button onClick={() => this.scrollToTop()} className="L home">Home</button>
              {/* <button className="L about">Experience</button> */}
              <button onClick={() => this.scrollTo()} className="L projectList">Projects</button>
              {/* <a to="/projectList" className="projectList">Blog</a> */}
          
                {/* <h3 onClick={ () => this.setState({active: !this.state.active}) }>About</h3>
                <h3 onClick={ () => this.setState({active: !this.state.active}) }>Resume</h3>
                <h3 onClick={ () => this.setState({active: !this.state.active}) }>Projects</h3>
          
          <h3 onClick={ () => this.setState({active: !this.state.active}) }>Contact</h3> */}

            </div>
          </nav>     
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route path="/about" component={About} />
            <Route path="/projectList" component={ProjectList} /> */}
            <div ref={(project) => {this.project = project;}} ></div><ProjectList />
            <About />
            <div className="footContainer" ref={(bottom) => {this.bottom = bottom;}}><Footer></Footer></div>
        </div>
      // </HashRouter>
    )
  }
}

export default MainPage
