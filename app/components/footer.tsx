"use client"


import React, { FormEvent, useState } from 'react';
import { usePathname } from 'next/navigation';
import useResize from '../util/useResize';
import { SwitchContent } from '../util/contentSwitch';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import { sendContact } from '../util/sanity';


export default function Footer({ data }: any) {
  const page = usePathname();
  const { mobile, winX } = useResize()
  const [rooms, setRooms] = useState(0)
  const [broker, setBroker] = useState(0)

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)


  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const formData = new FormData(e.currentTarget)
    const newEmail: any = {}

    newEmail.firstName = formData.get('firstName')
    newEmail.lastName = formData.get('lastName')
    newEmail.email = 'info@theriderresidences.com'
    newEmail.subject = 'New Inquiry: The Rider Residences'
    newEmail.message = formData.get('comments')
    newEmail.phone = formData.get('phone')
    newEmail.sender = formData.get('email')
    newEmail.rooms = data.form.rooms.options[rooms].label
    newEmail.broker = data.form.broker.options[broker].label

    console.log(newEmail)
    sendContact(newEmail)
    setSuccess(true)

    const curr = document.getElementById('body')
    if (curr) {
      curr.classList.add('lightBox')
    }

  }

  const changeRooms = (i: any) => {
    setRooms(i)
  }

  const changeBroker = (i: any) => {
    setBroker(i)
  }

  const zoomOff = () => {
    console.log(success, isLoading, 'loading')
    const curr = document.getElementById('body')

    if (curr) {
      curr.classList.remove('lightBox')
    }
    setSuccess(false)
    setIsLoading(false)



  }

  const toggleActive=()=>{
    setActive(!active)
  }



  return (
    <React.Fragment>
      <div id={'footer'} className="w-full xl:h-[200dvh] z-1 xl:pt-0] xl:mt-[-100dvh] bg-black xl:bg-offWhite footer ">
        <div className={`footerForm  xl:sticky w-full  xl:mt-[0] xl:h-[100dvh] top-0 left-0 xl:grid grid-cols-2`}>
          <div className="downloadBar absolute top-[74px] px-4 md:px-9 w-full z-20 bg-black h-[60px] items-center justify-between hidden xl:flex">
            <div className="uppercase text-white"><p>{data.contact.phone}</p></div>
            <div className="uppercase text-darkGray"><p>{data.contact.cta.label}</p></div>
          </div>
          <div className="form col-span-2 xl:col-span-1 xl:flex items-center justify-center xl:relative text-white xl:text-black pt-39 xl:pt-0 h-[200dvh] xl:h-full mt-[-100dvh] xl:mt-0">
            <div className="sticky top-0 xl:relative w-full xl:w-3/4 flex-col flex gap-y-10 pb-9 xl:pb-18 px-4 xl:px-0 pt-50 xl:pt-0">
              <h3 className="uppercase ">{data.form.headline}</h3>
              <div><PortableText value={data.form.copy} /></div>
              <form onSubmit={submitForm} className="form w-full px-4 xl:px-0">
                <div className="w-full grid grid-cols-1 xl:grid-cols-2 xl:gap-x-4 gap-y-0">
                  {data.form.input.map((item: any, i: number) => {
                    return (
                      <div key={`input-${item.label}`} className="col-span-full xl:col-span-1 mb-[10px]">
                        <label className="pb-1">{item.label} *</label>
                        <input className="border w-full mt-1" name={item.value} required></input >
                      </div>
                    )
                  })}
                  <div className="col-span-2 mb-[10px] md:mb-8">
                    <label className="w-full mb-1">Comments</label>
                    <textarea className="border resize-none h-[20px] w-full mt-1" name="comments"></textarea>
                  </div>
                  <div className="col-span-full">
                    <div className="w-full grid grid-cols-8 gap-x-9 pb-7">
                      <div className="col-span-full md:col-span-2 label mb-1 "><p>{data.form.rooms.label}</p></div>

                      {mobile ? (
                        <select id="dropdown" name="rooms" className="border col-span-full mt-1">

                          {
                            data.form.rooms.options.map((item: any, i: number) => {
                              return (
                                <option className="text-black" key={`rooms-${i}`} value={i} >{item.label}</option>
                              )
                            })}

                        </select>
                      ) : (
                        <div className="flex gap-9 col-span-6">
                          {data.form.rooms.options.map((item: any, i: number) => {
                            return (
                              <div onClick={() => changeRooms(i)} className="flex cursor-pointer items-center gap-1 col-span-1" key={`rooms-${i}`}>
                                <div className={`border w-[10px] h-[10px] rounded-full flex-shrink ${i == rooms ? "bg-white lg:bg-black" : ""}`}></div>
                                <div className="label text-nowrap">{item.label}</div>
                              </div>
                            )
                          })}
                        </div>
                      )}

                    </div>
                    <div className="w-full grid grid-cols-8 gap-x-9 pb-7 justify-between">
                      <div className="col-span-full md:col-span-2 label"><p>{data.form.broker.label}</p></div>
                      {data.form.broker.options.map((item: any, i: number) => {
                        return (
                          <div onClick={() => changeBroker(i)} className="cursor-pointer flex items-center gap-2 col-span-2 xl:col-span-1" key={`rooms-${i}`}>
                            <div className={`border w-[10px] h-[10px] rounded-full flex-shrink-0 ${i == broker ? 'bg-white lg:bg-black' : ''}`}></div>
                            <div className="label">{item.label}</div>
                          </div>
                        )
                      })}

                      <button type="submit" className={`cta  row-start-auto mt-0 lg:mt-9 lg:row-start-2 inline-block col-end-9 md:col-end-auto col-span-4 md:col-span-2 text-center ${winX < 1300 ? 'invertedFooter' : ''}`}><p className="w-full">SUBMIT</p></button>
                      <div className="disclaimerText text-darkGray md:pt-10 col-span-full md:col-span-5 legal pt-6"><PortableText value={data.form.disclaimers} /></div>
                    </div>
                    <div className="w-full grid grid-cols-8 gap-x-9 items-center">

                    </div>
                  </div>

                </div>
              </form>

            </div>



          </div>
          <div className="col-span-2 xl:col-span-1 h-full relative pt-9 xl:pt-0">
            <div className="w-full h-full hidden xl:block"><SwitchContent work={data.footerVid} title={`amenities`} ratio={data.footerVid.ratio} audio={false} cover /></div>
            <div className="xl:absolute xl:top-0 left-0 w-full xl:h-full pointer-events-none z-10 hidden xl:block" style={{ backgroundColor: `rgba(0,0,0,.6)` }}></div>
            <div className="xl:absolute xl:top-0 left-0 w-full xl:h-full pointer-events-none z-11 xl:flex justify-between items-center px-4 md:px-9 xl:px-11">
              {winX < 1300 ? (
                <div className="flex-shrink-0 col-span-1 font-bold footerContact uppercase text-white mb-9 xl:mb-0">
                  <p className="uppercase mb-2 xl:mb-9 text-darkGray xl:text-white">Call Us</p>
                  <p>+1 {data.contact.phone}</p>
                </div>
              ) : ('')}

              {data.contacts.map((item: any, i: number) => {
                return (
                  <div className="flex-shrink-0 col-span-1 font-bold footerContact uppercase text-white mb-9 xl:mb-0" key={`contacts-${i}`}>
                    <p className="uppercase mb-2 xl:mb-9 text-darkGray xl:text-white">{item.title}</p>
                    <PortableText value={item.copy} />
                  </div>
                )
              })}
            </div>

          </div>


          <div className="xl:absolute bottom-0 left-1/2 w-full xl:w-1/2 px-4 md:px-9 z-20">
            <div className='w-full py-9 flex flex-wrap gap-x-12 gap-y-3 xl:gap-x-0 xl:justify-between items-center'>

              {data.footerLogos.map((item: any, i: number) => {
                return (
                  <div className="h-[40px] flex-shrink-0 w-auto mix-blend-difference" key={`footLogo-${i}`}>
                    <Image alt="image" sizes={`150px`} width={45} height={45} src={item.image} className={`w-auto h-full `} />
                  </div>
                )
              })}




            </div>
          </div>
          <div className="xl:absolute bottom-0 left-0 w-full xl:w-1/2 px-4 md:px-9 relative text-white xl:text-black">
            <div className='w-full py-9 border-0 xl:border-t flex justify-start xl:justify-between items-center flex-wrap xl:flex-nowrap'>
              <div className={`${mobile ? 'copyright' : ''} disclaim flex flex-row-reverse  w-full xl:w-auto xl:flex-row gap-0 xl:gap-9 footnote items-center policies xl:bg-offWhite`}>
                <div onClick={toggleActive} className="cursor-n-resize h-[22px] w-[22px] mix-blend-difference flex-shrink-0">
                  <Image alt="image" sizes={`150px`} width={45} height={45} src={data.disclaim.logo} className={`w-full h-full `} />
                </div>
                <div onClick={toggleActive}><p className="cursor-n-resize text-nowrap mr-9 xl:mr-0">Disclaimers ↓</p></div>
                <div className="flex flex-wrap w-full">
                  <div className="pr-2 xl:px-2 border-r "><p>Privacy Policy</p></div>
                  <div className="px-2 border-r"><p>Terms of Use</p></div>
                  <div className="px-2 border-r xl:border-0"><p>Faqs</p></div>
                </div>
              </div>
              <div className="copyright w-full md:w-auto flex-shrink-0"><PortableText value={data.disclaim.copyright} /></div>
            </div>
          </div>
        </div>

      </div>
      <div className={`fixed w-full h-full top-0 left-0 bg-black ${!isLoading ? "pointer-events-none" : ''}`} style={{ transition: 'opacity .5s ease-in-out', opacity: isLoading ? (success ? 1 : .75) : 0, }}>
        {success ? (
          <React.Fragment>
            <div onClick={() => zoomOff()} className={`cursor-pointer flex uppercase items-end flex-col justify-between w-[42px] h-[16px] absolute top-9 right-9 z-[100]   `}>
              <div className="w-full border-b-[2px] border-white h-[1px] singleBar topBar" style={{ transform: `rotate(45deg)`, transformOrigin: "25% 30%" }}></div>

              <div className="w-full border-b-[2px] border-white h-[1px] singleBar botBar" style={{ transform: `rotate(-45deg)`, transformOrigin: "25% 30%" }}></div>
            </div>

            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-between text-white py-9">
              <div className="px-4 md:px-9"><PortableText value={data.sucessVid.top} /></div>
              <div className="flex justify-center w-full items-center py-9">
                <div className="w-full lg:w-2/3">
                  <SwitchContent work={data.sucessVid} title={`amenities`} ratio={data.footerVid.ratio} audio={true} contain />
                </div>
              </div>
              <div className="px-4 md:px-9 "><PortableText value={data.sucessVid.bottom} /></div>
            </div>
          </React.Fragment>
        ) : ('')}
      </div>
      <div onClick={toggleActive} className={`cursor-s-resize w-[100vw] xl:w-[50vw] fixed bottom-0 left-0 bg-white px-9 pt-9 pb-10.5 copyright uppercase z-100`} style={{transition:`transform .5s  cubic-bezier(0.165, 0.84, 0.44, 1)`,transform:`translateY(${active?'0':'100%'})`}}>
        <div className="flex flex-wrap w-full gap-5 items-start">
         <div className="flex gap-3 w-full border-t border-darkGray pt-2">
            <div className="h-[22px] w-[22px] mix-blend-difference flex-shrink-0 ">
              <Image alt="image" sizes={`150px`} width={45} height={45} src={data.disclaim.logo} className={`w-full h-full `} />
            </div>
            <div className='' ><PortableText value={data.disclaim.disclaimers[0].copy}/></div>
         </div>
          {data.disclaim.disclaimers.map((item:any,i:number)=>{
              return(
               <React.Fragment key={`disclaim-${i}}`}> 
               {i==0?(''):(<div className='w-full border-t border-darkGray pt-2' ><PortableText value={item.copy}/></div>)}</React.Fragment>
              )
          })}
        </div>
      </div>
    </React.Fragment>

  );
}