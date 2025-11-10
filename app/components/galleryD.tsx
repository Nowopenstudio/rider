"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import useResize from '../util/useResize';
import { GalleryLeft, GalleryRight, InfoB, InfoBAlt } from './svg';



export default function GalleryD({ data }: any) {
  const {mobile} = useResize();
  const [curr, setCurr] = useState(0);
  const [active,setActive]=useState(false)


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

  const toggleActive =()=>{
    setActive(!active)
  }



  return (
    <React.Fragment>
      <div className={`galleryD w-full relative hoverOn`}>
        <div className="w-1/2 h-full z-40 left-0 absolute cursor-w-resize" onClick={back}></div>
        <div className="w-1/2 h-full z-40 left-1/2 absolute cursor-e-resize" onClick={next}></div>
        {data.map((item: any, i: number) => {
          return (
            <div className={`galleryB w-full ${i > 0 ? "absolute top-0 left-0 " : ''}`} key={`image-${i}`} style={{ opacity: i == curr ? 1 : 0 }}>
              <SwitchContent cullInfo work={item} title={`smart-gear`} ratio={item.ratio} audio={false} />
            </div>
          )
        })}
      </div>
        {mobile ? (
                                  <div className={`mobileCredit pt-2   relative overflow-y-visible`} >
                                   
                                   <div className="absolute right-0 top-2 z-10"  onClick={toggleActive}> <div className="h-[16px] w-[16px]">{active?(<InfoBAlt className="w-full h-full"/>):<InfoB className="w-full h-full"/> }</div>
                                     
                                   </div>
                                   <div className="flex gap-[10px] absolute right-0 top-7 z-10">
                                                            <div className="h-[16px] w-[16px]" onClick={back}><GalleryLeft className="w-full h-full"/></div>
                                                             <div className="h-[16px] w-[16px]" onClick={next}><GalleryRight className="w-full h-full"/></div>
                                                        </div>
                                   {data[curr]?(
                                   <React.Fragment>
                                      {data[curr].captions?( <div className="captions mb-2uppercase md:w-auto mb-4"><PortableText value={data[curr].captions} /></div>):('')}
                                     {data[curr].credits?(  <div className="credits uppercase md:w-auto mb-2" style={{transition:`all .24s ease-in-out`,height:'auto',display:active?'block':'none',opacity:active?1:0,maxHeight:active?200:0}}><PortableText value={data[curr].credits} /></div>):('')}
                                   </React.Fragment>
                                   ):('')}
                                   
                                    
                                    
                                 
              
              
                                  </div>
                                ) : ('')}
     
      <div className="w-full flex justify-between items-center py-0 md:py-4">
        {data.length > 1 ?(
           <div className="flex gap-4 items-center">
          <div className="galleryMarker flex   gap-[6px]">
            {data.map((dot: any, d: number) => {
              return (
                <div key={`${data.title}-${d}`} className={`relative ${d == 0 ? 'z-10' : 'z-1'} galleryDot w-[6px] h-[6px] rounded-full ${d == 0 ? "bg-black" : "bg-darkGray"}`} style={{ transformOrigin: 'center', transform: `scale(${d == 0 ? 1.5 : 1}) translateX(${d == 0 ? (curr * 8) : (d <= curr) ? (-12) : (0)}px)` }}></div>)
            })}
          </div>
          {mobile?(''):(<div className="captions onHover"><PortableText value={data[curr].captions}/></div>)}
          
        </div>
        ):('')}
       
         {mobile?(''):(<div className="credits uppercase text-right onHover"><PortableText value={data[curr].credits}/></div>)}
      </div>
    </React.Fragment>
  );
}