'use client'

import React, {useEffect, useRef, useState } from 'react';
import {motion, useInView, useAnimation } from "framer-motion";
import useResize from '../util/useResize';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import { Expand, Plus } from './svg';




export function BuildExpand({data, title, sub}:any){

     const [active, setActive] = useState(false)
     const {mobile} = useResize();
     const menuToggle = () => {
    setActive(!active)
  }


   
   return(
      
           <React.Fragment>
             
              {mobile?(
                <div className="w-full">
                <div className={`w-full cursor-pointer relative ${active?'text-black':'text-darkGray'}`}  onClick={() => menuToggle()}>
                  <div className="w-full font-bold uppercase"><p className="subMenu font-medium mb-4">{title}</p></div>
                  <div className="menuText mb-4 md:mb-[42px]"><p>{sub}</p></div>
                   <div className="absolute z-10 w-[20px] h-auto right-0 bottom-2 " style={{transformOrigin:'center',transform:`rotate(${active?`180`:`0`}deg)`}}><Expand className={`w-full h-auto`}/></div>
                </div>
                <div className={`listHold mb-9 md:mb-14 ${active?'border-black':'border-gray'} border-b overflow-hidden`} style={{transition:`all .5s ease-in-out`,maxHeight:active?9000:0}}>
                  <div className="w-full py-2">
                    {data.map((item: any, i: number) => {
                      return (
                        <div key={`service-${i}`} className="hoverOn flex gap-x-3 w-full py-[15px] font-semibold text-darkGray border-darkGray border-t uppercase">
                          <p className="label">{i < 9 ? '0' : ''}{i + 1}.</p>
                          <p className="label hoverRight">{item.title}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
  
  
              </div>
              ):(
                <div className="w-full">
                <div className="w-full font-bold uppercase"><p className="subMenu font-medium mb-4">{title}</p></div>
                <div className="menuText mb-4 md:mb-[42px]"><p><em>{sub}</em></p></div>
                <div className="listHold mb-9 md:mb-14 border-darkGray border-b">
                  {data.map((item: any, i: number) => {
                    return (
                      <div key={`service-${i}`} className="hoverOn flex gap-x-3 w-full py-[15px] font-semibold text-darkGray border-darkGray border-t uppercase">
                        <p className="label">{i < 9 ? '0' : ''}{i + 1}.</p>
                        <p className="label hoverRight">{item.title}</p>
                      </div>
                    )
                  })}
                </div>
  
  
              </div>
              )}
              
           </React.Fragment>

    
    )
}