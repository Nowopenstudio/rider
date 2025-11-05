"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import { Reveal } from '../util/reveal';
import useResize from '../util/useResize';
import { InfoB, InfoBAlt } from './svg';



export default function GalleryA({data,full}: any) {
  const ref = useRef<HTMLDivElement>(null)
  const {winX, winY, mobile} = useResize();
  const [x,setX] = useState<number>(0)
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
if(gallery.length && winX){
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

      const toggleActive = () => {
    setActive(!active)
  }






  

  return (
    <React.Fragment>
        <div className="w-full h-full">
          <Reveal styleSet={`w-full h-full relative overflow-x-hidden  hoverOn` } >
          <div className={`w-1/2 h-full z-40 left-0 absolute cursor-w-resize `} onClick={back}></div>
               <div className={`w-1/2 h-full z-40 left-1/2 absolute cursor-e-resize `} onClick={next}></div>
           
          
         <div onTransitionStart={setStart} onTransitionEnd={(curr==data.length)?(resetMin):(curr<0?resetMax:setStop)} className={`w-auto h-full flex flex-nowrap galleryFull ${mobile?'gap-4':'gap-9'} galleryScroll ${disable?'disable':''}`} ref={ref} style={{transform:`translateX(${total?(winX/2-indie[curr+2]/2-(mobile?16:36))+(+(total[curr+1]+((curr+2)*(mobile?16:36)))*(-1))+(mobile?16:36):`36`}px)`}}>
            
              {gallery.map((item:any, i:number)=>{
                return(
                  <div key={`image-${i}`}  className={` w-auto h-full  overflow-hidden galleryImage rounded-[6px] md:rounded-none origin-center flex-shrink-0 ${mobile && curr+2!==i?'dim':''}`} >
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
        </div>
        {mobile ? (
                            <div className={`mobileCredit py-2 px-4 relative`} >
                             <div className="absolute right-4 top-2 z-10"  onClick={toggleActive}> <div className="h-[16px] w-[16px]">{active?(<InfoBAlt className="w-full h-full"/>):<InfoB className="w-full h-full"/> }</div></div>
                             {data[curr+2]?(
                             <React.Fragment>
                                {data[curr+2].caption?( <div className="captions mb-2uppercase md:w-auto mb-4"><PortableText value={data[curr+2].caption} /></div>):('')}
                               {data[curr+2].credits?(  <div className="credits uppercase md:w-auto" style={{transition:`all .24s ease-in-out`,height:'100px',opacity:active?1:0,maxHeight:active?200:0}}><PortableText value={data[curr+2].credits} /></div>):('')}
                             </React.Fragment>
                             ):('')}
                             
                              
                              
                            
                                <div className="galleryMarker flex gap-[6px] w-full justify-start">
                                  {data.map((dot: any, d: number) => {
                                    return (
                                      <div key={`${data.title}-${d}`} className={`relative ${d == 0 ? 'z-10' : 'z-1'} galleryDot w-[6px] h-[6px] rounded-full ${d == 0 ? "bg-black" : "bg-darkGray"}`} style={{ transformOrigin: 'center', transform: `scale(${d == 0 ? 1.5 : 1}) translateX(${d == 0 ? (curr * 8) : (d <= curr) ? (-12) : (0)}px)` }}></div>
                                    )
                                  })}
                              
                              </div>
        
        
                            </div>
                          ) : ('')}
    </React.Fragment>
  );
}