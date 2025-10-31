"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import { GalleryL, GalleryR, Info, InfoAlt } from './svg';



export default function GalleryE({ data,name }: any) {

  const [curr, setCurr] = useState(0);
    const [active, setActive] = useState(false);


  const back = () => {
    if (curr != 0) {
      setCurr((previousCurr) => previousCurr - 1)
    }
    else { setCurr(data.length - 1) }
    console.log(curr)
  }

  const next = () => {
    if (curr < data.length - 1) {
      setCurr((previousCurr) => previousCurr + 1)

    }
    else { setCurr(0) }
    console.log(curr)
  }

  const checkSpace = (e: any, i: number) => {
    if ((i - curr) < -2) {
      e.transition = "none";

    } else if ((curr == data.length - 2) && (curr - i > 2)) {

    }
  }

   const toggleActive = () => {
    setActive(!active)
  }


  return (
    <React.Fragment>
      <div className={`galleryD w-full h-full flex items-center justify-center relative`}>
      <div className="w-1/2 h-full z-40 left-0 absolute cursor-w-resize hoverOn" onClick={back}>
              <div className="w-[32px] h-auto absolute top-1/2 left-0 translate-y-[-50%] onHover">
                <GalleryL className="w-full h-auto" /></div>      
      </div>
       <div className="w-1/2 h-full z-40 left-1/2 absolute cursor-e-resize hoverOn" onClick={next}>
        <div className="w-[32px] h-auto absolute top-1/2 right-0 translate-y-[-50%] onHover"><GalleryR className="w-full h-auto" />  </div>
        
       </div>
      <div className="absolute w-1/5 top-0 left-0 flex flex-wrap gap-y-18 text-white z-50">
        <div onClick={toggleActive} className="info flex gap-4 w-full">
          <div className="h-[16px] w-[16px]">{active?(<InfoAlt className="w-full h-full" />):(<Info className="w-full h-full  mb-18" />)}</div>
          <div className="imgTitle"><PortableText value={data[curr].title}/></div>
        </div>
        <div className="imgInfo flex-shrink-0 w-full pointer-events-none galleryFade" style={{opacity:active?1:0}}><PortableText value={data[curr].copy}/></div>
      </div>
       <div className="absolute top-0 right-0 z-50 capitalize text-white">
        <p className="capitalize">{name}</p>
       </div>
      <div></div>
       <div className="absolute bottom-0 left-0 z-50 capitalize text-white">
        <p className="capitalize">{curr+1}/{data.length}</p>
       </div>
      <div></div>
        {data.map((item:any,i:number)=>{
          return(
            <div className={`galleryFade w-full h-full absolute top-0 left-0 py-18`} key={`image-${i}`} style={{opacity:i==curr?1:0}}>
             <div className="w-full h-full flex items-Center justify-center"> <div className="w-2/4 aspect-video"><SwitchContent work={item} title={`smart-gear`} ratio={item.ratio} audio={false} contain/></div></div>
            </div>
          )
        })}
    </div>
      <div className="w-full left-0 bottom-9 absolute z-3">
        <div className="galleryMarker flex justify-center gap-2">
          {data.map((dot: any, d: number) => {
            return (
              <div key={`${data.title}-${d}`} className={`w-[10px] h-[10px] border border-white rounded-full ${d==curr?"bg-white":""}`}></div>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  );
}