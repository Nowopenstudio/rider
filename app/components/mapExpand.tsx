'use client'

import React, {useEffect, useRef, useState } from 'react';
import {motion, useInView, useAnimation } from "framer-motion";
import useResize from '../util/useResize';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import { Expand, Plus } from './svg';




export function MapExpand({data, total, i}:any){

     const [active, setActive] = useState(false)
     const menuToggle = () => {
    setActive(!active)
  }


  const changePoint=(e:any)=>{
    const curr = e.currentTarget.getAttribute('data-count')
    const prev = document.getElementsByClassName('chosen')
    if(prev.length){
      prev[0].classList.remove('chosen')
    }

      const prev2 = document.getElementsByClassName('chosenKey')
    if(prev2.length){
      prev2[0].classList.remove('chosenKey')
    }
  
    const el = document.querySelector(`div[data-count='${curr}']`)
    if(el){
      el.classList.add('chosen')
    }

    const id = document.getElementById(`key-${curr}`)
    if(id){
      id.classList.add('chosenKey')
    }

    
  
  }
    
   
   return(
      
           <React.Fragment>
                 

                 <div className={`w-full mobileMapList `}>
                                            
                                              <div className={`w-full cursor-pointer py-2 border-b ${active?'border-black':'border-gray'} relative`}  onClick={() => menuToggle()}>
                                                <p className={`uppercase title ${active?'text-black':'text-darkGray'}`}>{data.title}
                                                </p>
                                                <div className="absolute z-10 w-[20px] h-auto right-0 top-1/2 translate-y-[-45%]" style={{transformOrigin:'center',transform:`rotate(${active?`180`:`0`}deg)`}}><Expand className={`w-full h-auto`}/></div>
                                              </div>
                                            <div className='w-full keyHold overflow-y-hidden ' style={{transition:`all .5s ease-in-out`,maxHeight:active?9000:0}}>
                                              <div className="py-2">
                                                {data.points?(
                                                  data.points.map((point:any,p:number)=>{
                                                    return(
                                                      <div id={`key-${p+1+(i>0?total[i-1]:0)}`} data-count={p+1+(i>0?total[i-1]:0)}  onClick={(e:any)=>changePoint(e)} className={`cursor-pointer w-full grid grid-cols-40 lg:grid-cols-12 gap-x-2 mapPoints font-bold keyList text-darkGray `} key={`${point.title}`}>
                                                        <div className='col-span-2'><p>{p+1+(i>0?total[i-1]:0)}</p></div>
                                                        <div className="col-span-18 lg:col-span-10"><p>{point.title}</p></div>
                                                      </div>
                                                    )
                                                  })
                                                ):('')}
                                              </div>
                                            </div>
                                            
                                        
                                </div>
           </React.Fragment>

    
    )
}