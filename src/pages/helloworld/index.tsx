import React, { useState, useRef } from 'react'
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

const model = await handTrack.load(defaultParams)
import Handimg from "./hand.png";

let isVideo = false;

const HelloWorld = React.forwardRef(() => {
  const vidoeDom = useRef(null)
  const canvas = useRef(null)

  // const [video, setVideo] = useState<HTMLElement | null>(null);
  // const [isVideo, setIsVideo] = useState(false);

  const StartVideo = async () => {
    // const video = document. getElementById('video');
    // console.log(video);
    const video = vidoeDom.current
    // setVideo(video);
    console.log(video);
    const img = document.getElementById('handimg');
    handTrack.startVideo(video);
    isVideo = true
    runDetection();
  }

  const StopVideo = async () => {
    const video = vidoeDom.current
    handTrack.stopVideo(video);
    isVideo = false
  }

  const runDetection = async () => {
    // const canvas = document.getElementById("canvas") as HTMLElement;
    const video = vidoeDom.current
    const canvasDom = canvas.current;
    const context = canvasDom.getContext("2d");
    const model =  await handTrack.load(defaultParams);
    model.detect(video).then((predictions: any) => {
      console.log("Predictions: ", predictions);
      model.renderPredictions(predictions, canvasDom, context, video);
      console.log(isVideo)
      if (isVideo) {
        requestAnimationFrame(runDetection);
      }
    });
  }

  return (
    <div className="App">
      <div className="Label">This is deme of handTrackingjs Using In Vite React Programmes</div>
      <div className="control-wrap">
        <div className="btn-start" onClick={()=>StartVideo()}>Start Video</div>
        <div className="btn-stop" onClick={()=>StopVideo()}>Stop Video</div>
      </div>
      <div className="VideoContainer">
        <img src={Handimg} id="handimg" className="handimg" alt="" />
        <video ref={vidoeDom} className="video" style={{height: "30vh !important"}} src="" id="video"></video>
        <canvas ref={canvas} id="canvas" className="border canvasbox"></canvas>
      </div>
    </div>
  )
})

export default HelloWorld
