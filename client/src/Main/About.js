import React, { Component } from "react"
import "../CSS/Grid.css"
import "../CSS/About.css"

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      landf: [
        "JavaScript", 
        "React.js", 
        "Node.js", 
        "PHP",
        "Apache", 
        "HTML", 
        "CSS", 
        "MySQL", 
        "jQuery", 
        "Bootstrap", 
        "MongoDB", 
        "Git",
        "WordPress"
      ],
      soft: [
        "VSCode",
        "Photoshop",
        "Illustrator",
        "XD",
        "MS Office Suite."
      ],
      resume: [
        {
          Company: "FortisureIT",
          Title: "Lead Web Developer",
          Time: "2020 – Present",
          Location: "Green, OH",
          Description: "Manages development concerning web-based applications and software. Makes important decisions with team regarding development for our clients, and curriculum for our training program. Reviews code, Develops alongside, and trains for Jr. Developers.",
          Projects: [
            {
              title: "Main Company Website",
              link: "https://fortisureit.com/",
              details: "Designed and Implemented a new company website using modern CSS best practices and CSS Grid. It uses Express.js to validate and sanitize forms on the backend, and to send custom emails using the Mailjet API."
            },
            {
              title: "Restaurant Mapping Site",
              link: "https://food.fortisureit.com",
              details: "A React.js site that uses a MySQL database of local restaurants to populate pins on the Google Maps API. The site connects to the database using a custom Node.js API."
            },
            {
              title: "PHP E-Commerce Site",
              link: "",
              details: "A PHP E-Commerce site using Object Oriented PHP. Combining a complex relational MySQL database, with AJAX, and JavaScript made a very dynamic and reliable E-Commerce experience."
            },
            {
              title: "Developer Curriculum",
              link: "",
              details: "Worked as part of a team to create content for and collaborate on a new 8-week curriculum. The curriculum covers HTML, CSS, JavaScript, PHP, Apache and hosting a web site on a Linux VM."
            }
          ]
        },
        {
          Company: "Self Employed",
          Title: "Freelance Web Developer",
          Time: "2014 - Present",
          Location: "Cleveland-Akron Area",
          Description: "Created many Websites and projects for clients, friends, and family Worked productive and positive to design, code, test, report, and debug operations. Successfully identified, diagnosed, and fixed website problems, including broken links, typographical errors, and formatting issues. Worked to assess competing websites in regards to content, look, and feel. Consistently learning the top methods and frameworks."
        }
      ]
      
    }
  
  
    

  
  }

  render() {
   

   
    return (
      <div className="main About">
        <article>
          <div className="aImgContainer">
            <img
            className="aboutImage"
            src="https://res.cloudinary.com/dz3p8xcr8/image/upload/v1594576380/Portfolio/5430315134833289010_oyfhie.jpg"
            alt="Alex Barbati | Brown hair, beard, and glasses"
            ></img>
          </div>
          <div className="intro">
            <h1>Hello,</h1>
            <p>
              I'm Alex Barbati currently a Lead Developer at FortisureIT. I do
              freelancing projects on the side for small businesses and friends.
              I've recently been blessed to have a wonderful daughter and I
              adore spending time with my family. Music is my passion whether it
              be listening, creating, or going to live shows, I love it all.
              </p>
          </div>
          <div className="linesImg">
            <img src="https://res.cloudinary.com/dz3p8xcr8/image/upload/v1594581782/Portfolio/Component_1_1_kl79pt.png" alt="two lines for aesthetics"></img>
          </div>
          <div className="tldr">
            <h3>TLDR</h3>
            <p>
              Certified Web Developer with over four years of experience,
              determined to create elegant websites.
            </p>
            <p>
              Enthusiastic collaborator that has a passion for completing
              projects efficiently.
            </p>
            <p>
              Over nine years of top-level customer service, creating
              connections with colleagues and clients, and delighting customers.
            </p>
          </div>
          <div className="technicalSkills">
            <h3>TECHNICAL SKILLS</h3>
            <h5 className="a">Languages & Frameworks</h5>
            <p className="a">
              {this.state.landf.map((tech, key) => (
                <span key={key}>
                  {tech}
                </span>
              ))}
            </p>
            <h5 className="b">Software</h5>
            <p className="b">
            {this.state.soft.map((tech, key) => (
                <span key={key}>
                  {tech}
                </span>
              ))}
            </p>
          </div>
          <div className="experience">
            <h3>EXPERIENCE</h3>
            <div className="jobs"> 
            {this.state.resume.map((job, key) => (
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
                        <div>
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
          </div>
        </article>
      </div>
    )
  }
}

export default About
