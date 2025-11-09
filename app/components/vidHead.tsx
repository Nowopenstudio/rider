'use client'

import React, {useEffect, useRef, useState } from 'react';
import {motion, useInView, useAnimation } from "framer-motion";
import useResize from '../util/useResize';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import { useLenis, ReactLenis } from 'lenis/react';
import { getRange } from '../util/sanity';
import { Info, InfoAlt } from './svg';




export function VidHead({data, size}:any){
   const {winX, winY, mobile} = useResize()

    const [condense, setCondense] = useState(false)
    const [active,setActive] = useState(false)


    useEffect(()=>{
        setInterval(()=>{
          setCondense(true)
        },2000)
    },[])

    const toggleActive=()=>{
      setActive(!active)
    }

    
   
   return(
      
              <div id={`videoHeader`} className="w-full h-[100dvh] flex items-start justify-center sticky top-0 z-1 bg-medGray headerAnim" style={{animationDelay:`2s`}} >
           
                   <div className={`projectCover col-span-2 relative coverSwitch fadeOn w-full  h-full video`} >
                     <SwitchContent work={data} title={'Header Video'} ratio={data.ratio} audio={false} cover />
                     {mobile && data.credits?(

                         <div className="credits w-full absolute bottom-0 p-4 flex gap-4 left-0 text-white items-end overflow-hidden">
                          <div className="w-[10px] h-[10px]" onClick={toggleActive}>{active?(<Info className="w-full h-full" />):(<InfoAlt className="w-full h-full" />)}</div>
                         <div className="w-full" style={{transition:'.5s all cubic-bezier(0.075, 0.82, 0.165, 1)',opacity:active?1:0, transform:`translateX(${active?'0':'20'}px)`}}> <PortableText value={data.credits}/></div></div>
                     
                     ):(
                         <div className="credits w-full absolute bottom-0 py-4 left-0 translate-y-[100%]"><PortableText value={data.credits}/></div>
                     
                     )}
                 
           
                   </div>
           
                 </div>

    
    )
}