"use client"

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { Reveal } from '../util/reveal';
import { TextOn } from '../util/misc';
import useResize from '../util/useResize';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import GalleryC from '../components/galleryC';
import { ScrollCTA } from '../components/scrollTarget';



export default function Locations({ data }: any) {
const {mobile} = useResize();






  return (
    <React.Fragment>
      <div className="col-span-full mb-18 md:mb-79 px-4 md:px-9 flex justify-between sticky top-[70px] md:top-[90px] md:justify-start gap-4 z-10 bg-offWhite md:bg-transparent py-4 md:py-0">
          {data.map((item: any, i: number) => {
            return (
              <div key={`filter-${item.title}`}><ScrollCTA id={`loc-${i}`} cta={{"label":item.title}} sub={mobile?false:true} /></div>
  
            )
          })}
        </div>
      <div className="col-span-full h-auto relative hoverOn overflow-x-hidden">
        {data.map((item:any,i:number)=>{
          return(
            <div id={`loc-${i}`} className="w-full" key={`location-${i}`}>
              <div className="w-full grid grid-cols-12 px-4 md:px-9 mb-19">
              
                          <div className="col-span-full py-2 border-b  pb-4 mb-4 md:mb-9 uppercase label font-bold"><p>{item.label}</p></div>
                          <div className="col-span-full md:col-span-6 divide uppercase mb-9 md:mb-14 row-start-2">
                            <h3>{item.title}</h3>
                          </div>
                          <div className="col-span-full md:col-span-6 mb-9 md:mb-30 row-start-3">
                            <PortableText value={item.copy} />
                          </div>
                          <Reveal styleSet="col-span-full md:col-span-10 md:col-start-2 md:aspect-video hoverOn">
                                    <div className="w-full h-full flex flex-wrap items-center justify-center relative flex-shrink-0">{item.media ? (<SwitchContent credits captions work={item.media} title={'Header Video'} ratio={item.media.ratio} audio={false} contain/>) : ('')}</div>
                                  </Reveal>
                          
                    </div>
                     <div className="h-auto mb-9 md:mb-39">
                      <GalleryC data={item.gallery}/>
                     </div>
            </div>
           

          )
        })}
      </div>
    </React.Fragment>

  );
}