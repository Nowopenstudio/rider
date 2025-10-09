'use client'

import React, {useEffect, useRef } from 'react';
import {motion, useInView, useAnimation } from "framer-motion";

// interface Props {
//     children: JSX.Element;
//     width?:"100vw"
// }

// const variants = {
//     visible: (i:any) => ({
//       opacity: 1,
//       transition: {
//         delay: i * 1,
//       },
//     }),
//     hidden: { opacity: 0 },
//   }

export function Reveal({children, styleSet, count}:any){
   const ref= useRef(null!)
   const isInView = useInView(ref,{once:true,margin: "0px 0px -10% 0px"})
   const mainControls = useAnimation();

    
   useEffect(()=>{
    if(isInView){
        mainControls.start('visible')
    }
   },[isInView])
   return(
      
            <motion.div ref={ref}  className={`${styleSet}`}
                variants={{
                    hidden:{opacity:0},
                    visible:{opacity:1}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration:0.7, delay:count*.25 }}
            >{children}</motion.div>

    
    )
}