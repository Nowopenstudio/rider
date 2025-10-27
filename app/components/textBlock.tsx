
import React, { useEffect, useRef, useState } from 'react';
import { PortableText } from 'next-sanity';
import { Reveal } from '../util/reveal';



export default function TextBlock({title,footnote,copy,subhead}: any) {
  

  

  return (
    <React.Fragment>
        <div className="w-full grid grid-cols-12 gap-x-9 items-end">
                  <div className='col-span-full grid grid-cols-2 py-14 border-b  px-9'>
                    <Reveal styleSet="uppercase"><PortableText value={title} /></Reveal>
                    {footnote?( <Reveal styleSet="text-right footnote text-gray pointer-events-none"><PortableText value={footnote} /></Reveal>):('')}
                   
                  </div>
                  {copy?(  <Reveal styleSet="col-span-6 px-9"><PortableText value={copy} /></Reveal>):('')}
                  
                  {subhead?(<div className="col-span-6 flex flex-col-reverse px-9"><Reveal styleSet=" text pt-14 uppercase ml-auto mr-0 inline-block"><PortableText value={subhead} /></Reveal>
                  </div>):('')}
                  
                </div>
    </React.Fragment>
  );
}