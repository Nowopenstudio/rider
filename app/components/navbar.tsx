"use client"

import Link from 'next/link';

import React, { useState } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { Reveal } from '../util/reveal';
import { TextOn } from '../util/misc';
import useResize from '../util/useResize';
import { Logo } from './svg';
import { PortableText } from 'next-sanity';


export default function Navbar({ data, footer }: any) {
  const page = usePathname();
  const { mobile,winY } = useResize()
  const [active, setActive] = useState(false)
  const [scrolled,setScrolled] = useState(false)

  const lenis = useLenis(({scroll, dimensions }:any) => {
   
        if(!scrolled && (scroll > winY*.8 )){
           setScrolled(true)
        }else if(scroll < winY*.8){
          setScrolled(false)
        }

      
console.log(scrolled)
       
      }
    
      )
    


  const infoScroll = () => {
    if (mobile) {
      closeMenu()
    }
    const element = document.getElementById('footer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  const menuToggle = () => {
    setActive(!active)
  }


  const closeMenu = () => {
    setActive(false)
  }

  
  const scrollTo=()=>{
    setActive(false)
    const element = document.getElementById('footer')
    const y = element!.getBoundingClientRect().bottom + window.scrollY - 62;
    window.scrollTo({top: y, behavior: 'smooth'});
   

  }


  return (
    <React.Fragment>
      {mobile?(
         <div className={`navBar mobile fixed top-0 left-0 w-[100vw]  flex items-start justify-between pt-4 px-4 md:px-9  z-100 items-top`} style={{backgroundColor:active?"rgba(255,255,255,0.0)":`rgba(255,255,255,${scrolled?1.0:0.0})`}}>

           <Link className=" md:w-1/3 py-1"  href="/"><div className="relative w-full h-full flex items-center justify-center"><Logo className="px-4 h-[46px] " fill={`${scrolled && !active?'#000000':'#ffffff'}`} style={{transition:`all .25s ease-in-out`}} /></div></Link>
           <div className="flex flex-row justify-end gap-4">
            <div className=" h-[30px] rounded-[8px] p-2 flex items-center justify-center" onClick={scrollTo} style={{backgroundColor:`${scrolled && !active?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.2)"}`,opacity:active || scrolled?1:0,transition:`opacity .25s ease-in-out`}}>
              <p className={`${scrolled && !active?'text-black':'text-white'} text-center uppercase inquire font-medium`}>Inquire</p>
            </div>
             <div className="w-[47px] h-[30px] rounded-[8px] p-2" style={{backgroundColor:`${scrolled && !active?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.2)"}`}}>
              <div className="w-full h-full" >
              <div onClick={() => menuToggle()} className={`cursor-pointer  ml-auto mr-0 flex uppercase items-end flex-col justify-between mobileBar w-full h-full relative z-[1]  pointer-events-auto ${active?'active':''}`} style={{transition:`transform .25s ease-out`,transform:`translateX(${active?'3px':'0'})`}}>
                  <div className={`w-full border-b-[2px] ${scrolled && !active?'border-black':'border-white'} h-[1px] singleBar topBar`} style={{transform:`rotate(${active?'45':'0'}deg)`,transformOrigin:"22% 30%"}}></div>
                  <div className={`w-full border-b-[2px] ${scrolled && !active?'border-black':'border-white'}  h-[1px] singleBar botBar`} style={{transform:`rotate(${active?'-45':'0'}deg)`,transformOrigin:"22% 30%"}}></div>
                  
                </div>
              </div>
             </div>
           </div>
         </div>
      ):(
         <div className={`navBar fixed top-0 left-0 w-[100vw] h-[74px] flex px-9  z-100 items-top`} style={{backgroundColor:active?"rgba(255,255,255,0.0)":"rgba(255,255,255,1.0)"}}>
        <div className="uppercase  flex items-center h-full w-1/3">
          <div><p className="pr-4 text-black font-medium pointer-events-auto cursor-pointer" onClick={scrollTo} >Inquries</p></div>
          <div className={"flex"} style={{opacity:active?0:1}}>
            <div className="px-1 text-gray"><p className="langOption">en</p></div>
            <div className='px-1   text-gray'><p className="langOption ">es</p></div>
            <div className="px-1  text-gray"><p className="langOption">pt</p></div>
          </div>
          

        </div>
        <Link className=" w-1/3 py-1"  href="/"><div className="relative w-full h-full flex items-center justify-center"  style={{opacity:active?0:1}}> <Logo className="w-auto h-[50px] " fill={'#000000'} /></div></Link>
          <div className=" w-1/3 flex items-center justify-end">
            <div>
            <div onClick={() => menuToggle()} className={`cursor-pointer mix-blend-difference ml-auto mr-0 flex uppercase items-end flex-col justify-between mobileBar w-[42px] h-[16px] relative z-[1]  pointer-events-auto ${active?'active':''}`}>
                <div className={`w-full border-b-[2px] border-white  h-[1px] singleBar topBar`} style={{transform:`rotate(${active?'45':'0'}deg)`,transformOrigin:"25% 30%"}}></div>
                <div className="w-full  border-b-[2px] border-white  h-[1px] singleBar midBar" style={{maxWidth:active?0:42,transformOrigin:"100% 50%"}} ></div>
                <div className="w-full border-b-[2px] border-white  h-[1px] singleBar botBar" style={{transform:`rotate(${active?'-45':'0'}deg)`,transformOrigin:"25% 30%"}}></div>
              </div>
            </div>
          </div>
      </div>
      )}
     

      {mobile?(
          <div className={`mainMenu fixed top-0 left-0 z-90 w-[100vw] h-[100dvh] grid grid-cols-2 ${!active?'pointer-events-none':''}`} style={{opacity:active?1:0}}>
          
            <div className={`col-span-2 bg-black  mobileMenu uppercase text-white relative z-2 px-9 pt-23`}>
                                              <div className="w-auto flex flex-col">
                                                 <Link href="/" onClick={closeMenu} className="relative navItem"> <div className="cursor-pointer mb-2"><p>Home</p></div></Link>
                                                 <Link href="/building" onClick={closeMenu} className="relative navItem"> <div className="cursor-pointer mb-2"><p>Building</p></div></Link>
                                                 <Link href="/residences" onClick={closeMenu} className="relative navItem"> <div className="cursor-pointer mb-2"><p>Residences</p></div></Link>
                                                 <Link href="/amenities" onClick={closeMenu} className="relative navItem"> <div className="cursor-pointer mb-2"><p>Amenities</p></div></Link>
                                                 <Link href="/location" onClick={closeMenu} className="relative navItem"> <div className="cursor-pointer mb-2"><p>Location</p></div></Link>
                                                 <Link href="/creators" onClick={closeMenu} className="relative navItem"> <div className="cursor-pointer mb-2"><p>Creators</p></div></Link>
                                                   <Link href="team" onClick={closeMenu}className="relative navItem"> <div className="cursor-pointer mb-2"><p>team</p></div></Link>
                                                     <Link href="/cipres-living" onClick={closeMenu} className="relative navItem"> <div className="cursor-pointer mb-2"><p>CIPRÉS LIVING</p></div></Link>
                                                       <Link className="pointer-events-none navItem" href="crypto" onClick={closeMenu}> <div className="pointer-events-none cursor-pointer mb-2 opacity-20"><p>Crypto</p></div></Link>
                                                         <Link href="brokers" onClick={closeMenu} className="relative navItem"> <div className="cursor-pointer mb-2"><p>Brokers</p></div></Link>
                                              </div>
            </div>
            <div className="absolute bottom-9 left-4 md:left-9 w-full pointer-events-none z-11 grid grid-cols-2">
                                                {footer.contacts.map((item:any,i:number)=>{
                                                  return(
                                                    <div className={`${i==0?'col-span-2':''} navContact uppercase text-white mb-7 font-bold`} key={`contacts-${i}`}>
                                                      <p className='mb-1 text-darkGray'>{item.title}</p>
                                                     {i==0?(
                                                       <p className='mb-1'>{footer.contact.phone}</p>
           
                                                     ):('')}
                                                      <PortableText value={item.copy}/>
                                                    </div>
                                                  )
                                                })}
                            </div>
          
      </div>
      ):(
          <div className={`mainMenu fixed top-0 left-0 z-90 w-[100vw] h-[100dvh] grid grid-cols-2 ${!active?'pointer-events-none':''}`} style={{opacity:active?1:0}}>
            <div className={'col-span-1 h-full flex items-center justify-center'}>
              <div className={`absolute top-0 left-0 w-full h-full blur z-0 ${active?'active':''}`}></div>
              <div className="relative w-[286px] z-1" > <Logo className="w-auto h-full mx-auto my-0 " fill={'#231F20'} /></div>
              <div className="absolute bottom-9 left-9 w-full pointer-events-none z-11">
                                                {footer.contacts.map((item:any,i:number)=>{
                                                  return(
                                                    <div className="navContact uppercase text-black mb-7 font-bold" key={`contacts-${i}`}>
                                                      <p className='mb-1 text-[#b1b1b1]'>{item.title}</p>
                                                     {i==0?(
                                                       <p className='mb-1'>{footer.contact.phone}</p>
           
                                                     ):('')}
                                                      <PortableText value={item.copy}/>
                                                    </div>
                                                  )
                                                })}
                            </div>
            </div>
            <div className={`bg-black flex items-center justify-center menu uppercase text-white relative z-2`}>
                                              <div className="w-auto flex flex-col">
                                                 <Link href="/" onClick={closeMenu} className="relative navItem"> <div className="cursor-pointer mb-8"><p>Home</p></div></Link>
                                                 <Link href="/building" onClick={closeMenu} className="relative navItem"> <div className="cursor-pointer mb-8"><p>Building</p></div></Link>
                                                 <Link href="/residences" onClick={closeMenu} className="relative navItem"> <div className="cursor-pointer mb-8"><p>Residences</p></div></Link>
                                                 <Link href="/amenities" onClick={closeMenu} className="relative navItem"> <div className="cursor-pointer mb-8"><p>Amenities</p></div></Link>
                                                 <Link href="/location" onClick={closeMenu} className="relative navItem"> <div className="cursor-pointer mb-8"><p>Location</p></div></Link>
                                                 <Link href="/creators" onClick={closeMenu} className="relative navItem"> <div className="cursor-pointer mb-8"><p>Creators</p></div></Link>
                                                   <Link href="team" onClick={closeMenu}className="relative navItem"> <div className="cursor-pointer mb-8"><p>team</p></div></Link>
                                                     <Link href="/cipres-living" onClick={closeMenu} className="relative navItem"> <div className="cursor-pointer mb-8"><p>CIPRÉS LIVING</p></div></Link>
                                                       <Link className="pointer-events-none navItem" href="crypto" onClick={closeMenu}> <div className="pointer-events-none cursor-pointer mb-8 opacity-20"><p>Crypto</p></div></Link>
                                                         <Link href="brokers" onClick={closeMenu} className="relative navItem"> <div className="cursor-pointer mb-8"><p>Brokers</p></div></Link>
                                              </div>
            </div>
      </div>
      )}

    
    </React.Fragment>

  );
}