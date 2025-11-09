'use client'
import Link from "next/link";
import Image from "next/image";
import { SwitchContent } from "./util/contentSwitch";
import { MuxVideoBG } from "./util/muxPlayer";
import { getData } from "./util/sanity";
import React, { useEffect, useState } from "react";



import ScrollUp from "./util/misc";
import { PortableText } from "next-sanity";
import { ScrollArrow } from "./components/svg";
import { Reveal } from "./util/reveal";
import Map from "./components/Map";
import GalleryA from "./components/galleryA";
import TextBlock from "./components/textBlock";
import GalleryB from "./components/galleryB";
import { MediaGrow } from "./components/mediaGrow";
import GalleryI from "./components/galleryI";
import Next from "./components/next";
import {ScrollTarget, ScrollCTA} from "./components/scrollTarget";
import Main from "./main";




export default function Loader({words}:any) {
  const [out,setOut] = useState(false);
const [loaded,setLoad] = useState(false);

const fadeOut=()=>{
  if(!out){
    setOut(true)
  }else{
    setLoad(true)
  }
}

const loadContent=()=>{
  const curr = document.getElementById('body')
  if(curr){
    curr.style.height='auto'
  }
  const anim = document.getElementById('videoHeader')
  if(anim){
    anim.classList.add('headerAnim')}
}

useEffect(()=>{
  const curr = document.getElementsByClassName('headerAnim')
  if(curr.length){
    curr[0].classList.remove('headerAnim')}
},[])
  return (


    <React.Fragment>
      <div className={`z-[105] fixed w-full h-[100dvh] bg-black px-4 py-9 md:py-9 md:px-9 ${out?'fadeOut':''} ${loaded?'pointer-events-none':''} loader`} style={{opacity:loaded?0:1}} onTransitionEnd={loadContent}>
        {words.map((item:any,i:number)=>{
          return(
            <div key={`loading-${item}`}>
              <h2 onAnimationEnd={i==words.length-1?fadeOut:undefined} className="text-white uppercase loaderText mb-4 loader loaderIn" style={{animationDelay:`${.2*i+(out?.5:1)}s`}}>{item}</h2>
            </div>
          )
        })}

        <h3 className="text-[rgba(255,255,255,.15)] absolute bottom-9 left-4 md:left-9 uppercase fadeOn">loading</h3>
        
      </div>


    
          <ScrollUp />
    </React.Fragment>

  );
}