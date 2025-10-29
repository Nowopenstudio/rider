"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';



export default function GalleryH({ data }: any) {

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
      <div className={`galleryB w-full relative`}>
      <div className="w-1/2 h-full z-40 left-0 absolute cursor-w-resize" onClick={back}></div>
             <div className="w-1/2 h-full z-40 left-1/2 absolute cursor-e-resize" onClick={next}></div>
        {data.map((item:any,i:number)=>{
          return(
            <div className={`gallery w-full ${i>0?"absolute top-0 left-0 ":''}`} key={`image-${i}`} style={{opacity:i==curr?1:0}}>
              <SwitchContent work={item} title={`${item.title}`} ratio={item.ratio} audio={false} cover />
            </div>
          )
        })}
    </div>
      <div className=" w-full flex justify-between">
     <div className="galleryMarker flex pt-4 gap-2 w-full justify-center">
            {data.map((dot: any, d: number) => {
              return (
                <div key={`${data.title}-${d}`} className={`w-[10px] h-[10px] border border-black rounded-full ${d==curr?"bg-black":""}`}></div>
              )
            })}
          </div>
        
        
      </div>
    </React.Fragment>
  );
}