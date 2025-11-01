'use client'

import MuxPlayer from "@mux/mux-player-react";
import { useState } from "react";
export function MuxVideoBG({playbackId, title, ratio,audio,color}: any) {
const [ready,setReady]=useState(false)
  const fadeOn=(e:any)=>{
   setReady(true)
  }

  if (!playbackId) return null

  return <MuxPlayer onProgress={(e)=>{fadeOn(e)}} primaryColor={'#ffffff'}  accentColor={color?color:'transparent'} poster={`https://image.mux.com/${playbackId}/thumbnail.webp?time=0`} playbackId={playbackId} metadata={title ? {video_title: title} : undefined} muted={audio?false:true} playsInline autoPlay={audio?false:true} loop={audio?false:true} style={{opacity:ready?1:0,aspectRatio:`${ratio.split(':')[0]}/${ratio.split(':')[1]}`}}/>
}

export function MuxVideo({playbackId, title, poster, ratio,audio,color}:any) {
  const [ready,setReady]=useState(false)
  const fadeOn=(e:any)=>{
   setReady(true)
  }
  if (!playbackId) return null
  
  return <MuxPlayer onCanPlay={(e)=>{fadeOn(e)}} primaryColor={'#ffffff'}  poster={poster?poster:`https://image.mux.com/${playbackId}/thumbnail.webp?time=0`} playbackId={playbackId} metadata={title ? {video_title: title} : undefined}  style={{ opacity:ready?1:0,aspectRatio:`${ratio.split(':')[0]}/${ratio.split(':')[1]}`}} />
}