"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { Right, ScrollArrow } from './svg';


export  function ScrollTarget({ id}: any) {

  const scrollTo=(id:any)=>{
 
    const element = document.getElementById(id)
    const y = element!.getBoundingClientRect().top + window.scrollY - 62;
    window.scrollTo({top: y, behavior: 'smooth'});
   

  }


  return (
    <React.Fragment>
<div className="h-auto w-auto" onClick={()=>scrollTo(id)}>
         <ScrollArrow  className="w-[30px] h-auto" fill={"#ffffff"} />
  
</div>    </React.Fragment>
  );
}

export  function ScrollCTA({id,cta,inverted,sub,sec,filter,bot}: any) {

  const scrollTo=(id:any)=>{
 
    const element = document.getElementById(id)
    const y = (bot?element!.getBoundingClientRect().bottom:element!.getBoundingClientRect().top) + (bot?window.scrollY:window.scrollY - 62);
    window.scrollTo({top: y, behavior: 'smooth'});
   

  }


  return (
    <React.Fragment>
<div className="h-auto w-auto pointer-events-auto cursor-pointer" onClick={()=>scrollTo(id)}>
        <div className={`cta ${sub?"secondary":""} inline-block ${inverted?'inverted':''}  ${filter?'filter':''} ${sec?'secondary':''}`}><p>{cta.label}</p></div>
  
</div>    </React.Fragment>
  );
}