
import React, { useEffect, useRef, useState } from 'react';
import { PortableText } from 'next-sanity';
import { Reveal } from '../util/reveal';



export default function TextBlock({title,footnote,copy,subhead, cta}: any) {
  

  

  return (
    <React.Fragment>
        <div className="w-full grid grid-cols-12 gap-x-9 items-end px-9">
                  <div className='col-span-full grid grid-cols-2 py-14 border-b   relative'>
                    <Reveal styleSet="uppercase col-span-2"><PortableText value={title} /></Reveal>
                    {footnote?( <Reveal styleSet="text-right footnote text-gray pointer-events-none"><PortableText value={footnote} /></Reveal>):('')}
                    {cta?(<div className="cta inline-block absolute top-9 right-0 secondary"><p>{cta.label}</p></div>):('')}
                   
                  </div>
                  {copy?(  <Reveal styleSet="col-span-6  pt-9"><PortableText value={copy} /></Reveal>):('')}
                  
                  {subhead?(<div className="col-span-6 col-end-13 flex flex-col-reverse divide "><Reveal styleSet=" text pt-14 uppercase ml-auto mr-0 inline-block"><PortableText value={subhead} /></Reveal>
                  </div>):('')}
                  
                </div>
    </React.Fragment>
  );
}