'use client'
import React from "react";
import { MuxVideoBG } from "./muxPlayer";
import Image from "next/image";
import { PortableText } from "next-sanity";

export function SwitchContent({work, title,ratio,cover, contain,size, audio,color,ratioImg,dim,height, caption, credits,inside}: any) {
  if (!work) return null

  
  if (work.vid){
    return <div className={`w-full  ${audio?'':"noControl"} ${contain?"object-contain h-full":""} ${cover?"bgMux h-full":""}`}> <MuxVideoBG playbackId={work.vid} title={title} ratio={ratio} audio={audio?audio:false} color={color}/></div>
    

    }
   
  if (work.image) return (<React.Fragment><Image alt="image" onContextMenu={(e)=>{e.preventDefault()}} height={0}  width={0} sizes={`${size?size:`100vw`}`}  src={work.image}  className={`${height?`h-full w-auto`:'w-full h-auto'} ${contain?"object-contain h-full":""} ${cover?"object-cover h-full":""}`} style={{aspectRatio:ratioImg}}/>
  {credits || caption?( <div className={`flex justify-between w-full onHover py-4 ${inside?"text-white absolute bottom-0 left-0 px-4 z-10":""}`}><div className="captions">{caption?(<PortableText value={work.caption}/>):('')}</div><div className={`credits uppercase ${caption?'text-right':''}`}>{credits?(<PortableText value={work.credits}/>):('')}</div></div>
  ):('')}</React.Fragment>
 
    
)
    
 
}

