import React from 'react'
import "./Footer.css";
import logo from "../../assets/logo3.jpg"
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo} alt="" />
                    <p>I am a Web Developer from odisha with 1 years of experience in companies like ...</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className='footer-bottom-left'>©️ 2024 Subhashree Behera.All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of services</p>
                    <p>Privacy policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
