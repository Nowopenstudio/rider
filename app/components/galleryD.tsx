"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';



export default function GalleryD({ data }: any) {

  const [curr, setCurr] = useState(0);


  const back = () => {
    if (curr != 0) {
      setCurr((previousCurr) => previousCurr - 1)
    }
    else { setCurr(data.length - 1) }

  }

  const next = () => {
    if (curr < data.length - 1) {
      setCurr((previousCurr) => previousCurr + 1)

    }
    else { setCurr(0) }
 
  }

  const checkSpace = (e: any, i: number) => {
    if ((i - curr) < -2) {
      e.transition = "none";

    } else if ((curr == data.length - 2) && (curr - i > 2)) {

    }
  }



  return (
    <React.Fragment>
      <div className={`galleryD w-full relative hoverOn`}>
        <div className="w-1/2 h-full z-40 left-0 absolute cursor-w-resize" onClick={back}></div>
        <div className="w-1/2 h-full z-40 left-1/2 absolute cursor-e-resize" onClick={next}></div>
        {data.map((item: any, i: number) => {
          return (
            <div className={`galleryB w-full ${i > 0 ? "absolute top-0 left-0 " : ''}`} key={`image-${i}`} style={{ opacity: i == curr ? 1 : 0 }}>
              <SwitchContent work={item} title={`smart-gear`} ratio={item.ratio} audio={false} />
            </div>
          )
        })}
      </div>
      <div className="w-full flex justify-between items-center py-4">
        <div className="flex gap-4 items-center">
          <div className="galleryMarker flex   gap-[6px]">
            {data.map((dot: any, d: number) => {
              return (
                <div key={`${data.title}-${d}`} className={`relative ${d == 0 ? 'z-10' : 'z-1'} galleryDot w-[6px] h-[6px] rounded-full ${d == 0 ? "bg-black" : "bg-darkGray"}`} style={{ transformOrigin: 'center', transform: `scale(${d == 0 ? 1.5 : 1}) translateX(${d == 0 ? (curr * 8) : (d <= curr) ? (-12) : (0)}px)` }}></div>)
            })}
          </div>
          <div className="captions onHover"><PortableText value={data[curr].captions}/></div>
        </div>
         <div className="credits uppercase text-right onHover"><PortableText value={data[curr].credits}/></div>
      </div>
    </React.Fragment>
  );
}