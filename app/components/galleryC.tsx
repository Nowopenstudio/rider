"use client"
import React, { useEffect, useRef, useState } from 'react';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';



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
        <div className="w-full h-[100dvh] relative overflow-x-hidden py-39"  >

          <div className="opacity-0 flex flex-nowrap ">
            {data.map((item:any, i:number)=>{
              return(
                <div key={`image-${i}`} className='w-auto h-full flex-shrink-0'>
                 <div className="singleMedia h-full" ref={i==0?ref:undefined}>
                   
                   <div className="h-full w-auto relative"> <SwitchContent work={item} title={`${item}`} ratio={item.ratio} audio={false} contain/>
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
        
       <div className="w-full absolute h-full top-0 left-0">
            <div className="w-1/2 h-full z-40 left-0 absolute cursor-w-resize" onClick={back}></div>
             <div className="w-1/2 h-full z-40 left-1/2 absolute cursor-e-resize" onClick={next}></div>
            {data.map((item:any, i:number)=>{
              return(
                <div key={`image-${i}`} onTransitionEnd={(e)=>checkSpace(e,i)} className={`w-auto h-full absolute galleryImage origin-center py-39`} style={{left:'50%',transform:`translateX(${(i==0 && (curr==data.length-1))?`50`:`${(i==data.length-1 && curr==0)?'-150':`${((100*i)-(curr*100))-50}`}`}%)`}}>
                 <div className="singleMedia h-full relative w-auto" ref={i==0?ref:undefined}>
                    <div className="w-auto h-full z-40 left-0 absolute text-white pointer-events-none" ><h2>{i}</h2></div>
                   <div className="w-auto h-full relative"> <SwitchContent work={item} title={`${item}`} ratio={item.ratio} audio={false} height />
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
        </div>
    </React.Fragment>
  );
}