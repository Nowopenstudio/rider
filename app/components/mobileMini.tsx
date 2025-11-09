"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import { Reveal } from '../util/reveal';
import useResize from '../util/useResize';
import { GalleryLeft, GalleryRight, InfoB, InfoBAlt } from './svg';
import Link from 'next/link';



export default function MobileMini({data}: any) {
  const ref = useRef<HTMLDivElement>(null)
  const {winX, winY, mobile} = useResize();
  let timer = undefined;
  const[indie,setIndie] = useState([])
  const [total,setTotal] = useState([]);
  const [disable,setDisable]=useState(false);
  const [animating,setAnim]=useState(false); 
  const [curr,setCurr]=useState(0);
    const [active,setActive] = useState(false)
  
  const gallery = [data[data.length-2],data[data.length-1],...data,data[0],data[1]]

    const runCount=()=>{
       const count:any = []
       const indie:any =[]
       Array.from(ref.current!.children).forEach((item, i) => {
    count.push(item.clientWidth +(i>0?count[i-1]:0))
    indie.push(item.clientWidth)
     });
  setTotal(count)
  setIndie(indie)
    
    }


useEffect(()=>{
if(gallery.length && winX && mobile){
  runCount()}
},[ref.current,winX,gallery.length])

const back=()=>{
  
    if(disable){
      setDisable(false)
    }
    if(curr >=0  && !animating){
    setCurr((previousCurr)=> previousCurr-1)
    }
  
  
}

const next=()=>{
     if(disable){
      setDisable(false)
    }
  if(curr<data.length && !animating){
    setCurr((previousCurr)=> previousCurr+1)
   
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
      {mobile?(
         <div className="w-full h-full">
          <Reveal styleSet={`w-full h-full relative overflow-x-hidden  hoverOn` } >
          <div className={`w-1/7 h-full z-40 left-0 absolute cursor-w-resize `} onClick={back}></div>
               <div className={`w-1/7 h-full z-40 right-0 absolute cursor-e-resize `} onClick={next}></div>
           
          
         <div onTransitionStart={setStart} onTransitionEnd={(curr==data.length)?(resetMin):(curr<0?resetMax:setStop)} className={`w-auto h-full flex flex-nowrap galleryFull gap-4 galleryScroll ${disable?'disable':''}`} ref={ref} style={{transform:`translateX(${total?(winX/2-indie[curr+2]/2-(16))+(+(total[curr+1]+((curr+2)*(16)))*(-1))+(16):`36`}px)`}}>
            
              {gallery.map((item:any, i:number)=>{
                return(
                  <div key={`image-${i}`}  className={` w-[80vw] h-auto  overflow-hidden galleryImage  origin-center flex-shrink-0 ${curr+2!==i?'dim':''}`} >
                    <Link href={item.url}>
                    <div className="aspect-[1.48/1] w-full bg-mux relative mb-4 rounded-[6px] overflow-hidden">
                      {item.gallery.length ? (<SwitchContent cullInfo work={item.gallery[0]} title={`${item.title}`}  audio={false} cover />) : ('')}
  
                       {item.gallery.length >= 2 ? (<div className="w-full h-full absolute z-2 top-0 left-0 onHover"><SwitchContent cullInfo work={item.gallery[1]} title={`${item.title}`}  audio={false} cover credits inside /></div>) : ('')}
  
  
                      
                    </div>
                    <div className="w-full md:py-4 border-t md:border-0  relative md:flex items-center justify-between box-border" style={{opacity:curr+2==i?1:0,transition:'.15s opacity ease-in-out'}}>
                      <div className="absolute cta small inline-block top-3 right-0"><p>View More</p></div>
                      <h3 className="uppercase py-4 md:py-3">{item.title}</h3>
                      <div className="menunote md:text-right onHover w-4/5"><PortableText value={item.copy}/></div>
                    </div>
                  </Link>
                  </div>
                )
              })}
         </div>
          </Reveal>
        </div>
      ):(
        <div className="w-full miniMenu grid grid-cols-2 gap-9 col-span-full mb-12.5 md:mb-39 px-4 md:px-9 overflow-x-hidden">
          {data ? (
            data.map((item: any, i: number) => {
              return (
                <Reveal styleSet={'col-span-full lg:col-span-1 mb-9 relative hoverOn'} key={`${item.title}`} count={i * .25}>
                  <Link href={item.url}>
                    <div className="aspect-[1.48/1] w-full bg-mux relative mb-4">
                      {item.gallery.length ? (<SwitchContent cullInfo work={item.gallery[0]} title={`${item.title}`}  audio={false} cover />) : ('')}
  
                       {item.gallery.length >= 2 ? (<div className="w-full h-full absolute z-2 top-0 left-0 onHover"><SwitchContent cullInfo work={item.gallery[1]} title={`${item.title}`}  audio={false} cover credits inside /></div>) : ('')}
  
  
                      
                    </div>
                    <div className="w-full md:py-4 border-t md:border-0 onHoverBorder relative md:flex items-center justify-between box-border">
                      <h3 className="uppercase py-4 md:py-3">{item.title}</h3>
                      <div className="menunote md:text-right onHover w-full md:w-1/2"><PortableText value={item.copy}/></div>
                    </div>
                  </Link>
                </Reveal>
              )
            })
          ) : ('')}
        </div>
      )}
       
      
    </React.Fragment>
  );
}