'use client'
import { MuxVideoBG } from "./muxPlayer";
import Image from "next/image";

export function SwitchContent({work, title,ratio,cover, contain,size, audio,color,ratioImg}: any) {
  if (!work) return null

  
  if (work.vid){
    return <div className={`w-full  ${audio?'':"noControl"} ${contain?"object-contain h-full":""} ${cover?"bgMux h-full":""}`}> <MuxVideoBG playbackId={work.vid} title={title} ratio={ratio} audio={audio?audio:false} color={color}/></div>
    

    }
   
  if (work.image) return <Image alt="image" onContextMenu={(e)=>{e.preventDefault()}} height={0}  width={0} sizes={`${size?size:`100vw`}`}  src={work.image}  className={`w-full ${contain?"object-contain h-full":""} ${cover?"object-cover h-full":""}`} style={{aspectRatio:ratioImg}}/>
    
 
}

