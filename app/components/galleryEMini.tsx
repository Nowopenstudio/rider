"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import { Reveal } from '../util/reveal';
import useResize from '../util/useResize';
import { GalleryLeft, GalleryRight, InfoB, InfoBAlt, Plus, PlusAlt } from './svg';
import Link from 'next/link';



export default function GalleryEMini({ data }: any) {
  const ref = useRef<HTMLDivElement>(null)
  const { winX, winY, mobile } = useResize();
  let timer = undefined;
  const [indie, setIndie] = useState([])
  const [total, setTotal] = useState([]);
  const [disable, setDisable] = useState(false);
  const [animating, setAnim] = useState(false);
  const [curr, setCurr] = useState(0);
  const [active, setActive] = useState(false)

  const gallery = [data[data.length - 2], data[data.length - 1], ...data, data[0], data[1]]

  const runCount = () => {
    const count: any = []
    const indie: any = []
    Array.from(ref.current!.children).forEach((item, i) => {
      count.push(item.clientWidth + (i > 0 ? count[i - 1] : 0))
      indie.push(item.clientWidth)
    });
    setTotal(count)
    setIndie(indie)

  }


  useEffect(() => {
    if (gallery.length && winX && mobile) {
      runCount()
    }
  }, [ref.current, winX, gallery.length])

  const back = () => {

    if (disable) {
      setDisable(false)
    }
    if (curr >= 0 && !animating) {
      setCurr((previousCurr) => previousCurr - 1)
    }


  }

  const next = () => {
    if (disable) {
      setDisable(false)
    }
    if (curr < data.length && !animating) {
      setCurr((previousCurr) => previousCurr + 1)

    }

  }

  const resetMin=()=>{
    timer=setTimeout(()=>{
        setAnim(false)
    setDisable(true)
    setCurr(0)


    },100)
   

   
  }

    const resetMax=()=>{
timer=setTimeout(()=>{
     setAnim(false)
    setDisable(true)
    setCurr(data.length-1)

    },100)

      
    
  }

      const setStart=()=>{
           clearTimeout(timer!)
    setAnim(true)
    setDisable(false)    
  }

    const setStop=()=>{
      clearTimeout(timer!)
    setAnim(false)
        setDisable(false)    
    
  }

      const toggleActive = () => {
    setActive(!active)
  }







  return (
    <React.Fragment>

      <div className="w-full h-auto">
        <Reveal styleSet={`w-full h-auto relative overflow-x-hidden  hoverOn`} >
          <div className={`w-1/2 h-full z-1 left-0 absolute cursor-w-resize `} onClick={back}></div>
          <div className={`w-1/2 h-full z-1 right-0 absolute cursor-e-resize `} onClick={next}></div>


          <div onTransitionStart={setStart} onTransitionEnd={(curr == data.length) ? (resetMin) : (curr < 0 ? resetMax : setStop)} className={`w-auto relative z-10 h-auto pointer-events-none flex flex-nowrap items-start galleryFull gap-4 galleryScroll ${disable ? 'disable' : ''}`} ref={ref} style={{ transform: `translateX(${total? ((((curr+2)*(winX*.85)) + ((curr + 2) * (16))) * (-1)) + (16) : `16`}px)` }}>

            {gallery.map((item: any, i: number) => {
              return (
                <div className={`galleryFade w-auto h-auto pb-18 flex-shrink-0`} key={`image-${i}`} >
                  <div className="w-[85vw] h-auto "> <div className="w-[85vw] h-auto flex-shrink-0"><SwitchContent work={item} title={`smart-gear`} ratio={item.ratio} audio={false} contain /></div></div>
                  <div className="w-[85vw] text-white flex flex-nowrap gap-1 items-start py-4 pointer-events-auto relative" onClick={toggleActive} style={{transition:`.2s opacity ease-in-out`, opacity: ((i == curr+2) && (curr >= 0 && curr < data.length)) ? .5 : 0 }}>
                    <div className="w-[10px] h-[10px] flex-shrink-0" style={{transformOrigin:'center',transition:'.5s all ease-in-out',transform:`rotate(${active?`45`:`0`}deg)`}}><PlusAlt className="w-full h-full"/></div>
                    <div className="creatorCaption w-full">
                      <p >{curr+1}/{data.length}</p>
                      <div className="mb-4 w-full" ><PortableText value={item.title}/></div>
                      <div className="w-full overflow-hidden richText" style={{transition:'.5s all ease-in-out',maxHeight:active?500:0}}><PortableText value={item.copy}/></div>
                      
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>



    </React.Fragment>
  );
}