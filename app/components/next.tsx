"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { CircleRight, Right } from './svg';
import { Reveal } from '../util/reveal';


export default function Next({ cta,next}: any) {

  


  return (
    <React.Fragment>
        <div className="w-full grid gird-cols-1 md:grid-cols-2 pt-9 md:pb-9 bg-white">
              <Reveal styleSet="col-span-full py-2 uppercase label font-bold px-4 md:px-9"><p>{cta.label}</p></Reveal>
    
              <Reveal styleSet="col-span-1 border-r px-4 md:px-9 ">
                <div className="w-full border-t md:border-b h-full py-4">
                  <div className="mb-8 uppercase divide w-full"><PortableText value={cta.title}/></div>
                  <div className="w-2/3 mb-16"><PortableText value={cta.copy}/></div>
                  <div className="w-full flex gap-13 pb-4 items-center">
                    <div className="h-[45px] w-[45px]"><Image alt="image" sizes={`150px`} width={45} height={45} src={cta.image}  className={`w-auto h-[45px]}`} /></div>
                    <Link href="/" className="cta secondary inline-block"><p>{cta.cta.label}</p></Link>
                  </div>
                </div>
              </Reveal >
                <Link href={next.url?next.url:"/"} className="col-span-1 md:border-r md:px-9" >
                  <Reveal styleSet="w-full h-full relative" count={1}>
                    <div className="w-full border-t md:border-b h-full bg-gray md:bg-white px-4 md:px-0 py-9 md:py-2 flex items-center md:justify-center relative">
                    <div className="cta-sub text-black md:text-darkGray relative font-semibold">
                      <p>{next.label}</p>
                    
                      <div className="w-[40px] h-auto absolute right-0 top-0 nextArrow hidden md:block"><Right className="w-full h-auto"/></div>
                      
                   
                    </div>

                    <div className="w-[21px] h-[21px] absolute right-4 top-[50%] translate-y-[-50%] block md:hidden"><CircleRight className="w-full h-full"/></div>
                  </div>
                
                </Reveal>
                </Link>
            </div>
    </React.Fragment>
  );
}