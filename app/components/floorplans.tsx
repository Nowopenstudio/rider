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



export default function Floorplans({ data, filter, cta, line }: any) {
  const [total, setTotal] = useState([]);
  const [curr, setCurr] = useState([0, 0]);
  const [cat, setCat] = useState(10);
  const [active, setActive] = useState(false)

  const runCount = () => {
    const count: any = []
    data.map((item: any, i: any) => {
      count.push(item.rooms.length + (i > 0 ? count[i - 1] : 0))


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
      setCat(10)
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

    const changeHover = (i: number, p: number) => {
    
    setCurr([i, p])
  }

  const zoomOff = () => {

    const curr = document.getElementById('body')

    if (curr) {
      curr.classList.remove('lightBox')
    }
    setActive(false)
  }

  const back = () => {
    if (curr[0] == 0 && curr[1] == 0) {
      if(0==data.length-1){
         setCurr([0,data[0].rooms.length-1])
      }else{
      setCurr([data.length-1, (data[data.length - 1].rooms.length) - 1])}
    }
    else if (curr[1] == 0) {
      if(0==data.length-1){
         setCurr([curr[0], data[curr[0]].rooms.length-1])
      }else{
      setCurr([curr[0] - 1, (data[curr[0] - 1].rooms.length) - 1])}
    }
    else {
      setCurr([curr[0], curr[1] - 1])
    }


  }

  const next = () => {
   
    if ((curr[0] == data.length - 1) && (curr[1] == data[curr[0]].rooms.length-1)) {
      setCurr([0,0])
    }
    else if (curr[1] == data[curr[0]].rooms.length - 1) {
      if(0==data.length-1){
         setCurr([curr[0], 0])
      }else{
      setCurr([curr[0] + 1, 0])}
    }
    else {
      setCurr([curr[0], curr[1] + 1])
    }

  
  }




  return (
    <React.Fragment>

      <div className="col-span-full grid grid-cols-12 gap-x-4">





        <div className="col-span-full xl:col-span-6 px-4 lg:px-9">
          <div className="w-full">

            {filter ? (
              <div className="flex flex-wrap justify-center lg:justify-start gap-y-4 gap-x-9 lg:gap-4  mb-9 px-18 lg:px-0  z-1" style={{ opacity: active ? 0 : 1 }}>
                <div onClick={() => toggleFilter(10)} className={`${cat == 10 ? 'active' : ''} cta filter cursor-pointer inline-block`}><p>All</p></div>
               
                    <div onClick={() => toggleFilter(0)} className={`${cat == 0 ? 'active' : ''} cta filter cursor-pointer inline-block`}><p>Studio</p></div>
                     <div onClick={() => toggleFilter(1)} className={`${cat == 1 ? 'active' : ''} cta filter cursor-pointer inline-block`}><p>1 Bed</p></div>
                     <div onClick={() => toggleFilter(2)} className={`${cat == 2 ? 'active' : ''} cta filter cursor-pointer inline-block`}><p>2 Bed</p></div>
                       <div onClick={() => toggleFilter(3)} className={`${cat == 3 ? 'active' : ''} cta filter cursor-pointer inline-block`}><p>3 Bed</p></div>
                        <div onClick={() => toggleFilter(5)} className={`${cat == 5 ? 'active' : ''} cta filter cursor-pointer inline-block`}><p>5 Bed</p></div>


                

  
              </div>) : ('')}



            <div className="w-full border-t border-darkGray">
              {data.length ? (
                data.map((item: any, i: number) => {
                  return (
                    <div key={`${item.title}`} className="w-full ">


                      {item.rooms ? (
                        item.rooms.map((point: any, p: number) => {
                          return (

                            <div className={`cursor-pointer hoverOn hoverList w-full flex justify-between items-center gap-4  floorList border-b border-darkGray p-[10px] ${(cat !== 10 && cat !== parseInt(point.rooms)) ? " hidden pointer-events-none" : ''}`} onMouseOver={() => changeHover(i, p)}  key={`${item.title}-${i}-${p}`}>
                              <div className="flex gap-4 items-center nameHold" onClick={() => changeImage(i, p)}>
                                <div className='col-span-2 planNumber' ><p className=" font-medium">{line?point.name:`${(p + 1 + (i > 0 ? total[i - 1] : 0)) < 10 ? '0' : ''}${p + 1 + (i > 0 ? total[i - 1] : 0)}`}</p></div>
                                <div className="col-span-9 planTitle uppercase"><p>{line?`Line`:point.name}</p></div>
                              </div>
                              <div className="flex  items center text-gray uppercase">
                                <div  className="px-4 border-r border-gray hover:text-black"><p className='label'>view</p></div>
                                <a target="__black" href={`${point.cta && point.cta.file ? `${point.cta.file}/${point.cta.og}` : (point.cta ? point.cta.url : '/')}`}><div className="px-4 hover:text-black"> <p className='label'>download</p></div></a>
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
          <div className=" col-span-full  mb-9 lg:mb-39 mt-10">
            <a href={cta.url ? cta.url : '/'} target="__blank" className="cta inline-block "><p>{cta.label}</p></a>
          </div>
        </div>
        <div className="md:col-span-6 px-9 hoverOn hidden xl:block">
          <div className="w-full mb-9 fadeOn"  key={`${curr[0]}-${curr[1]}`}> {data[curr[0]].rooms[curr[1]].image ? (<SwitchContent credits caption work={data[curr[0]].rooms[curr[1]]} title={'Building Spec'} audio={false} />) : ('')}</div>
        </div>
      </div>

      <div className={`fixed w-full h-full top-0 left-0 z-100 bg-black ${!active ? "pointer-events-none" : ''}`} style={{ transition: 'opacity .5s ease-in-out', opacity: active ? 1 : 0, }}>

        <div className="flex justify-center w-full items-center py-4 md:py-20 px-4 md:px-20 h-full fadeOn"  key={`${curr[0]}-${curr[1]}`}>

          <SwitchContent work={data[curr[0]].rooms[curr[1]]} title={`amenities`} audio={true} contain/>

        </div>
        {/* <div className="w-1/2 h-full z-40 left-0 absolute cursor-w-resize hoverOn" onClick={back}>
                      <div className="w-[32px] h-auto absolute top-1/2 left-0 translate-y-[-50%] onHover">
                        <GalleryL className="w-full h-auto" /></div>      
              </div>
               <div className="w-1/2 h-full z-40 left-1/2 absolute cursor-e-resize hoverOn" onClick={next}>
                <div className="w-[32px] h-auto absolute top-1/2 right-0 translate-y-[-50%] onHover"><GalleryR className="w-full h-auto" />  </div>
                
               </div> */}
        <a href={data[curr[0]].rooms[curr[1]].cta ? `${data[curr[0]].rooms[curr[1]].cta.file}/${data[curr[0]].rooms[curr[1]].cta.og}` : '/'} className="absolute z-100 label text-white uppercase top-9 md:top-4 left-4 lg:top-9 lg:left-9 font-semibold">
          <p>Download {data[curr[0]].rooms[curr[1]].name} {line?"Line":''}</p>
        </a>

        <div className="w-1/2 h-full top-0 z-99 left-0 absolute cursor-w-resize hoverOn" onClick={back}>
          <div className="w-[32px] h-[23px] absolute bottom-4 md:top-1/2 left-4 md:left-9 translate-y-[-50%] onHover">
            <GalleryL className="w-full h-auto" /></div>
        </div>
        <div className="w-1/2 h-full top-0 z-99 left-1/2 absolute cursor-e-resize hoverOn" onClick={next}>
          <div className="w-[32px] h-[23px] absolute bottom-4 md:top-1/2 right-4 md:right-9 translate-y-[-50%] onHover"><GalleryR className="w-full h-auto" />
          </div>

        </div>
        <div onClick={() => zoomOff()} className={`cursor-pointer flex uppercase items-end flex-col justify-between w-[42px] h-[16px] absolute top-9 right-4 md:right-9 z-[100]   `}>
          <div className="w-full border-b-[2px] border-white h-[1px] singleBar topBar" style={{ transform: `rotate(45deg)`, transformOrigin: "25% 30%" }}></div>

          <div className="w-full border-b-[2px] border-white h-[1px] singleBar botBar" style={{ transform: `rotate(-45deg)`, transformOrigin: "25% 30%" }}></div>
        </div>
      </div>

    </React.Fragment>

  );
}