import React, { Component } from "react"
import "../CSS/Grid.css"
import "../CSS/ProjectCard.css"


import jsonFile from "../Data/Projects.json"



class ProjectCard extends Component {
  constructor(props) {
    super(props)

   this.state = {
     url: "",
    search: "",
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
      ],
      projects: jsonFile.Projects ,
      techSkills: jsonFile.TechSkills, // aka TechSkills
      activeFilter: []
  }
}

onFilterChange(filter) {
    const { techSkills, activeFilter } = this.state;
    if (filter === "ALL") {
      if (activeFilter.length === techSkills.length) {
        this.setState({ activeFilter: [] });
        
        console.log(1)
      } else {
        this.setState({ activeFilter: techSkills.map(filter => filter.value) });
       
        console.log(1.2)
      }
    } else {
      if (activeFilter.includes(filter)) {
        const filterIndex = activeFilter.indexOf(filter);
        const newFilter = [...activeFilter];
        newFilter.splice(filterIndex, 1);
        this.setState({ activeFilter: newFilter });
        
        console.log(2)
      } else {
        this.setState({ activeFilter: [...activeFilter, filter] });
        
        console.log(2.1)
      }
    }
  }

  render() {
    const { techSkills, activeFilter, colors } = this.state;
    let filteredList;
    if (
      activeFilter.length === 0 ||
      activeFilter.length === techSkills.length
    ) {
      filteredList = this.state.projects;
      
      console.log("filtered lists", 1)
    } else {
      // let projectMatchingSkill = function (fart) {
      //   let i = 0
      //   for (i; i =5; i++) {
      //     return fart.TechUsed[i].toUpperCase()
      //   }
      // }
      filteredList = this.state.projects.filter(item => this.state.activeFilter.includes(item.TechUsed[0]));
        // let filter = this.state.activeFilter
        // let i = 0;
        // while ( i <= 5 ) {
        //   return 
        // }

        // let skill = output
        // filter.includes(skill)
      
      
      // filteredList = this.state.projects.filter(w => this);
      console.log(this.state.projects)
      console.log(this.state.activeFilter) 
    }
    return (
      <div className="projectWrap">
        {/* <h3>What <i>#Skills</i> are you looking for?</h3>

        <div className="technicalSkills">
        <label htmlFor="myInput" className="clearBtn">All</label>
          <input
            id="myInput"
            type="checkbox"
            onClick={() => this.onFilterChange("ALL")}
            checked={activeFilter.length === techSkills.length}
          />
            {this.state.techSkills.map((filter, key) => (
            <React.Fragment>
              <label htmlFor={filter.id} className="checkLabel" style={{backgroundColor: colors[key]}}>{filter.name}</label>
              <input 
                id={filter.id}
                type="checkbox"
                checked={activeFilter.includes(filter.value)}
                onClick={() => this.onFilterChange(filter.value)}
              />
              </React.Fragment>
            ))} */}
        
           <div className="projectGrid">
           {/*// filter(searchingFor(this.state.search)) */}
            {filteredList.map((project, key) => (
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
                  {project.TechUsed.map((tech, key) => (
                    <span className="techTags">#{tech} </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
    );
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
