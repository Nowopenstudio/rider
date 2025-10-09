"use client"

import Link from 'next/link';

import React, { useState } from 'react';
import { ReactLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { Reveal } from '../util/reveal';
import { TextOn } from '../util/misc';
import useResize from '../util/useResize';
import { Logo } from './svg';


export default function Navbar({ data, weather }: any) {
  const page = usePathname();
  const { mobile } = useResize()
  const [active, setActive] = useState(false)


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


  return (
    <React.Fragment>
      <div className="bg-white navBar fixed top-0 left-0 w-[100vw] h-[74px] flex px-4  z-50 items-top">
        <div className="uppercase font-bold flex items-center h-full w-1/3">
          <div><p className="pr-4" >Inquries</p></div>
          <div className="flex ">
            <div className="px-1 text-gray"><p className="langOption">en</p></div>
            <div className='px-1   text-gray'><p className="langOption ">es</p></div>
            <div className="px-1  text-gray"><p className="langOption">pt</p></div>
          </div>
          

        </div>
        <div className="relative  w-1/3 py-1"> <Logo className="w-auto h-full mx-auto my-0 " fill={'#000000'} /></div>
          <div className=" w-1/3 flex items-center justify-end">
            <div>
            <div onClick={() => menuToggle()} className={`ml-auto mr-0 flex uppercase items-center flex-col justify-between mobileBar w-[42px] h-[16px] relative z-[1]  pointer-events-auto`}>
                <div className="w-full border-b-[2px] border-black h-[1px] singleBar topBar"></div>
                <div className="w-full  border-b-[2px] border-black h-[1px] singleBar midBar"></div>
                <div className="w-full border-b-[2px] border-black h-[1px] singleBar botBar"></div>
              </div>
            </div>
          </div>
      </div>
    </React.Fragment>

  );
}