"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';



export default function GalleryE({ data }: any) {

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
      <div className={`galleryD w-full h-full flex items-center justify-center`}>
      <div className="w-1/2 h-full z-40 left-0 absolute cursor-w-resize" onClick={back}></div>
             <div className="w-1/2 h-full z-40 left-1/2 absolute cursor-e-resize" onClick={next}></div>
        {data.map((item:any,i:number)=>{
          return(
            <div className={`w-full h-full absolute top-0 left-0 py-14`} key={`image-${i}`} style={{opacity:i==curr?1:0}}>
             <div className="w-full h-full flex items-Center justify-center"> <div className="w-2/4 aspect-video"><SwitchContent work={item} title={`smart-gear`} ratio={item.ratio} audio={false} contain/></div></div>
            </div>
          )
        })}
    </div>
      <div className="w-full left-0 bottom-4 absolute z-3">
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