import React, { useState } from 'react'
import './index.scss'

// init handtrack
import * as handTrack from 'handtrackjs';

const defaultParams = {
  flipHorizontal: false,
  outputStride: 16,
  imageScaleFactor: 1,
  maxNumBoxes: 20,
  iouThreshold: 0.2,
  scoreThreshold: 0.6,
  modelType: "ssd320fpnlite",
  modelSize: "large",
  bboxLineWidth: "2",
  fontSize: 17,
};

// const model = await handTrack.load(defaultParams)
import Handimg from "./hand.png";

const HelloWorld = () => {
  const [video, setVideo] = useState();

  const StartVideo = async () => {
    const video = document. getElementById('video');
    const img = document.getElementById('handimg');
    const model =  await handTrack.load(defaultParams);
    const predictions = await model.detect(img); 
    console.log(predictions);
    handTrack.startVideo(video);
  }

  const StopVideo = async () => {
    handTrack.stopVideo(video);
  }

  return (
    <div className="App">
      <div className="Label">HelloWorld</div>
      <div className="control-wrap">
        <div className="btn-start" onClick={()=>StartVideo()}>Start Video</div>
        <div className="btn-stop" onClick={()=>StopVideo()}>Stop Video</div>
      </div>
      <div className="VideoContainer">
        <img src={Handimg} id="handimg" className="handimg" alt="" />
        <video className="video" style={{height: "30vh !important"}} src="" id="video"></video>
      </div>
    </div>
  )
}

export default HelloWorld
