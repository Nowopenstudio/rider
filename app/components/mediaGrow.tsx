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
      
           <div className="w-full overflow-x-hidden">
               <div ref={ref} className={`w-full relative  origin-center mediaGrow h-[70dvh] md:h-auto`} style={{ transform:`scale(${isInView?1:size})`,aspectRatio: `${data.ratio.replace(":", " / ")}` }}>
                                 <SwitchContent work={data} title={'Header Video'} ratio={data.ratio} audio={false} cover={mobile?true:undefined} />
               </div>
               <div className="flex py-4 justify-between col-span-full onHover">
                    <div className="credits px-4 md:px-0 w-full lg:w-2/3 uppercase"><PortableText value={data.credits}/></div>
               </div>
           </div>

    
    )
}