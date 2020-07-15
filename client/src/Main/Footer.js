import React, { Component } from "react"
import "../CSS/Grid.css"
import "../CSS/Footer.css"

class Footer extends Component {
  render() {
    return (  
      <footer>
        <div class="contactForm">
            <h4>Let's Chat!</h4>
            <p>Feel free to use the form below or click <a href="mailto:@alexander.barbati@gmail.com" title="Email Alex Barbati" className='cLink'>here</a></p>
            
            <form action="/action_page.php" >
                <div className="fnContainer">
                    <label for="fName">First Name </label>
                    <input type="text" id="fName" name="firstName"/>
                </div>
                <div className="lnContainer">
                    <label for="lName">Last Name </label>
                    <input type="text" id="lName" name="lastName"/>
                </div>
                
                <div className="sub">
                    <label for="subject">Write something..</label>
                    <textarea id="subject" name="subject"></textarea>
                </div>
                <input type="submit" value="SUBMIT" className="submit"/>
            </form>       
        </div>
        <div className="contactLinks">
            <h4>I'm also at these places...</h4>
            <a
                href="https://www.linkedin.com/in/alexbarbati-developer/"
                target="_blank"
                rel="noopener noreferrer"
                title="Go to Alex Barbati's LinkedIn"
                className='cLink a'
            >

                <img src="https://res.cloudinary.com/dz3p8xcr8/image/upload/v1594307991/Portfolio/linkedin-icon-1_t90r29.svg"></img>
                
                <h5>LinkedIn</h5>
            </a>
            <a
                href="https://github.com/ajbarbati"
                target="_blank"
                rel="noopener noreferrer"
                title="Go to Alex Barbati's Github"
                className='cLink b'
            >
                <img src="https://res.cloudinary.com/dz3p8xcr8/image/upload/v1594307938/Portfolio/github-1_wqfx0v.svg"></img>

                <h5>Github</h5>
            </a>
        </div>
      </footer>
    )
  }
}

export default Footer