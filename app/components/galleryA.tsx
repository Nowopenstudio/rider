"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import { Reveal } from '../util/reveal';



export default function GalleryA({data}: any) {
  const ref = useRef<HTMLDivElement>(null)
  const [x,setX] = useState<number>(0)
const [total,setTotal] = useState([]);
  const [curr,setCurr]=useState(0);

useEffect(()=>{
  if(ref.current){
    setX(ref.current!.clientHeight);
  }
},[ref])

const back=()=>{
  if(curr!=0){
    setCurr((previousCurr)=> previousCurr-1)
  }
  else{setCurr(data.length-1)}
   console.log(curr)
}

const next=()=>{
  if(curr<data.length-1){
    setCurr((previousCurr)=> previousCurr+1)
   
  }
  else{setCurr(0)}
   console.log(curr)
}

  const checkSpace=(e:any,i:number)=>{
    if((i-curr) < -2){
      e.transition="none";

    }else if((curr==data.length-2)&&(curr-i>2)){
          
    }
  }

  

  return (
    <React.Fragment>
        <div className="w-full relative overflow-x-hidden"  >

          <div className="opacity-0 flex flex-nowrap pb-7">
            {data.map((item:any, i:number)=>{
              return(
                <div key={`image-${i}`} className='w-[47.5%] h-auto flex-shrink-0'>
                 <div className="singleMedia w-full" ref={i==0?ref:undefined}>
                   
                   <div className="w-full h-auto relative"> <SwitchContent work={item} title={`${item}`} ratio={item.ratio} audio={false} contain/>
                   </div>
                   <div className={`creditHold justify-between flex ${curr==i?"show":""} py-1`}>
                    <div className="caption"><PortableText value={item.caption}/></div>
                    <div className="credits uppercase"><PortableText value={item.credits}/></div>
                   </div>
                 </div>
                </div>
              )
            })}
          </div>
        
       <Reveal styleSet="w-full absolute h-full top-0 left-0 hoverOn">
            <div className="w-1/2 h-full z-40 left-0 absolute cursor-w-resize" onClick={back}></div>
             <div className="w-1/2 h-full z-40 left-1/2 absolute cursor-e-resize" onClick={next}></div>
            {data.map((item:any, i:number)=>{
              return(
                <div key={`image-${i}`} onTransitionEnd={(e)=>checkSpace(e,i)} className={`w-[47.5%] h-auto absolute galleryImage origin-center`} style={{left:'50%',transform:`translateX(${(i==0 && (curr==data.length-1))?`50`:`${(i==data.length-1 && curr==0)?'-150':`${((100*i)-(curr*100))-50}`}`}%) scale(${i==curr?"1.0":".75"})`}}>
                 <div className="singleMedia w-full" ref={i==0?ref:undefined}>
                    {/* <div className="w-full h-full z-40 left-0 absolute text-white pointer-events-none" ><h2>{i}</h2></div> */}
                   <div className="w-full h-auto relative"> <SwitchContent work={item} title={`${item}`} ratio={item.ratio} audio={false} contain/>
                   </div>
                   <div className={`creditHold justify-between flex items-center  ${curr==i?"onHover":""} py-2`}>
                    <div className="captions"><PortableText value={item.caption}/></div>
                    <div className="credits uppercase"><PortableText value={item.credits}/></div>
                   </div>
                 </div>
                </div>
              )
            })}
       </Reveal>
        </div>
    </React.Fragment>
  );
}