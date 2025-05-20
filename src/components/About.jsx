import React from 'react'
import photoOne from "../assets/image/Vector 141.png"
import photoTwo from "../assets/image/lightbulb.png"
import photoThree from "../assets/image/Vector 186.png"
import photoFour from "../assets/image/doodle items.png"
import photoFive from "../assets/image/Group 62.png"
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="text">
          <img className='photoOne' src={photoOne} alt="photo error" />
          <img className='photoTwo' src={photoTwo} alt="photo error" />
          <h1>About <span>Me</span></h1>
          <p>
          Welcome to my portfolio! I'm a passionate and creative web developer focused on building modern, responsive, and user-friendly websites. I believe in turning ideas into powerful digital experiences using the latest technologies. My goal is to deliver smart and efficient web solutions that help businesses and individuals grow online. Through continuous learning and hands-on projects, I’m always improving and committed to providing high-quality results.</p>
          <img className='photoThree' src={photoThree} alt="photo error" />
        </div>
        <div className="image">
          <img className='photoFive' src={photoFive} alt="photo error" />
          <img className='photoFour' src={photoFour} alt="photo error" />
        </div>
      </div>
    </div>
  )
}

export default About