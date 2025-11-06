'use client'

import React, {useEffect, useRef, useState } from 'react';
import {motion, useInView, useAnimation } from "framer-motion";
import useResize from '../util/useResize';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import { Reveal } from '../util/reveal';




export function HoverVid({data}:any){
   const ref= useRef<HTMLDivElement>(null!)
   const {mobile}=useResize()
  const [active,setActive]= useState(false);
    
  const hoverOn =()=>{
    setActive(true)
 
  }

    const hoverOff =()=>{
    setActive(false)
  }
   
   return(
         <Reveal   styleSet="col-span-full md:col-span-6 md:col-start-4 aspect-video relative my-10 md:my-39">
              <div onMouseEnter={hoverOn}  onMouseOut={hoverOff} className="w-full h-auto"><SwitchContent work={{image:data.image}} title={'Header Video'} ratio={data.ratio} audio={false} cover/></div>
         <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"> {active || mobile?(  <div className="w-full h-full fadeOn"><SwitchContent work={data} title={'Header Video'} ratio={data.ratio} audio={false} cover/></div>):('')}</div>
                
                  
                </Reveal>

    
    )
}