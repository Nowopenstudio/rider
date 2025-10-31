'use client'

import React, {useEffect, useRef } from 'react';
import {motion, useInView, useAnimation } from "framer-motion";
import useResize from '../util/useResize';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';




export function MediaGrow({data, size}:any){
   const ref= useRef<HTMLDivElement>(null!)
     const { mobile} = useResize()
   const isInView = useInView(ref,{once:false,margin: "-30% 0px -30% 0px"})


    
   
   return(
      
           <div className="w-full">
               <div ref={ref} className={`col-span-12 relative  origin-center mediaGrow `} style={{ transform:`scale(${isInView?1:size})`,aspectRatio: `${data.ratio.replace(":", " / ")}` }}>
                                 <SwitchContent work={data} title={'Header Video'} ratio={data.ratio} audio={false} cover />
               </div>
               <div className="flex py-4 justify-between col-span-full onHover">
                    <div className="credits w-2/3 uppercase"><PortableText value={data.credits}/></div>
               </div>
           </div>

    
    )
}