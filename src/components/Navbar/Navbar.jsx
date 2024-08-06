import React, { useRef, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo3.jpg"
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {

  const [menu, setMenu] = useState("Home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
      <img src={menu_close} alt="" onClick={closeMenu} className='nav-mob-close' />
        <li> <AnchorLink className="anchor-link" href="#Home"><p onClick={() => setMenu("Home")}>Home</p></AnchorLink>{menu === "Home" ? <img src={underline} alt='' /> : <></>}</li>

        <li> <AnchorLink className="anchor-link" offset={50} href="#AboutMe"><p onClick={() => setMenu("About Me")}>About Me</p></AnchorLink>{menu === "About Me" ? <img src={underline} alt='' /> : <></>}</li>

        <li> <AnchorLink className="anchor-link" offset={50} href="#Services"><p onClick={() => setMenu("Services")}>Services</p></AnchorLink>{menu === "Services" ? <img src={underline} alt='' /> : <></>}</li>

        <li> <AnchorLink className="anchor-link" offset={50} href="#Portfolio"><p onClick={() => setMenu("Portfolio")}>Portfolio</p></AnchorLink>{menu === "Portfolio" ? <img src={underline} alt='' /> : <></>}</li>

        <li> <AnchorLink className="anchor-link" offset={50} href="#Contact"><p onClick={() => setMenu("Contact")}>Contact</p></AnchorLink>{menu === "Contact" ? <img src={underline} alt='' /> : <></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#Contact">
        Connect With Me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
