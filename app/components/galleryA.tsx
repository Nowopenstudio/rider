"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import { Reveal } from '../util/reveal';
import useResize from '../util/useResize';
import { GalleryLeft, GalleryRight, Info, InfoAlt, InfoB, InfoBAlt } from './svg';



export default function GalleryA({ data }: any) {
  const ref = useRef<HTMLDivElement>(null)
  const [x, setX] = useState<number>(0)
  const [direction, setDir] = useState<number>(0)
  const [total, setTotal] = useState([]);
  const [curr, setCurr] = useState(0);
    const { winX, winY, mobile } = useResize()
  const [active,setActive] = useState(false)


  const back = () => {
    setDir(0)
    if (curr != 0) {

      setCurr((previousCurr) => previousCurr - 1)
    }
    else { setCurr(data.length - 1) }
    console.log(curr)
  }

  const next = () => {
    setDir(1)
    if (curr < data.length - 1) {

      setCurr((previousCurr) => previousCurr + 1)

    }
    else { setCurr(0) }
    console.log(curr)
  }

  const checkSpace = (e: any, i: number) => {
    if (direction) {
      if (curr == 0 && (i == data.length - 1)) {
        e.currentTarget.style.index = 0
      }
    }

  }

    const toggleActive = () => {
    setActive(!active)
  }



  return (
    <React.Fragment>
      <div className="w-full relative">
        <div className="w-full relative overflow-x-hidden" ref={ref} >
  
          <div className="opacity-0 flex flex-nowrap">
            {data.map((item: any, i: number) => {
              return (
                <div key={`image-${i}`} className='w-[100%] md:w-[66.67%] h-auto flex-shrink-0'>
                  <div className="singleMedia w-full px-4 md:px-0">
  
                    <div className="w-full h-auto relative"> <SwitchContent work={item} title={`${item}`} ratio={item.ratio} audio={false} contain />
                    </div>
                    {mobile?(''):(
                       <div className={`creditHold justify-between flex ${curr == i ? "show" : ""} py-1`}>
                      <div className="caption"><PortableText value={item.caption} /></div>
                      <div className="credits uppercase"><PortableText value={item.credits} /></div>
                    </div>
                    )}
                   
                  </div>
                </div>
              )
            })}
          </div>
  
          <Reveal styleSet="w-full absolute h-full top-0 left-0 hoverOn">
            <div className="w-1/2 h-full z-40 left-0 absolute cursor-w-resize" onClick={back}></div>
            <div className="w-1/2 h-full z-40 left-1/2 absolute cursor-e-resize" onClick={next}></div>
            {data.map((item: any, i: number) => {
              return (
                <div key={`image-${i}`} onTransitionStart={(e) => checkSpace(e, i)} className={`w-[100%] md:w-[66.67%] h-auto absolute galleryImage origin-cener`} style={{ left: '50%', zIndex: i == curr ? data.length + 1 : data.length - 1, transform: `translateX(${(i == 0 && (curr == data.length - 1)) ? `50` : `${(i == data.length - 1 && curr == 0) ? '-150' : `${((100 * i) - (curr * 100)) - 50}`}`}%) scale(${i == curr ? "1.0" : ".75"})` }}>
                  <div className="singleMedia w-full px-4 md:px-0" ref={i == 0 ? ref : undefined}>
                    {/* <div className="w-full h-full z-40 left-0 absolute text-white pointer-events-none" ><h2>{i}</h2></div> */}
                    <div className="w-full h-auto relative"> <SwitchContent work={item} title={`${item}`} ratio={item.ratio} audio={false} contain />
                    </div>
                    {mobile ? (
                      ''
                    ) : (
                      <div className={`creditHold justify-between md:flex items-center  ${curr == i ? "onHover" : ""} py-2`}>
                        <div className="captions mb-4 md:mb-0 uppercase w-1/2 md:w-auto"><PortableText value={item.caption} /></div>
                        <div className="credits uppercase w-1/2 md:w-auto"><PortableText value={item.credits} /></div>
                      </div>
  
                    )}
  
  
                  </div>
                </div>
              )
            })}
           
  
          </Reveal>
        </div>
          {mobile ? (
                    <div className={`mobileCredit py-2 px-4 relative`} >
                     <div className="absolute right-4 top-2 z-10"  onClick={toggleActive}> <div className="h-[16px] w-[16px]">{active?<InfoBAlt className="w-full h-full"/>:<InfoB className="w-full h-full"/>}</div>
                     
                     </div>
                      <div className="flex gap-[10px] absolute right-4 top-7">
                         <div className="h-[16px] w-[16px]" onClick={back}><GalleryLeft className="w-full h-full"/></div>
                          <div className="h-[16px] w-[16px]" onClick={next}><GalleryRight className="w-full h-full"/></div>
                     </div>
                             {data[curr].caption?( <div className="captions mb-2uppercase md:w-auto mb-4"><PortableText value={data[curr].caption} /></div>):('')}
                                                   {data[curr].credits?(  <div className="credits uppercase  w-2/3 md:w-auto pb-4" style={{transition:`all .24s ease-in-out`,height:'auto',opacity:active?1:0,maxHeight:active?200:0}}><PortableText value={data[curr].credits} /></div>):('')}
                    
                        <div className="galleryMarker flex gap-[6px] w-full justify-start">
                          {data.map((dot: any, d: number) => {
                            return (
                              <div key={`${data.title}-${d}`} className={`relative ${d == 0 ? 'z-10' : 'z-1'} galleryDot w-[6px] h-[6px] rounded-full ${d == 0 ? "bg-black" : "bg-darkGray"}`} style={{ transformOrigin: 'center', transform: `scale(${d == 0 ? 1.5 : 1}) translateX(${d == 0 ? (curr * 8) : (d <= curr) ? (-12) : (0)}px)` }}></div>
                            )
                          })}
                      
                      </div>


                    </div>
                  ) : ('')}
      </div>
    </React.Fragment>
  );
}