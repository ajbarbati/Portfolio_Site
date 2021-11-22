import React, { useEffect, useState } from "react"
import Contact from "../Contact"
import projectData from "./projects.json"

function Landing() {
  const [about, setAbout] = useState(false)
  const [title, setTitle] = useState({
    n: 0,
    s: "Software Engineer with a passion for the user's experience",
  })
  const [projects, setProjects] = useState({})

  useEffect(() => {
    console.log(projectData)
    const data = projectData ? projectData : null
    setProjects(data)
  }, [])

  const handleAbout = () => {
    setAbout((state) => !state)
  }

  return (
    <div className={"main"}>
      <div className={"container"}>
        <div className={"styleDiv"}></div>
        <div className={"title"}>
          {/* hover over name and it will flourish, click on it to bring up a modal about me  */}
          <div className={"header"}>
            <h1 onClick={handleAbout}>Alex Barbati</h1>
            <h2>{title.s}</h2>
          </div>
          <div className={"links"}>
            <span>Check out my code</span>
            <span>Send me a message!</span>
            <span>Take a look at my work history</span>
          </div>
        </div>
        {about ? (
          <div>
            <span onClick={handleAbout}>X</span>
            <h3>About Me</h3>
            <p>
              I am a Father, Software Engineer, Designer, Musician and more.
            </p>
          </div>
        ) : null}
        <div className={"work"}>
          {
            consol.log(projects !== {} ? "true" : "false", projects)
            // ? projects["Projects"].map((project, key) => {
            //     return (
            //       <div className={"projectCard"} key={key}>
            //         <h4>{project.Name}</h4>
            //         <p>{project.GitHub}</p>
            //       </div>
            //     )
            //   })
            // : null
          }
        </div>
        <Contact test="yup" />
      </div>
    </div>
  )
}

export default Landing
