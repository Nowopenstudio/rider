"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import { Reveal } from '../util/reveal';
import useResize from '../util/useResize';
import { GalleryLeft, GalleryRight, InfoB, InfoBAlt } from './svg';
import Link from 'next/link';



export default function GalleryEMini({ data }: any) {
  const ref = useRef<HTMLDivElement>(null)
  const { winX, winY, mobile } = useResize();
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

  const resetMin = () => {
    setAnim(false)
    setDisable(true)
    setCurr(0)
  }

  const resetMax = () => {
    setAnim(false)
    setDisable(true)
    setCurr(data.length - 1)

  }

  const setStart = () => {
    setAnim(true)
    setDisable(false)
  }

  const setStop = () => {
    setAnim(false)
    setDisable(false)

  }

  const toggleActive = () => {
    setActive(!active)
  }








  return (
    <React.Fragment>

      <div className="w-full h-full">
        <Reveal styleSet={`w-full h-full relative overflow-x-hidden  hoverOn`} >
          <div className={`w-1/2 h-full z-40 left-0 absolute cursor-w-resize `} onClick={back}></div>
          <div className={`w-1/2 h-full z-40 right-0 absolute cursor-e-resize `} onClick={next}></div>


          <div onTransitionStart={setStart} onTransitionEnd={(curr == data.length) ? (resetMin) : (curr < 0 ? resetMax : setStop)} className={`w-auto h-full flex flex-nowrap items-start galleryFull gap-4 galleryScroll ${disable ? 'disable' : ''}`} ref={ref} style={{ transform: `translateX(${total? ((((curr+2)*(winX*.75)) + ((curr + 2) * (16))) * (-1)) + (16) : `16`}px)` }}>

            {gallery.map((item: any, i: number) => {
              return (
                <div className={`galleryFade w-auto h-auto py-18 flex-shrink-0`} key={`image-${i}`} >
                  <div className="w-[75vw] h-auto "> <div className="w-[75vw] h-auto flex-shrink-0"><SwitchContent work={item} title={`smart-gear`} ratio={item.ratio} audio={false} contain /></div></div>
                  <div className="w-full text-white" style={{ opacity: i == curr+2 ? 1 : 0 }}>
                    <div> {curr+1}/{data.length}</div>
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