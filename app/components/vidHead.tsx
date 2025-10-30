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
    const [scrollY, setScroll]=useState(null)
    const [scrollPercent, setPer]=useState(0)
    const [compact, setCompact] = useState(false)
    const [condense, setCondense] = useState(false)

    const lenis = useLenis(({scroll, dimensions }) => {
        if((scroll<=(dimensions.height-dimensions.height*.85))){
            const newRange = (dimensions.height-scroll)/dimensions.height
            setScroll(getRange(newRange,0,1,0,100))
            setPer(getRange(scroll/dimensions.height,0,1,0,100))
            console.log('scroll')
            setCondense(false)
        }else if((scroll > dimensions.height-dimensions.height*.85)){
          setCondense(true)
        }
      })

      const scrollClick=(id:any)=>{
        const element = document.getElementById(id)
        console.log('go',element)
        lenis!.scrollTo(element!)
      }

      const scrollTop=()=>{
      if(lenis){
        lenis!.scrollTo(0)
      }
     
      }


    
   
   return(
      
              <div className="w-full h-[100dvh] flex items-start justify-center sticky top-0 z-1 bg-medGray" style={{padding:`${condense?`${scrollPercent*10}`:`${scrollPercent*10}`}px`}}>
           
                   <div className={`projectCover col-span-2 relative coverSwitch fadeOn `} style={{height:`${condense?`85`:`${scrollY}`}%`,aspectRatio:`${winX}/${winY}`}}>
                     <SwitchContent work={data} title={'Header Video'} ratio={data.ratio} audio={false} cover />
                    <div className="credits w-full absolute bottom-0 py-4 left-0 translate-y-[100%]"><PortableText value={data.credits}/></div>
                     
           
                   </div>
           
                 </div>

    
    )
}