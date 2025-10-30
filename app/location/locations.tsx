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




  const scrollto = (i: number) => {
   console.log(i)
  }



  return (
    <React.Fragment>

      <div className="w-full">
        <div className="w-full mb-79 px-9 flex gap-4 ">
          {data.map((item: any, i: number) => {
            return (
              <div key={`filter-${item.title}`}><ScrollCTA id={`loc-${i}`} cta={{"label":item.title}} sub/></div>
  
            )
          })}
        </div>

        {data.map((item:any,i:number)=>{
          return(
            <div id={`loc-${i}`} className="w-full" key={`location-${i}`}>
              <div className="w-full grid grid-cols-12 px-9">
              
                          <div className="col-span-full py-2 border-b  pb-4 mb-9 uppercase label font-bold"><p>{item.label}</p></div>
                          <div className="col-span-6 divide uppercase mb-14 row-start-2">
                            <h3>{item.title}</h3>
                          </div>
                          <div className="col-span-6 mb-30 row-start-3">
                            <PortableText value={item.copy} />
                          </div>
                          <Reveal styleSet="col-span-10 col-start-2 aspect-video hoverOn">
                                    <div className="w-full h-full flex flex-wrap items-center justify-center relative flex-shrink-0">{item.media ? (<SwitchContent credits captions work={item.media} title={'Header Video'} ratio={item.media.ratio} audio={false} contain/>) : ('')}</div>
                          
                                  </Reveal>
                          
                    </div>
                     <div className="">
                      <GalleryC data={item.gallery}/>
                     </div>
            </div>
           

          )
        })}
      </div>
    </React.Fragment>

  );
}