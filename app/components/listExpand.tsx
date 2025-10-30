'use client'

import React, {useEffect, useRef, useState } from 'react';
import {motion, useInView, useAnimation } from "framer-motion";
import useResize from '../util/useResize';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import { Plus } from './svg';




export function ListExpand({data, size}:any){

     const [active, setActive] = useState(false)
     const menuToggle = () => {
    setActive(!active)
  }



    
   
   return(
      
           <React.Fragment>
                 <div className="w-full cursor-pointer" onClick={() => menuToggle()}>
                   <div  className={`listOn w-full flex items-center gap-3 py-5 border-b ${active?'show':''}`} >
                                      <div className="w-[45px] h-[45px]" style={{transformOrigin:'center',transition:`all .25s ease-in-out`,transform:`rotate(${active?"45":'0'}deg)`}}><Plus className="w-full h-full"/></div>
                                      <div className={"font-medium uppercase listLabel"}><h5>{data.title}</h5></div>
                   </div>
                   <div className={`listItem w-full h-auto ${active?'show':''}`}>
                    <div className="py-14"><PortableText value={data.copy}/></div>
                   </div>
                 </div>
           </React.Fragment>

    
    )
}