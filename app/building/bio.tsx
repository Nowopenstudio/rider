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



export default function Bio({ data }: any) {
const {mobile} = useResize();
const [active,setActive]=useState(false);



const toggleActive=()=>{
  setActive(!active)
}


  return (
    <React.Fragment>

        {mobile?(
          <React.Fragment>
             <div className="w-full pb-4 richText">
              <PortableText value={data.intro} />
            </div>
            {data.quote?(
              <React.Fragment>
                 <div className="w-full pb-4 richText overflow-hidden" style={{transition:`all .5s ease-in-out`,maxHeight:active?1000:0,opacity:active?1:0}}>
              <PortableText value={data.quote} />
            </div>
           <div className="cta inline-block mb-4 cursor-pointer inverted" onClick={toggleActive}><p>{active?'REad Less':'Read More'}</p></div>
            </React.Fragment>
            ):('')}
           
          </React.Fragment>
        ):(
         <React.Fragment>
             <div className="w-full pb-4 richText">
              <PortableText value={data.intro} />
            </div>
            {data.quote?(
              <React.Fragment>
                 <div className="w-full pb-9 richText overflow-hidden" >
              <PortableText value={data.quote} />
            </div>
            </React.Fragment>
            ):('')}
           
          </React.Fragment>
        )}      
    </React.Fragment>

  );
}