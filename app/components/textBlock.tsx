
import React, { useEffect, useRef, useState } from 'react';
import { PortableText } from 'next-sanity';
import { Reveal } from '../util/reveal';
import { ScrollArrow } from './svg';



export default function TextBlock({title,footnote,copy,subhead, cta,arrow,top,right,off,arrowBot}: any) {
  

  

  return (
    <React.Fragment>
        <div className={`w-full grid grid-cols-12 gay-x-4 md:gap-x-9 ${top?"items-start":"items-end"} px-4 md:px-9 `}>
                  <div className={`col-span-full grid grid-cols-2 py-4 md:py-9 border-b   relative ${off?'':'border-t mt-9'}`}>
                    <Reveal styleSet="uppercase col-span-2 title"><PortableText value={title} /></Reveal>
                    {arrow?( <div className="scrollArrow absolute top-4 md:top-9 right-0"><ScrollArrow  className="w-[30px] h-auto" fill={"#000000"} /></div>):('')}
                    {arrowBot?( <div className="scrollArrow absolute  bottom-4 sm:bottom-9 right-0"><ScrollArrow  className="none md:block w-[30px] h-auto" fill={"#000000"} /></div>):('')}
                    {cta?(<div className="cta inline-block absolute top-4 sm:top-9 right-0 secondary"><p>{cta.label}</p></div>):('')}
                   
                  </div>
                  {copy?(  <Reveal styleSet="col-span-full xl:col-span-6  pt-4 sm:pt-9 grid grid-cols-6"><div className="col-span-full 2xl:col-span-4"><PortableText value={copy} /></div></Reveal>):('')}
                  
                  {subhead?(<div className={`col-span-full xl:col-span-6 row-start-2 mb-4 md:mb-9 xl:mb-0 xl:row-start-auto xl:col-end-13 flex xl:flex-col-reverse divide ${right?"xl:text-right":""}`}><Reveal styleSet=" text pt-4 md:pt-9 uppercase xl:ml-auto mr-0 inline-block"><PortableText value={subhead} /></Reveal>
                  </div>):('')}
                  
                </div>
    </React.Fragment>
  );
}