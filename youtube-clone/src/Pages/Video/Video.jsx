// import React from 'react'
import {useParams} from "react-router-dom"
import "./Video.css"
import PlayVideo from "../../components/PlayVideo/PlayVideo"
import Recommended from "../../components/Recommended/Recommended"
// AIzaSyBN1VsOi5vX3FiItVxXgUXxIrTdbU8zmSI
export default function Video() {

  const {videoId,categoryId} = useParams();



  return (
    <>
    <div className="play-container">
      <PlayVideo videoId={videoId} categoryId={categoryId}/>
      <Recommended/>
    </div>
    </>
  )
}
