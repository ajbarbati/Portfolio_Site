import React, { Component } from "react"
import "../CSS/Grid.css"
import "../CSS/About.css"
class About extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  
  }

  render() {
   

   
    return (
      <div className="main About">
          
          {/* <div className="experience">
            <h3>EXPERIENCE</h3>
            <div className="jobs"> 
            {jsonFile.TimeLine.map((job, key) => (
                <div key={key} className="jobInner">
                  <div className="jobTitleDiv">
                    <h4 className="job Company">{job.Company}</h4>
                    <h4 className="job Title">{job.Title}</h4>
                    <h5 className="job Time">{job.Time}</h5>
                    <h5 className="job Location">{job.Location}</h5>
                  </div>                  
                  <div className="jobDescription">
                    <h5>Summary</h5>
                    {job.Description}
                  </div>
                  <div className="jobProjects">
                      {job.Projects === undefined ? null : 
                      <h5>
                        Projects
                      </h5>
                      
                      }
                      {job.Projects === undefined ? null : job.Projects.map((proj, key) => (  
                        <div key={key} >
                          <h6><a href={proj.link}>{proj.title}</a></h6>
                          <p>{proj.details}</p>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="otherExperience">
              <table>
              <caption>Additional Experience</caption>
              <tr>
                <th>Company</th>
                <th>Title</th>
                <th>Time</th>
                <th>Location</th>
               </tr> 
               <tr>
                 <td>Perfect Power Wash</td>
                 <td>Call Administrator</td>
                 <td>2019 – 2020</td>
                 <td>Norton, OH</td>
               </tr>
               <tr>
                 <td>Best Buy</td>
                 <td>Apple Specialist</td>
                 <td>2018 – 2019</td>
                 <td>Fairlawn, OH</td>
               </tr>
               <tr>
                 <td>Starbucks</td>
                 <td>Shift Supervisor</td>
                 <td>2015 – 2018</td>
                 <td>Fairlawn, OH</td>
               </tr>
              </table>
            </div>
          </div>
          <div className="education">
            <h3>EDUCATION</h3>
            <div className='a'>
              <h4>Certificate:</h4> 
              <span>Full Stack Web Development </span>| Case Western University | 2019 
            </div>
            <div className='b'>
              <h4>Certificate:</h4>
              <span>Web Programming Design </span>| Ohio Department of Education | 2014
            </div>
          </div> */}
      </div>
    )
  }
}

export default About
