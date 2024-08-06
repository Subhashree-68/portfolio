import React from 'react'
import "./Hero.css"
import profile from "../../assets/subha.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
    return (
        <div id='Hero' className='hero'>
            <img src={profile} alt="" />
            <h1><span>I'm  Subhashree  Behera,</span>Web  Developer</h1>
            <p>Student at Ajay Binay Institute of Technology, (ABIT), Cuttack</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#Contact"> Connect With Me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero
