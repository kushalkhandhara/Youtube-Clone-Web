// import React from 'react'
import "./PlayVideo.css"
import video1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import userprofile from "../../assets/user_profile.jpg"

export default function PlayVideo() {
  return (
    <div className="play-video">

      <video src={video1} controls autoPlay muted></video>
      <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, temporibus.</h3>

        <div className="play-video-info">
          <p>
            15,890 Views &bull; 2 days ago
          </p>
          <div>
            
            <span>
              <img src={like} alt="" />
              125
            </span>
            <span>
              <img src={dislike} alt="" />
              12
            </span>
            <span>
              <img src={share} alt="" />
              Share
            </span>
            <span>
              <img src={save} alt="" />
              Watch later
            </span>

          </div>
        </div>

        <hr />
        <div className="publisher">
          <img src={jack} alt="" />
          <div>
            <p>Kushal Khandhara</p>
            <span>1M Subscribers</span>
          </div>
          <button>Subscribe</button>
        </div>

        <div className="vid-description">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, qui!</p>
          <hr />
          <h4>130 Comments</h4>

          <div className="comment">
            <img src={userprofile} alt="" />
            
            <div>
              <h3>Jack Nick <span>1 day ago </span></h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut labore rerum, explicabo deserunt voluptatem blanditiis magni reiciendis cum ea autem.</p>
            </div>

            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
          <div className="comment">
            <img src={userprofile} alt="" />
            
            <div>
              <h3>Jack Nick <span>1 day ago </span></h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut labore rerum, explicabo deserunt voluptatem blanditiis magni reiciendis cum ea autem.</p>
            </div>

            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
          <div className="comment">
            <img src={userprofile} alt="" />
            
            <div>
              <h3>Jack Nick <span>1 day ago </span></h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut labore rerum, explicabo deserunt voluptatem blanditiis magni reiciendis cum ea autem.</p>
            </div>

            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>

        </div>

      
    </div>
  )
}
