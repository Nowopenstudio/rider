'use client'
import React, { useRef, useState } from "react";
import { MuxVideoBG } from "./muxPlayer";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { Info, InfoAlt, InfoB, InfoBAlt, Zoom } from "../components/svg";
import useResize from "./useResize";

export function SwitchContent({noBleed,cullInfo, zoom,work, title,ratio,cover, contain,size, audio,color,ratioImg,dim,height, captions, credits,inside}: any) {
const [active,setActive] = useState(false);
const [info,setInfo] = useState(false);
const {mobile} = useResize();
  const ref = useRef<HTMLDivElement>(null)

const zoomOn=()=>{

  setActive(true)
  const curr = document.getElementById('body')
  if(curr){
    curr.classList.add('lightBox')
  }
    ref.current!.focus();

}

     const toggleActive = () => {
    setActive(!active)
  }

       const toggleInfo = () => {
    setInfo(!info)
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
    return <div className={`w-full  ${audio?'':"noControl"} ${contain?"object-contain h-full":""} ${cover?"bgMux h-full overflow-x-hidden pointer-events-none":""}`}> <MuxVideoBG playbackId={(mobile && work.mobileVid)?work.mobileVid:work.vid} title={title} ratio={(mobile&&work.mobileVid)?work.mobileRatio:ratio} audio={audio?audio:false} color={color}/></div>
    

    }
   
  if (work.image) return (
  <div className={`w-full relative h-full overflow-hidden ${credits && mobile?"pb-4":""}`} >
  <div className='w-full h-full relative overflow-hidden'>  <Image alt="image" onContextMenu={(e)=>{e.preventDefault()}} height={0}  width={0} sizes={`${size?size:`100vw`}`}  src={work.image}  className={`${height?`h-full w-auto`:'w-full h-auto'} ${contain?"object-contain h-full":""} ${cover?"object-cover h-full":""} ${zoom?'cursor-pointer':''} pointer-events-none`} style={{aspectRatio:work.ratioImg}}/>
    {mobile && work.credits && !cullInfo ?(
     <div className={`absolute ${noBleed?'right-0':' right-4'} bottom z-30 pt-2 pointer-events-auto`}  onClick={toggleInfo}> <div className="h-[16px] w-[16px]">{info?(<InfoBAlt className="w-full h-full"/>):<InfoB className="w-full h-full"/> }</div></div>
  ):('')}

   {mobile && inside?(
  
                           <div className="credits w-full absolute bottom-0 p-4 flex gap-4 left-0 text-white items-end overflow-hidden">
                            <div className="w-[16px] h-[16px] pointer-events-auto" onClick={toggleActive}>{active?(<Info className="w-full h-full" />):(<InfoAlt className="w-full h-full" />)}</div>
                           <div className="w-full" style={{transition:'.5s all cubic-bezier(0.075, 0.82, 0.165, 1)',opacity:active?1:0, transform:`translateX(${active?'0':'20'}px)`}}> <PortableText value={work.credits}/></div></div>
                       
                       ):('')}
  {credits || captions?(
    <div className={` md:flex justify-between w-full md:onHover  ${inside?"text-white absolute hidden md:block  left-4 px-4 bottom-4 z-10":""}  ${noBleed?'px-0':'px-2'} md:px-0`}>
     


      
      {captions?(<div className={`pt-3 captions  md:mb-0 md:px-0 relative flex-shrink-0 w-1/3`}><div className="mb-4"><PortableText value={work.captions}/></div></div>):('')}
  
   {mobile && !cullInfo?(
          <React.Fragment>
            <div className={`credits uppercase w-2/3 md:w-auto  ${!work.captions?'mt-3':''}`} style={{transition:`all .24s ease-in-out`,height:'100px',opacity:info?1:0,maxHeight:info?200:0}}><PortableText value={work.credits} /></div>
          </React.Fragment>
        ):(  <div className={`credits uppercase w-2/3 ${noBleed?'px-0':'px-4'} md:px-0 pt-3 ${captions?'md:text-right':''}`}>{credits?(<PortableText value={work.credits}/>):('')}</div>)}
 </div>
  ):('')}
  
  </div>
  


 

  {zoom?(
    <React.Fragment>
      {mobile?(''):(
          <div onClick={zoomOn} className="absolute z-10 top-2.5 left-2.5 w-[16px] h-[16px] p-[2px] onHover pointer-events-auto cursor-pointer" style={{backgroundColor:`rgba(255,255,255,.8)`}}>
        <Zoom className="w-full h-full" fill={`000000`}/>
      </div>
      )}
    
      <div   className={`fixed w-[100vw] h-[100vh] top-0 left-0 bg-black  loader z-[110] ${active?'pointer-events-none':'pointer-events-none'}   overflow-x-hidden`} style={{opacity:active?1:0}}>
       <div  ref={ref} data-lenis-prevent 
          tabIndex={-1} className="w-full h-[100%] overflow-y-scroll overflow-x-hidden">
           <Image alt="image"  height={0}  width={0} sizes={`${size?size:`100vw`}`}  src={work.image}  className={`${height?`h-full w-auto`:'w-full h-auto'}`} style={{aspectRatio:work.ratioImg}}/>
        </div>
       <div className={`credits uppercase absolute top-9 left-9 z-2`}>{credits?(<PortableText value={work.credits}/>):('')}</div>
        
        
            <div onClick={zoomOff} className={`cursor-pointer flex uppercase items-end flex-col justify-between w-[42px] h-[16px] absolute top-9 right-9 z-[120] pointer-events-auto`}>
                <div className="w-full border-b-[2px] border-black  h-[1px] singleBar topBar" style={{transform:`rotate(45deg)`,transformOrigin:"25% 30%"}}></div>
                
                <div className="w-full border-b-[2px] border-black  h-[1px] singleBar botBar" style={{transform:`rotate(-45deg)`,transformOrigin:"25% 30%"}}></div>
              </div>
            </div>
    
    </React.Fragment>
  ):('')}
  </div>
 
    
)
    
 
}

