'use client'

import React, { useState,FormEvent } from "react";
import { PortableText } from "next-sanity";
import { SwitchContent } from "@/app/util/contentSwitch";
import Next from "../components/next";
import TextBlock from "../components/textBlock";
import { Reveal } from "../util/reveal";
import { ListExpand } from "../components/listExpand";



export default function Gate({data,pro,slug}:any) {
  const [active, setActive] = useState<boolean>(false)
  const [access, setAccess] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const submitForm=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setIsLoading(true)
    const formData = new FormData(e.currentTarget);


    if(formData.get('accessCode') == 'therider'){setAccess(true)}
    else{setAccess(false);
      setActive(true);
      setIsLoading(false)
    }
   

  }



  return (
   <React.Fragment>
      
    
       
    
      
       
             {!access?(
                  
                    <div className="col-span-full p-4 md:p-9 grid grid-cols-12 h-[100dvh] items-top md:items-start pb-20 md:pb-0">
                        <div className="col-span-full">
                            <h1 className="title col-span-full  md:col-start-3 uppercase py-6">Password Required</h1>
                            <form onSubmit={submitForm} className={`col-span-full md:col-span-8 md:col-start-3 grid grid-cols-8 px-2 md:px-4 gap-4 items-end ${isLoading?"opacity-[.25] pointer-events-none":""}`}>
                           
                             <input className="col-span-full md:col-span-6 border-b border-black text-black whitespace-nowrap h-full" type="text"  placeholder="Enter Password" name="accessCode" required autoFocus ></input>
                             <button type="submit" className={`py-4 cta secondary col-span-full md:col-span-2`}>
                              {active?(
                                <p className="navItem whitespace-nowrap text-gray blink">Passcode Incorrect</p>
                              ):('')}
                              <p className="navItem whitespace-nowrap">Access Broker Support</p>  </button></form>
                        </div>
                    </div>
                
              ):(
                
                <React.Fragment>
                     <div className="col-span-full mb-9 md:mb-24">
                              <TextBlock title={data.intro.title} copy={data.intro.copy} subhead={data.intro.subhead} cta={data.intro.cta} off arrowBot />
                            </div>
                    
                    
                            <Reveal styleSet='col-span-full px-4 md:px-9 mb-18 md:mb-35'>
                              <div className="sheets mb-5"><PortableText value={data.sales.title}/></div>
                              <div className="mb-9 md:mb-14"><PortableText value={data.sales.subhead}/></div>
                              <div className="w-full sheetsHold border-t ">
                                {data.sales.sheets.map((item:any,i:number)=>{
                                  return(
                                  <ListExpand key={`cheat-${item.title}`} data={item}/>
                                  )
                                })}
                              </div>
                            </Reveal>
                    
                            <Reveal styleSet="col-span-full px-4 md:px-9 grid grid-cols-2 items-center mb-18 md:mb-39">
                              <div className="col-span-full md:col-span-1">
                                <div className="sheets mb-5"><PortableText value={data.toolkit.title}/></div>
                              <div className="mb-9 md:mb-14"><PortableText value={data.toolkit.subhead}/></div>
                              <div className="mb-9 ,d:mb-14"><PortableText value={data.toolkit.copy}/></div>
                              </div>
                              <div className="grid grid-cols-6 col-span-full md:col-span-1">
                                <div className="col-span-full md:col-span-4 md:col-end-7">
                                  <SwitchContent work={data.toolkit.media} title={'Header Video'} ratio={data.toolkit.media.ratio} audio={false} />
                                </div>
                              </div>
                            </Reveal>
                    
                            <div className="col-span-full px-4 md:px-9 grid grid-cols-12 mb-9 md:mb-39 overflow-x-hidden">
                              {data.resources.map((item:any,i:number)=>{
                                return(
                                  <Reveal key={`resources-${i}`} styleSet="col-span-full md:col-span-6 md:col-start-4 mb-10.5 md:mb-22">
                                    <div className="w-full aspect-[791/532]">
                                    <SwitchContent work={item.media} title={'Header Video'} ratio={item.media.ratio} audio={false} cover/>
                                    
                                    </div>
                                    <div className="w-full py-4 md:py-8 md:flex justify-between items-center">
                                      <div className="w-full md:w-2/3 uppercase sheets mb-4 md:mb-0">
                                        <h3>{item.title}</h3>
                                      </div>
                                      <div className="w-full md:w-1/3 flex-shrink-0 md:text-right resource"><PortableText value={item.copy}/></div>
                                    </div>
                                    <a href={item.cta.url?item.cta.url:'/'}><div className="cta inline-block"><p>{item.cta.label}</p></div></a>
                                  </Reveal>
                                )
                              })}
                            </div>
                    
                            <div className="col-span-full bg-black grid grid-cols-12 p-4 md:p-9 text-white overflow-x-hidden">
                              <Reveal styleSet="col-span-full border-darkGray border-t divide py-9 mb-9 md:mb-28">
                                <PortableText value={data.brokers.title}/>
                              </Reveal>
                              <div className="col-span-full md:col-span-8 md:col-start-3 mb-4 md:mb-28">
                                <Reveal styleSet="w-full uppercase mb-9 md:mb-28"><PortableText value={data.brokers.copy}/></Reveal>
                                 <div className="w-full grid grid-col-1 md:grid-cols-3 gap-4 :gap-15 mb-9 md:mb-39">
                                  {data.brokers.profiles.map((item:any,i:number)=>{
                                    return(
                                      <Reveal key={`broker-${i}`} styleSet="col-span-1">
                                          <div className="w-full aspect-[352/440]">
                                                  <SwitchContent work={item.media} title={'Header Video'} ratio={item.media.ratio} audio={false} cover/>
                    
                                          </div>
                                          <div className="py-8">
                                            <p className="mb-3">{item.name}</p>
                                            <div className="w-full text-darkGray"><PortableText value={item.contact}/></div>
                                          </div>
                                      </Reveal>
                                    )
                                  })}
                                 </div>
                                 <Reveal styleSet="w-full">
                                  <SwitchContent work={data.brokers.media} title={'Header Video'} ratio={data.brokers.media.ratio} audio={false} />
                                 </Reveal>
                              </div>
                             
                            </div>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                            {/* CTA */}
                            <div className="col-span-full"> <Next next={data.next} cta={data.cta} /></div>
                </React.Fragment>
                
                )}
    
             
    
               
                     
           
                  
    
         
     
          
           
     
   </React.Fragment>
  );
}
