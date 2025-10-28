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



export default function Locations({ data }: any) {




  const scrollto = (i: number) => {
   console.log(i)
  }



  return (
    <React.Fragment>

      <div className="w-full">
        <div className="w-full mb-79 px-9 ">
          {data.map((item: any, i: number) => {
            return (
              <div id={`loc-${i}`}key={`filter-${item.title}`} onClick={() => scrollto(i)} className={`cta filter cursor-pointer inline-block secondary`}><p>{item.title}</p></div>
  
            )
          })}
        </div>

        {data.map((item:any,i:number)=>{
          return(
            <div className="w-full" key={`location-${i}`}>
              <div className="w-full grid grid-cols-12 px-9 mb-19">
              
                          <div className="col-span-full py-2 border-b  pb-4 mb-9 uppercase label font-bold"><p>{item.label}</p></div>
                          <div className="col-span-6 divide uppercase mb-14 row-start-2">
                            <h3>{item.title}</h3>
                          </div>
                          <div className="col-span-6 mb-30 row-start-3">
                            <PortableText value={item.copy} />
                          </div>
                          <Reveal styleSet="col-span-10 col-start-2 mb-39 aspect-video">
                                    <div className="w-full h-full flex items-center justify-center">{item.media ? (<SwitchContent work={item.media} title={'Header Video'} ratio={item.media.ratio} audio={false} contain/>) : ('')}</div>
                          
                                  </Reveal>
                          
                    </div>
                     <div className="mb-39">
                      <GalleryC data={item.gallery} full/>
                     </div>
            </div>
           

          )
        })}
      </div>
    </React.Fragment>

  );
}