"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import { Reveal } from '../util/reveal';
import useResize from '../util/useResize';



export default function GalleryA({data,full}: any) {
  const ref = useRef<HTMLDivElement>(null)
  const {winX, winY, mobile} = useResize();
  const [x,setX] = useState<number>(0)
  const[indie,setIndie] = useState([])
  const [total,setTotal] = useState([]);
  const [disable,setDisable]=useState(false);
  const [animating,setAnim]=useState(false); 
  const [curr,setCurr]=useState(0);
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
runCount()
},[ref,gallery,winX])

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
  
   console.log(curr)
}

  const resetMin=()=>{
    setAnim(false)
    setDisable(true)
    setCurr(0)
  }

    const resetMax=()=>{
       setAnim(false)
    setDisable(true)
    setCurr(data.length-1)
    
  }

      const setStart=()=>{
    setAnim(true)
    setDisable(false)    
  }

    const setStop=()=>{
    setAnim(false)
        setDisable(false)    
    
  }




  

  return (
    <React.Fragment>
        <Reveal styleSet={`w-full h-full relative overflow-x-hidden  hoverOn` } >
        <div className={`w-1/2 h-full z-40 left-0 absolute cursor-w-resize `} onClick={back}></div>
             <div className={`w-1/2 h-full z-40 left-1/2 absolute cursor-e-resize `} onClick={next}></div>
         
        
       <div onTransitionStart={setStart} onTransitionEnd={(curr==data.length)?(resetMin):(curr<0?resetMax:setStop)} className={`w-auto h-full flex flex-nowrap galleryFull gap-9 galleryScroll ${disable?'disable':''}`} ref={ref} style={{transform:`translateX(${total?(winX/2-indie[curr+2]/2-36)+(+(total[curr+1]+((curr+2)*36))*(-1))+36:`36`}px)`}}>
          
            {gallery.map((item:any, i:number)=>{
              return(
                <div key={`image-${i}`}  className={` w-auto h-full  galleryImage origin-center flex-shrink-0`} >
                 <div className="singleMedia h-full relative w-auto">
                 
                   <div className="w-auto h-full relative"> <SwitchContent work={item} title={`${item}`} ratio={item.ratio} audio={false} height />
                   </div>
                   <div className={`creditHold justify-between flex ${curr+2==i?"onHover":''} py-2  z-2`}>
                    <div className="captions"><PortableText value={item.captions}/></div>
                    <div className="credits uppercase text-right"><PortableText value={item.credits}/></div>
                   </div>
                 </div>
                </div>
              )
            })}
       </div>
        </Reveal>
    </React.Fragment>
  );
}