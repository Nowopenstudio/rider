'use client'
import React, { useState, useEffect } from 'react';
import { TextOn } from './misc';




export default function UseTime() {
    const [time, setTime] = useState<any>();
    const [hour, setHour] = useState<any>();
    const [min, setMin] = useState<any>();
     const [day, setDay] = useState<any>();
    let timer:any = null

    const getTime=()=>{
      clearInterval(timer)
      const newdate = new Date(Date.now())
      const options: Intl.DateTimeFormatOptions = {
         timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
  };
    const dateTimeFormat = new Intl.DateTimeFormat("en-US", options);
  
   const parts = dateTimeFormat.formatToParts(newdate);
    const partValues = parts.map((p) => p.value);
    setHour(`${partValues[0]}`)
    setMin(`${partValues[2]}`)
     setDay(`${partValues[6]}`)

    }
  
    useEffect(() => {
      clearInterval(timer)
      timer = window.setInterval(getTime, 1000)
      return () => {
        clearInterval(timer)
      }
  }, [time]);
      
    return (
      <div className="singleLine pointer-events-none h-[20px]">
        {hour && day?(
           <p className="onNorm footer navItem inline-block"><TextOn text={hour} num={.4}/><span className="blink">:</span><TextOn text={`${min}`} num={.6}/> <TextOn text={day} num={.8}/></p>
        ):('')}
     
      </div>
    )
    

    
  }


