"use client"


import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import useResize from '../util/useResize';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import Image from 'next/image';


export default function Footer({ data }: any) {
  const page = usePathname();
  const { mobile } = useResize()
  const [active, setActive] = useState(false)


  return (
    <React.Fragment>
      <div className="w-full h-[200dvh] z-1 mt-[-100dvh] bg-offWhite footer ">
        <div className="sticky w-full h-[100dvh] top-0 left-0 grid grid-cols-2">
          <div className="downloadBar absolute top-[74px] px-9 w-full z-20 bg-black h-[60px] flex items-center justify-between">
            <div className="uppercase text-white"><p>{data.contact.phone}</p></div>
            <div className="uppercase text-darkGray"><p>{data.contact.cta.label}</p></div>
          </div>
          <div className="form col-span-1 flex items-center justify-center relative">
                <div className="w-3/4 flex-col flex gap-y-10 pb-18">
                      <h3 className="uppercase ">{data.form.headline}</h3>
                      <div><PortableText value={data.form.copy}/></div>
                      <form className="form w-full ">
                           <div className="w-full grid grid-cols-2 gap-x-4 gap-y-0">
                              {data.form.input.map((item:any,i:number)=>{
                                return(
                                  <div key={`input-${item.label}`} className="col-span-1 mb-[10px]">
                                    <label >{item.label} *</label>
                                    <input className="border w-full" name={item.value}></input>
                                  </div>
                                )
                              })}
                              <div className="col-span-2 mb-8">
                                <label className="w-full">Comments</label>
                                <textarea className="border resize-none h-[20px] w-full"></textarea>
                              </div>
                              <div className="col-span-full">
                               <div className="w-full grid grid-cols-8 gap-x-9 pb-7">
                                  <div className="col-span-2 label"><p>{data.form.rooms.label}</p></div>
                                  {data.form.rooms.options.map((item:any,i:number)=>{
                                    return(
                                      <div className="flex items-center gap-2 col-span-1" key={`rooms-${i}`}>
                                          <div className="border w-[10px] h-[10px] rounded-full flex-shrink-0"></div>
                                          <div className="label">{item.label}</div>
                                      </div>
                                    )
                                  })}
                               </div>
                               <div className="w-full grid grid-cols-8 gap-x-9 pb-7">
                                  <div className="col-span-2 label"><p>{data.form.broker.label}</p></div>
                                  {data.form.broker.options.map((item:any,i:number)=>{
                                    return(
                                      <div className="flex items-center gap-2 col-span-1" key={`rooms-${i}`}>
                                          <div className="border w-[10px] h-[10px] rounded-full flex-shrink-0"></div>
                                          <div className="label">{item.label}</div>
                                      </div>
                                    )
                                  })}
                               </div>
                               <div className="w-full grid grid-cols-8 gap-x-9 items-center">
                                <div className="cta secondary inline-block col-span-2 text-center"><p className="w-full">SUBMIT</p></div>
                                <div className="disclaimerText text-gray col-span-5 legal"><PortableText value={data.form.disclaimers}/></div>
                               </div>
                              </div>
        
                           </div>
                      </form>

                  </div>

     
  
          </div>
            <div className="form col-span-1 h-full relative">
              <SwitchContent work={data.footerVid} title={`amenities`} ratio={data.footerVid.ratio} audio={false} cover />
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10" style={{backgroundColor:`rgba(0,0,0,.6)`}}></div>
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-11 flex justify-between items-center px-11">
                                  {data.contacts.map((item:any,i:number)=>{
                                    return(
                                      <div className="flex-shrink-0 col-span-1 font-bold footerContact uppercase text-white" key={`contacts-${i}`}>
                                        <p className="uppercase mb-9">{item.title}</p>
                                        <PortableText value={item.copy}/>
                                      </div>
                                    )
                                  })}
              </div>

            </div>

                   <div className="absolute bottom-0 left-0 w-1/2 px-9">
                              <div className='w-full py-9 border-t flex justify-between items-center'>
                              <div className="disclaim flex gap-9 footnote items-center policies bg-offWhite">
                                <div className="h-[22px] w-auto mix-blend-difference">
                                  <Image alt="image" sizes={`150px`} width={45} height={45} src={data.disclaim.logo}  className={`w-auto h-[full]} `} />
                                </div>
                                <div><p>Disclaimers ↓</p></div>
                                <div className="flex">
                                  <div className="px-2 border-r"><p>Privacy Policy</p></div>
                                  <div className="px-2 border-r"><p>Terms of Use</p></div>
                                   <div className="px-2"><p>Faqs</p></div>
                                </div>
                              </div>
                              <div className="copyright"><PortableText value={data.disclaim.copyright}/></div>
                              </div>
                   </div>
                    <div className="absolute bottom-0 left-1/2 w-1/2 px-9 z-20">
                              <div className='w-full py-9 flex justify-between items-center'>
                             
                                  {data.footerLogos.map((item:any,i:number)=>{
                              return(
                                     <div className="h-[22px] w-auto mix-blend-difference" key={`footLogo-${i}`}>
                                  <Image alt="image" sizes={`150px`} width={45} height={45} src={item.image}  className={`w-auto h-[full]} `} />
                                </div>
                              )
                                  })}
                              
                                
                          
                              
                              </div>
                   </div>
                    </div>

      </div>
    </React.Fragment>

  );
}