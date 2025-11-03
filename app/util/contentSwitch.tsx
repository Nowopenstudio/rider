'use client'
import React, { useRef, useState } from "react";
import { MuxVideoBG } from "./muxPlayer";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { Zoom } from "../components/svg";

export function SwitchContent({zoom,work, title,ratio,cover, contain,size, audio,color,ratioImg,dim,height, captions, credits,inside}: any) {
const [active,setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null)

const zoomOn=()=>{
  setActive(true)
  const curr = document.getElementById('body')
  if(curr){
    curr.classList.add('lightBox')
  }
    ref.current!.focus();
}

const zoomOff=()=>{
 
  const curr = document.getElementById('body')
  if(curr){
    curr.classList.remove('lightBox')
  }
   setActive(false)
}
  if (!work) return null

  
  if (work.vid){
    return <div className={`w-full  ${audio?'':"noControl"} ${contain?"object-contain h-full":""} ${cover?"bgMux h-full":""}`}> <MuxVideoBG playbackId={work.vid} title={title} ratio={ratio} audio={audio?audio:false} color={color}/></div>
    

    }
   
  if (work.image) return (
  <div className="w-full relative h-full">
    <Image alt="image" onClick={zoom?zoomOn:undefined} onContextMenu={(e)=>{e.preventDefault()}} height={0}  width={0} sizes={`${size?size:`100vw`}`}  src={work.image}  className={`${height?`h-full w-auto`:'w-full h-auto'} ${contain?"object-contain h-full":""} ${cover?"object-cover h-full":""} ${zoom?'cursor-pointer':''}`} style={{aspectRatio:work.ratioImg}}/>
  {credits || captions?( <div className={`flex justify-between w-full  onHover py-4 ${inside?"text-white absolute bottom-0 left-0 px-4 z-10":""}`}><div className="captions">{captions?(<PortableText value={work.captions}/>):('')}</div><div className={`credits uppercase ${captions?'text-right':''}`}>{credits?(<PortableText value={work.credits}/>):('')}</div></div>
  ):('')}
  {zoom?(
    <React.Fragment>
      <div onClick={zoomOn} className="absolute z-10 top-2.5 left-2.5 w-[16px] h-[16px] p-[2px] onHover" style={{backgroundColor:`rgba(255,255,255,.8)`}}>
        <Zoom className="w-full h-full" fill={`000000`}/>
      </div>
      <div  className={`fixed w-[100dvw] h-[100dvh] top-0 left-0 bg-black  loader z-[100] ${active?'':'pointer-events-none'} `} style={{opacity:active?1:0}}>
       <div ref={ref}
          tabIndex={-1} className="w-[100dvw] h-[100dvh] overflow-y-auto"> <Image alt="image" onContextMenu={(e)=>{e.preventDefault()}} height={0}  width={0} sizes={`${size?size:`100vw`}`}  src={work.image}  className={`${height?`h-full w-auto`:'w-full h-auto'}`} style={{aspectRatio:work.ratioImg}}/></div>
          <div className={`credits uppercase absolute top-9 left-9 z-2`}>{credits?(<PortableText value={work.credits}/>):('')}</div>
          <div>
            <div onClick={zoomOff} className={`cursor-pointer flex uppercase items-end flex-col justify-between mobileBar w-[42px] h-[16px] absolute top-9 right-9 z-[100]  pointer-events-auto `}>
                <div className="w-full border-b-[2px] border-black  h-[1px] singleBar topBar" style={{transform:`rotate(45deg)`,transformOrigin:"25% 30%"}}></div>
                
                <div className="w-full border-b-[2px] border-black  h-[1px] singleBar botBar" style={{transform:`rotate(-45deg)`,transformOrigin:"25% 30%"}}></div>
              </div>
            </div>
      </div>
    </React.Fragment>
  ):('')}
  </div>
 
    
)
    
 
}

