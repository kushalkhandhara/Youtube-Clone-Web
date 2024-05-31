// import React from 'react'
import "./Navbar.css"
import menuIcon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import uploadIcon from "../../assets/upload.png";
import moreIcon from "../../assets/more.png";
import notification from "../../assets/notification.png";
import profile from "../../assets/jack.png";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const menuClick = ()=>{
    // props.setSidebar(prev=>prev===false ? true : false);
    props.setSidebar(!props.sidebar)

  }
  return (
    <nav className="flex-div">

      <div className="nav-left flex-div">
        <img className='menu-icon' onClick={menuClick} src={menuIcon} alt="" />
        <Link to="/"><img className='logo' src={logo} alt="" /></Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
            <input type="text" placeholder="Search" name="" id="" />
            <img src={searchIcon} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={uploadIcon} alt="" />
        <img src={moreIcon} alt="" />
        <img src={notification} alt="" />
        <img className='user-icon' src={profile} alt="" />
      </div>

    </nav>
  )
}
