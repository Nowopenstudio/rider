"use client"

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { Reveal } from '../util/reveal';
import { TextOn } from '../util/misc';
import useResize from '../util/useResize';



export default function Map({data }: any) {
  const [total,setTotal] = useState([]);
  const [cat,setCat]=useState('all');
  const [point,setPoint]=useState(0)
  const {mobile} = useResize()

  const runCount=()=>{
    const count:any = []
    data.locations.map((item:any,i:any)=>{
      count.push(item.points.length+(i>0?count[i-1]:0))
      console.log(count)

    })
    setTotal(count)
    console.log(total,"count")
  }
  useEffect(()=>{
    runCount()
  },[])

  const toggleFilter=(section:string)=>{
    if(section!==cat){
      setCat(section)
    }
    else{
      setCat('all')
    }
  }
  const showPoint=(e:any)=>{
     const key=document.getElementsByClassName('keyHold')
       if(key.length){
      Array.from(key).forEach(function(item){
        item.classList.add('dim')
    })
  }
    const curr = e.currentTarget.getAttribute('data-count')
    const el = document.querySelector(`div[data-count='${curr}']`)
    if(el){
      el.classList.add('highlight')
    }

    const id = document.getElementById(`key-${curr}`)
    if(id){
      id.classList.add('highlight')
    }
  }

  const changePoint=(e:any)=>{
    const curr = e.currentTarget.getAttribute('data-count')
    const prev = document.getElementsByClassName('chosen')
    if(prev.length){
      prev[0].classList.remove('chosen')
    }

      const prev2 = document.getElementsByClassName('chosenKey')
    if(prev2.length){
      prev2[0].classList.remove('chosenKey')
    }
  
    const el = document.querySelector(`div[data-count='${curr}']`)
    if(el){
      el.classList.add('chosen')
    }

    const id = document.getElementById(`key-${curr}`)
    if(id){
      id.classList.add('chosenKey')
    }

    
  
  }

const hidePoints=()=>{
   const key =document.getElementsByClassName('keyHold')
       if(key.length){
      Array.from(key).forEach(function(item){
        item.classList.remove('dim')
    })
  }
    const curr =document.getElementsByClassName('highlight')
    if(curr.length){
      Array.from(curr).forEach(function(item){
        item.classList.remove('highlight')
    })
  }
}


  return (
    <React.Fragment>
        {total.length?(
           <Reveal styleSet="col-span-full grid grid-cols-12 gap-x-4 items-start">
           <div className="col-span-full md:col-span-6 relative">
                    
                    {data.map ? (
                      <Image alt="image" height={0} width={0} sizes="100vw" src={data.map} className={`w-full h-auto mix-blend-multiply `} />
                    ) : ('')}

                    <div className="pointHold absolute w-full h-full top-0 left-0">
                      {data.locations.length?(
                          data.locations.map((item:any,i:number)=>{
                            return(
                              <div key={`${item.title}`} className={`w-full h-full pointHold absolute top-0 left-0 pointer-events-none`}>
                                        
                                          {item.points?(
                                            item.points.map((point:any,p:number)=>{
                                              return(
                                                <div onMouseLeave={hidePoints} onMouseEnter={(e:any)=>showPoint(e)} data-count={p+1+(i>0?total[i-1]:0)} className={`w-[30px] h-[30px] cursor-pointer pointer-events-auto text-darkGray  rounded-full flex items-center justify-center singlePoint absolute mapPoints border border-darkGray bg-offWhite label ${(cat!=="all" && cat!==point.area)?"hide":''} ${(p+1+(i>0?total[i-1]:0))==point?"chosen":''} hover:z-[900] `} key={`loc-${point.title}`} style={{left:`${point.lat}%`,top:`${point.long}%`}}>
                                                 <p>{p+1+(i>0?total[i-1]:0)}</p>
                                                </div>
                                              )
                                            })
                                          ):('')}
                                          
                                        
                              </div>
                            )
                          })
                        ):('')}
                    </div>
                  </div>
                  <div className="col-span-full md:col-span-5 md:col-end-13">
                    <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-9">
                      <div className="col-span-1 py-2">
                        <Reveal styleSet=" pointer-events-none label"><p className="uppercase mb-2 font-bold">Filter</p></Reveal>
                        <div className="flex flex-wrap lg:flex-col gap-2 md:gap-4 mb-4 items-start">
                          <div onClick={()=>toggleFilter('wynwood')} className={`${cat=="wynwood"?'active':''} cta map filter cursor-pointer inline-block`}><p>WYNWOOD</p></div>
          
                          <div onClick={()=>toggleFilter('design-district')} className={`${cat=="design-district"?'active':''} cta filter cursor-pointer inline-block`}><p>DESIGN DISTRICT</p></div>
                          <div onClick={()=>toggleFilter('midtown-miami')} className={`${cat=="midtown-miami"?'active':''} cta filter cursor-pointer inline-block`}><p>MIDTOWN MIAMI</p></div>
                          <div onClick={()=>toggleFilter('Edgewater')} className={`${cat=="Edgewater"?'active':''} cta filter cursor-pointer inline-block`}><p>EDGEWATER</p></div>
                        </div>
                      </div>
                      <div className="col-span-2 md:h-3/4 flex flex-wrap flex-col">
                        {data.locations.length?(
                          data.locations.map((item:any,i:number)=>{
                            return(
                              <div key={`${item.title}`} className="md:w-1/2 mr-4">
                                          <div className="w-full py-2   label"><p className="uppercase mb-2 font-bold">{item.title}</p>
                                          <div className='w-full keyHold'>
                                            {item.points?(
                                              item.points.map((point:any,p:number)=>{
                                                return(
                                                  <div id={`key-${p+1+(i>0?total[i-1]:0)}`} data-count={p+1+(i>0?total[i-1]:0)} onMouseLeave={hidePoints} onMouseEnter={(e:any)=>showPoint(e)} onClick={(e:any)=>changePoint(e)} className={`cursor-pointer w-full grid grid-cols-12 mapPoints font-bold keyList text-darkGray ${(cat!=="all" && cat!==point.area)?"hide":''}`} key={`${point.title}`}>
                                                    <div className='col-span-1'><p>{p+1+(i>0?total[i-1]:0)}</p></div>
                                                    <div className="col-span-11"><p>{point.title}</p></div>
                                                  </div>
                                                )
                                              })
                                            ):('')}
                                          </div>
                                          
                                          </div>
                              </div>
                            )
                          })
                        ):('')}
                      </div>
        
                    </div>
                  </div>
         </Reveal>
        ):('')}
    </React.Fragment>

  );
}