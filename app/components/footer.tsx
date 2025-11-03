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
      <div id={'footer'} className="w-full xl:h-[200dvh] z-1 xl:pt-0] xl:mt-[-100dvh] bg-black xl:bg-offWhite footer ">
        <div className="xl:sticky w-full  xl:mt-[0] xl:h-[100dvh] top-0 left-0 xl:grid grid-cols-2">
          <div className="downloadBar absolute top-[74px] px-4 xl:px-9 w-full z-20 bg-black h-[60px] items-center justify-between hidden xl:flex">
            <div className="uppercase text-white"><p>{data.contact.phone}</p></div>
            <div className="uppercase text-darkGray"><p>{data.contact.cta.label}</p></div>
          </div>
          <div className="form col-span-2 xl:col-span-1 xl:flex items-center justify-center xl:relative text-white xl:text-black pt-39 xl:pt-0 h-[200dvh] xl:h-full mt-[-100dvh] xl:mt-0">
                <div className="sticky top-0 xl:relative w-full xl:w-3/4 flex-col flex gap-y-10 pb-9 xl:pb-18 px-4 xl:px-0 pt-50 xl:pt-0">
                      <h3 className="uppercase ">{data.form.headline}</h3>
                      <div><PortableText value={data.form.copy}/></div>
                      <form className="form w-full px-4 xl:px-0">
                           <div className="w-full grid grid-cols-1 xl:grid-cols-2 xl:gap-x-4 gap-y-0">
                              {data.form.input.map((item:any,i:number)=>{
                                return(
                                  <div key={`input-${item.label}`} className="col-span-full xl:col-span-1 mb-[10px]">
                                    <label className="pb-1">{item.label} *</label>
                                    <input className="border w-full mt-1" name={item.value}></input>
                                  </div>
                                )
                              })}
                              <div className="col-span-2 mb-8">
                                <label className="w-full mb-1">Comments</label>
                                <textarea className="border resize-none h-[20px] w-full mt-1"></textarea>
                              </div>
                              <div className="col-span-full">
                               <div className="w-full grid grid-cols-8 gap-x-9 pb-7">
                                  <div className="col-span-2 label mb-1"><p>{data.form.rooms.label}</p></div>
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
                                      <div className="flex items-center gap-2 col-span-2 xl:col-span-1" key={`rooms-${i}`}>
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
            <div className="col-span-2 xl:col-span-1 h-full relative pt-9 xl:pt-0">
              <div className="w-full h-full hidden xl:block"><SwitchContent work={data.footerVid} title={`amenities`} ratio={data.footerVid.ratio} audio={false} cover /></div>
              <div className="xl:absolute xl:top-0 left-0 w-full xl:h-full pointer-events-none z-10 hidden xl:block" style={{backgroundColor:`rgba(0,0,0,.6)`}}></div>
              <div className="xl:absolute xl:top-0 left-0 w-full xl:h-full pointer-events-none z-11 xl:flex justify-between items-center px-4 xl:px-11">
                                  {data.contacts.map((item:any,i:number)=>{
                                    return(
                                      <div className="flex-shrink-0 col-span-1 font-bold footerContact uppercase text-white mb-9 xl:mb-0" key={`contacts-${i}`}>
                                        <p className="uppercase mb-2 xl:mb-9 text-darkGray xl:text-white">{item.title}</p>
                                        <PortableText value={item.copy}/>
                                      </div>
                                    )
                                  })}
              </div>

            </div>

                  
                    <div className="xl:absolute bottom-0 left-1/2 w-full xl:w-1/2 px-4 xl:px-9 z-20">
                              <div className='w-full py-9 flex flex-wrap gap-x-18 xl:gap-x-0 xl:justify-between items-center'>
                             
                                  {data.footerLogos.map((item:any,i:number)=>{
                              return(
                                     <div className="h-[40px] xl:h-[22px] flex-shrink-0 w-auto mix-blend-difference" key={`footLogo-${i}`}>
                                  <Image alt="image" sizes={`150px`} width={45} height={45} src={item.image}  className={`w-auto h-[full]} `} />
                                </div>
                              )
                                  })}
                              
                                
                          
                              
                              </div>
                   </div>
                   <div className="xl:absolute bottom-0 left-0 w-full xl:w-1/2 px-4 md:px-9 relative text-white xl:text-black">
                              <div className='w-full py-9 border-0 xl:border-t flex justify-start xl:justify-between items-center flex-wrap xl:flex-nowrap'>
                              <div className={`${mobile?'copyright':''} disclaim flex flex-row-reverse  xl:w-auto xl:flex-row gap-0 xl:gap-9 footnote items-center policies xl:bg-offWhite`}>
                                <div className="h-[22px] w-auto mix-blend-difference">
                                  <Image alt="image" sizes={`150px`} width={45} height={45} src={data.disclaim.logo}  className={`w-auto h-[full]} `} />
                                </div>
                                <div><p className="text-nowrap mr-9 xl:mr-0">Disclaimers ↓</p></div>
                                <div className="flex flex-wrap w-full">
                                  <div className="pr-2 xl:px-2 border-r "><p>Privacy Policy</p></div>
                                  <div className="px-2 border-r"><p>Terms of Use</p></div>
                                   <div className="px-2 border-r xl:border-0"><p>Faqs</p></div>
                                </div>
                              </div>
                              <div className="copyright"><PortableText value={data.disclaim.copyright}/></div>
                              </div>
                   </div>
                    </div>

      </div>
    </React.Fragment>

  );
}