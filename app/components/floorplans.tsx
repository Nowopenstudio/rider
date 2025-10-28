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



export default function Floorplans({ data, filter,cta }: any) {
  const [total, setTotal] = useState([]);
   const [curr, setCurr] = useState([0,0]);
  const [cat, setCat] = useState(0);

  const runCount = () => {
    const count: any = []
    data.map((item: any, i: any) => {
      count.push(item.rooms.length + (i > 0 ? count[i - 1] : 0))
      console.log(count)

    })
    setTotal(count)
    console.log(total, "count")
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

  const changeImage=(i:number,p:number)=>{
    setCurr([i,p])
  }



  return (
    <React.Fragment>

      <div className="col-span-full grid grid-cols-12 gap-x-4">





        <div className="col-span-6 px-9">
          <div className="w-full">
            
              {filter ? (
                <div className="flex gap-4 mb-9 ">
              <div  onClick={() => toggleFilter(0)} className={`${cat == 0 ? 'active' : ''} cta filter cursor-pointer inline-block`}><p>All</p></div>
                {data.map((item: any, i: number) => {
                  return (
                    <div key={`filter-${item.title}`} onClick={() => toggleFilter(i+1)} className={`${cat == i+1 ? 'active' : ''} cta filter cursor-pointer inline-block`}><p>{item.title}</p></div>

                     
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
                                <div  className={`cursor-pointer w-full flex justify-between items-center gap-4  floorList border-b border-darkGray p-[10px] ${(cat !== 0 && cat !== i+1) ? "hide" : ''}`} key={`${item.title}-${i}-${p}`}>
                                 <div className="flex gap-4 items-center">
                                    <div className='col-span-2 planNumber'><p className=" font-bold">{(p + 1 + (i > 0 ? total[i - 1] : 0))<10?'0':''}{p + 1 + (i > 0 ? total[i - 1] : 0)}</p></div>
                                    <div className="col-span-9 planTitle"><p>{point.name}</p></div>
                                 </div>
                                 <div className="flex  items center text-gray uppercase">
                                  <div onClick={()=>changeImage(i,p)} className="px-4 border-r border-gray hover:text-black"><p className='label'>view</p></div>
                                 <div className="px-4 hover:text-black"> <p className='label'>download</p></div>
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
          <div className=" col-span-full mb-39 mt-10">
            <div className="cta inline-block "><p>{cta.label}</p></div>
          </div>
        </div>
        <div className="col-span-6 px-9">
          <div className="w-full mb-9"> {data[curr[0]].rooms[curr[1]].image ? (<SwitchContent work={data[curr[0]].rooms[curr[1]]} title={'Building Spec'}  audio={false} />) : ('')}</div>
        </div>
      </div>

    </React.Fragment>

  );
}