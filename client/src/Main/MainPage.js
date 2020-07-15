import React, { Component } from "react"
// import { Route, NavLink, HashRouter } from "react-router-dom"

import Home from "./Home.js"
import About from "./About.js"
import ProjectList from "./ProjectList.js"
import Footer from "./Footer.js"


class MainPage extends Component {
 
  render() { 
    // const container = document.querySelector('.contactForm')

    // console.log(container.scrollTop)
    return (
      // <HashRouter>
        <div className="MainPage">
          <div className="title">
            <h1>Designer | Developer | Dad</h1>
          </div>
          <header>
            <nav>
              {/* <div className="navLinkGroup">
                <NavLink to="/" exact className="navLink">/Home</NavLink>
                <NavLink to="/about" className="navLink">/About</NavLink>
                <NavLink to="/projectList" className="navLink">/Project List</NavLink>
              </div>   */}
              <img
                className="profileImage"
                src="https://res.cloudinary.com/dz3p8xcr8/image/upload/v1593548339/Portfolio/profile-img_qgjufm.png"
                alt="Alex Barbati | Brown hair, beard, and glasses"
              ></img>
              <button className="contactBtn">CONTACT</button>
            </nav>
          </header>

          <div className="content">
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route path="/about" component={About} /> */}
            {/* <Route path="/projectList" component={ProjectList} /> */}
            <Home />
          </div>
          <Footer/>
        </div>
      // </HashRouter>
    )
  }
}

export default MainPage
