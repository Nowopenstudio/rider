'use client'

import React, {useEffect, useRef, useState } from 'react';
import {motion, useInView, useAnimation } from "framer-motion";
import useResize from '../util/useResize';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import { useLenis, ReactLenis } from 'lenis/react';
import { getRange } from '../util/sanity';




export function VidHead({data, size}:any){
   const {winX, winY, mobile} = useResize()

    const [condense, setCondense] = useState(false)


    useEffect(()=>{
        setInterval(()=>{
          setCondense(true)
        },2000)
    },[])

    
   
   return(
      
              <div id={`videoHeader`} className="w-full h-[100dvh] flex items-start justify-center sticky top-0 z-1 bg-medGray headerAnim" style={{animationDelay:`2s`}} >
           
                   <div className={`projectCover col-span-2 relative coverSwitch fadeOn w-full  h-full video`} >
                     <SwitchContent work={data} title={'Header Video'} ratio={data.ratio} audio={false} cover />
                    <div className="credits w-full absolute bottom-0 py-4 left-0 translate-y-[100%]"><PortableText value={data.credits}/></div>
                     
           
                   </div>
           
                 </div>

    
    )
}