import React from 'react'
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg"
import subha from "../../assets/subha.jpg"

const About = () => {
  return (
    <div id='AboutMe' className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className='about-sections'>
        <div className='about-left'>
          <img src={subha} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>As an intermediate full stack developer, I have a passion for creating dynamic, user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I excel in building comprehensive solutions that meet the unique needs of each project. Over the years, I have successfully completed numerous projects, demonstrating my ability to work with various frameworks and languages. I am dedicated to continuous learning and staying updated with the latest industry trends, ensuring that my skills remain relevant and my projects are cutting-edge.</p>
            <p>My passion for Web development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"> <p>HTML & CSS</p><hr style={{ width: '70%' }} /></div>
            <div className="about-skill"> <p>React JS</p><hr style={{ width: '60%' }} /></div>
            <div className="about-skill"> <p>Node JS</p><hr style={{ width: '60%' }} /></div>
            <div className="about-skill"> <p>Tailwind CSS</p><hr style={{ width: '50%' }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLITED</p>
        </div>
      </div>
    </div>
  )
}

export default About
