'use client'

import React, {useEffect, useRef, useState } from 'react';
import {motion, useInView, useAnimation } from "framer-motion";
import useResize from '../util/useResize';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import { Info, InfoAlt } from './svg';




export function MediaGrow({data, size}:any){
   const ref= useRef<HTMLDivElement>(null!)
     const { mobile} = useResize()
     const [active,setActive] = useState(false)
   const isInView = useInView(ref,{once:false,margin: "-30% 0px -30% 0px"})

const toggleActive=()=>{
  setActive(!active)
}
    
   
   return(
      
           <div className="w-full overflow-x-hidden relative">
               <div ref={ref} className={`w-full  origin-center mediaGrow h-[80dvh] md:h-[75dvh]`} style={{ transform:`scale(${isInView?1:size})` }}>
                                 <SwitchContent work={data} title={'Header Video'} ratio={data.ratio} audio={false} cover />
               </div>

               {mobile?(
                <div className="credits w-full absolute bottom-4 md:bottom-0 px-4 flex gap-4 left-0 text-white items-end overflow-hidden z-10 md:translate-y-[-100%]">
                                          <div className="w-[16px] h-[16px] pointer-events-auto" onClick={toggleActive}>{active?(<InfoAlt className="w-full h-full" />):(<Info className="w-full h-full" />)}</div>
                                         <div className="w-full uppercase" style={{transition:'.5s all cubic-bezier(0.075, 0.82, 0.165, 1)',opacity:active?1:0, transform:`translateX(${active?'0':'20'}px)`}}> <PortableText value={data.credits}/></div></div> 
               ):(
                    <div className="flex py-4 justify-between col-span-full">
                    <div className="credits px-4 md:px-0 w-full lg:w-2/3 uppercase"><PortableText value={data.credits}/></div>
               </div>
               )}
           
           </div>

    
    )
}