// import React from 'react'
import "./Sidebar.css"
import Home from "../../assets/home.png"
import Game from "../../assets/game_icon.png"
import automobiles from "../../assets/automobiles.png"
import sports from "../../assets/sports.png"
import entertainment from "../../assets/entertainment.png"
import tech from "../../assets/tech.png"
import music from "../../assets/music.png"
import blogs from "../../assets/blogs.png"
import news from "../../assets/news.png"
import jack from "../../assets/jack.png"
import simon from "../../assets/simon.png"
import tom from "../../assets/tom.png"
import megan from "../../assets/megan.png"
import cameron from "../../assets/cameron.png"

export default function Sidebar(props) {
  return (
    <div className={`sidebar ${props.sidebar ? "" :"small-sidebar"}`}>

      <div className="shortcut-links">

        <div className={`side-links ${props.category==0 ? "active" : ""} `} onClick = {()=>props.setCategory(0)}>
          <img src={Home} alt="" /><p>Home</p>
        </div>
        
        <div className={`side-links ${props.category==20 ? "active" : ""} `} onClick = {()=>props.setCategory(20)}>
          <img src={Game} alt="" /><p>Gaming</p>
        </div>
        
        <div className={`side-links ${props.category==2 ? "active" : ""} `} onClick = {()=>props.setCategory(2)}>
          <img src={automobiles} alt="" /><p>Automobiles</p>
        </div>
        
        <div className={`side-links ${props.category==17 ? "active" : ""} `} onClick = {()=>props.setCategory(17)}>
          <img src={sports} alt="" /><p>Sports</p>
        </div>
        
        <div className={`side-links ${props.category==24 ? "active" : ""} `} onClick = {()=>props.setCategory(24)}>
          <img src={entertainment} alt="" /><p>Entertainment</p>
        </div>
        
        <div className={`side-links ${props.category==28 ? "active" : ""} `} onClick = {()=>props.setCategory(28)}>
          <img src={tech} alt="" /><p>Technology</p>
        </div>
        
        <div className={`side-links ${props.category==10 ? "active" : ""} `} onClick = {()=>props.setCategory(10)}>
          <img src={music} alt="" /><p>Music</p>
        </div>
        
        <div className={`side-links ${props.category==22 ? "active" : ""} `}onClick = {()=>props.setCategory(22)}>
          <img src={blogs} alt="" /><p>Vlogs</p>
        </div>
        <div className={`side-links ${props.category==25 ? "active" : ""} `} onClick = {()=>props.setCategory(25)}>
          <img src={news} alt="" /><p>News</p>
        </div>
        <hr />
      </div>

      <div className='subscribed-list'>
        <h3>Subscribed</h3>
        <div className="side-links">
          <img src={jack} alt="" />
          <p>CarryMinati</p>
        </div>
        <div className="side-links">
          <img src={simon} alt="" />
          <p>Mr.Beast</p>
        </div>
        <div className="side-links">
          <img src={tom} alt="" />
          <p>Sourav Joshi Vlogs</p>
        </div>
        <div className="side-links">
          <img src={megan} alt="" />
          <p>Nas daily</p>
        </div>
        <div className="side-links">
          <img src={cameron} alt="" />
          <p>Flying Beast</p>
        </div>
      </div>

    </div>
  )
}
