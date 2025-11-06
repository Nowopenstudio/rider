"use client"

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { Reveal } from '../util/reveal';
import { TextOn } from '../util/misc';
import useResize from '../util/useResize';
import { SwitchContent } from '../util/contentSwitch';
import { GalleryL, GalleryR } from './svg';



export default function Floorplans({ data, filter, cta }: any) {
  const [total, setTotal] = useState([]);
  const [curr, setCurr] = useState([0, 0]);
  const [cat, setCat] = useState(0);
  const [active, setActive] = useState(false)

  const runCount = () => {
    const count: any = []
    data.map((item: any, i: any) => {
      count.push(item.rooms.length + (i > 0 ? count[i - 1] : 0))
      console.log(data)

    })
    setTotal(count)

  }
  useEffect(() => {
    runCount()
  }, [])

  const toggleFilter = (section: number) => {
    if (section !== cat) {
      setCat(section)
    }
    else {
      setCat(0)
    }
  }

  const changeImage = (i: number, p: number) => {
    const curr = document.getElementById('body')
    if (curr) {
      curr.classList.add('lightBox')
    }
    setCurr([i, p])
    setActive(true)
  }

    const zoomOff=()=>{
  
  const curr = document.getElementById('body')
  
  if(curr){
    curr.classList.remove('lightBox')
  }
  setActive(false)
}




  return (
    <React.Fragment>

      <div className="col-span-full grid grid-cols-12 gap-x-4">





        <div className="col-span-full md:col-span-6 px-4 md:px-9">
          <div className="w-full">

            {filter ? (
              <div className="flex flex-wrap justify-center md:justify-start gap-y-4 gap-x-9 md:gap-4  mb-9 px-18 md:px-0  z-1" style={{opacity:active?0:1}}>
                <div onClick={() => toggleFilter(0)} className={`${cat == 0 ? 'active' : ''} cta filter cursor-pointer inline-block`}><p>All</p></div>
                {data.map((item: any, i: number) => {
                  return (
                    <div key={`filter-${item.title}`} onClick={() => toggleFilter(i + 1)} className={`${cat == i + 1 ? 'active' : ''} cta filter cursor-pointer inline-block`}><p>{item.title}</p></div>


                  )

                }
                )}
              </div>) : ('')}



            <div className="w-full border-t border-darkGray">
              {data.length ? (
                data.map((item: any, i: number) => {
                  return (
                    <div key={`${item.title}`} className="w-full ">


                      {item.rooms ? (
                        item.rooms.map((point: any, p: number) => {
                          return (

                            <div className={`cursor-pointer hoverOn hoverList w-full flex justify-between items-center gap-4  floorList border-b border-darkGray p-[10px] ${(cat !== 0 && cat !== i + 1) ? "hide pointer-events-none" : ''}`} key={`${item.title}-${i}-${p}`}>
                              <div className="flex gap-4 items-center nameHold">
                                <div className='col-span-2 planNumber'><p className=" font-medium">{(p + 1 + (i > 0 ? total[i - 1] : 0)) < 10 ? '0' : ''}{p + 1 + (i > 0 ? total[i - 1] : 0)}</p></div>
                                <div className="col-span-9 planTitle"><p>{point.name}</p></div>
                              </div>
                              <div className="flex  items center text-gray uppercase">
                                <div onClick={() => changeImage(i, p)} className="px-4 border-r border-gray hover:text-black"><p className='label'>view</p></div>
                                <a href={`${data.cta && data.cta.file?`${data.cta.file}/${data.cta.og}`:(point.cta?point.cta.url : '/')}`}><div className="px-4 hover:text-black"> <p className='label'>download</p></div></a>
                              </div>
                            </div>
                          )
                        })
                      ) : ('')}
                    </div>

                      

                  )
                })
              ) : ('')}
            </div>

          </div>
          <div className=" col-span-full  mb-9 md:mb-39 mt-10">
            <a href={cta.url ? cta.url : '/'} className="cta inline-block "><p>{cta.label}</p></a>
          </div>
        </div>
        <div className="col-span-6 px-9 hoverOn hidden md:block">
          <div className="w-full mb-9"> {data[curr[0]].rooms[curr[1]].image ? (<SwitchContent credits caption work={data[curr[0]].rooms[curr[1]]} title={'Building Spec'} audio={false} />) : ('')}</div>
        </div>
      </div>

      <div className={`fixed w-full h-full top-0 left-0 z-100 bg-black ${!active ? "pointer-events-none" : ''}`} style={{ transition: 'opacity .5s ease-in-out', opacity: active ? 1 : 0, }}>
        
        <div className="flex justify-center w-full items-center py-20 px-20 h-full">
         
            <SwitchContent work={data[curr[0]].rooms[curr[1]]} title={`amenities`} audio={true} contain />
       
        </div>
        {/* <div className="w-1/2 h-full z-40 left-0 absolute cursor-w-resize hoverOn" onClick={back}>
                      <div className="w-[32px] h-auto absolute top-1/2 left-0 translate-y-[-50%] onHover">
                        <GalleryL className="w-full h-auto" /></div>      
              </div>
               <div className="w-1/2 h-full z-40 left-1/2 absolute cursor-e-resize hoverOn" onClick={next}>
                <div className="w-[32px] h-auto absolute top-1/2 right-0 translate-y-[-50%] onHover"><GalleryR className="w-full h-auto" />  </div>
                
               </div> */}
            <a href={data[curr[0]].rooms[curr[1]].cta?`${data[curr[0]].rooms[curr[1]].cta.file}/${data[curr[0]].rooms[curr[1]].cta.og}`:'/'} className="absolute z-100 label text-white uppercase top-4 left-4 md:top-9 md:left-9 font-semibold">
              <p>Download</p>
            </a>
           <div onClick={()=>zoomOff()} className={`cursor-pointer flex uppercase items-end flex-col justify-between w-[42px] h-[16px] absolute top-9 right-9 z-[100]   `}>
                <div className="w-full border-b-[2px] border-white h-[1px] singleBar topBar" style={{transform:`rotate(45deg)`,transformOrigin:"25% 30%"}}></div>
                
                <div className="w-full border-b-[2px] border-white h-[1px] singleBar botBar" style={{transform:`rotate(-45deg)`,transformOrigin:"25% 30%"}}></div>
              </div>
      </div>

    </React.Fragment>

  );
}