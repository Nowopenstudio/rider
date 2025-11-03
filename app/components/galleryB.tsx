"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';



export default function GalleryB({ data }: any) {

  const [curr, setCurr] = useState(0);


  const back = () => {
    if (curr != 0) {
      setCurr((previousCurr) => previousCurr - 1)
    }
    else { setCurr(data.gallery.length - 1) }
    console.log(curr)
  }

  const next = () => {
    if (curr < data.gallery.length - 1) {
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
      <div className={`galleryB w-full aspect-video relative`}>
        {data.gallery.length > 1?(
          <React.Fragment>
            <div className="w-1/2 h-full z-40 left-0 absolute cursor-w-resize" onClick={back}></div>
             <div className="w-1/2 h-full z-40 left-1/2 absolute cursor-e-resize" onClick={next}></div>
          </React.Fragment>
        ):('')}
        {data.gallery.map((item:any,i:number)=>{
          return(
            <div className={`galleryB w-full ${i>0?"absolute top-0 left-0 ":''}`} key={`image-${i}`} style={{opacity:i==curr?1:0}}>
              <SwitchContent work={item} title={`${item.title}`} ratio={item.ratio} audio={false} cover />
            </div>
          )
        })}
    </div>
      <div className="flex justify-between w-full">
        <div className="py-9 w-full md:w-3/4">
          <h3 className="uppercase mb-3 md:mb-2">{data.title}</h3>
          <div className="menuText"><PortableText value={data.copy} /></div>
        </div>
        {data.gallery.length > 1?(
          <div className="galleryMarker flex h-[10px] pt-9 gap-2 ">
          {data.gallery.map((dot: any, d: number) => {
            return (
              <div key={`${data.title}-${d}`} className={`w-[10px] h-[10px] border border-white rounded-full ${d==curr?"bg-white":""}`}></div>
            )
          })}
        </div>
        ):('')}
        
      </div>
    </React.Fragment>
  );
}