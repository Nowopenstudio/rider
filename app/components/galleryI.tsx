"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';



export default function GalleryI({ data }: any) {

  const [curr, setCurr] = useState(0);


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



  return (
    <React.Fragment>
      <div className={`galleryB w-full relative aspect-video`}>
      <div className="w-1/2 h-full z-40 left-0 absolute cursor-w-resize" onClick={back}></div>
             <div className="w-1/2 h-full z-40 left-1/2 absolute cursor-e-resize" onClick={next}></div>
        {data.map((item:any,i:number)=>{
          return(
            <div className={`galleryFade w-full h-full absolute top-0 left-0 flex items-center justify-center`} key={`image-${i}`} style={{opacity:i==curr?1:0}}>
              <SwitchContent work={item} title={`${item.title}`} ratio={item.ratio} audio={false} contain />
            </div>
          )
        })}
    </div>
      <div className=" w-full flex justify-center">
     <div className="galleryMarker flex pt-4 gap-[6px] w-full justify-center">
            {data.map((dot: any, d: number) => {
              return (
                <div key={`${data.title}-${d}`} className={`relative ${d==0?'z-10':'z-1'} galleryDot w-[6px] h-[6px] rounded-full ${d==0?"bg-black":"bg-darkGray"}`} style={{transformOrigin:'center', transform: `scale(${d==0?1.5:1}) translateX(${d==0?(curr*8):(d<=curr)?(-12):(0)}px)`}}></div>
              )
            })}
          </div>
        
        
      </div>
    </React.Fragment>
  );
}