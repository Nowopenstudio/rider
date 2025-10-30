"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { Right } from './svg';
import { Reveal } from '../util/reveal';


export default function Next({ cta,next}: any) {

  


  return (
    <React.Fragment>
        <div className="w-full grid grid-cols-2 py-9 bg-white">
              <Reveal styleSet="col-span-full py-2 uppercase label font-bold px-9"><p>{cta.label}</p></Reveal>
    
              <Reveal styleSet="col-span-1 border-r px-9 ">
                <div className="w-full border-t border-b h-full py-4">
                  <div className="mb-8 uppercase divide w-full"><PortableText value={cta.title}/></div>
                  <div className="w-2/3 mb-16"><PortableText value={cta.copy}/></div>
                  <div className="w-full flex gap-13 pb-4 items-center">
                    <div className="h-[45px] w-[45px]"><Image alt="image" sizes={`150px`} width={45} height={45} src={cta.image}  className={`w-auto h-[45px]}`} /></div>
                     <div className="cta secondary inline-block"><p>{cta.cta.label}</p></div>
                  </div>
                </div>
              </Reveal >
                <Link href={next.url} className="col-span-1 border-r px-9 " >
                  <Reveal styleSet="w-full h-full"count={1}>
                    <div className="w-full border-t border-b h-full py-2 flex items-center justify-center">
                    <div className="cta-sub text-darkGray relative"><p>{next.label}</p>
                      <div className="w-[40px] h-auto absolute right-0 top-0 nextArrow"><Right className="w-full h-auto"/></div>
                    </div>
                  
                  </div>
                
                </Reveal>
                </Link>
            </div>
    </React.Fragment>
  );
}