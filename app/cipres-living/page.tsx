
import Link from "next/link";
import Image from "next/image";
import { SwitchContent } from "../util/contentSwitch";
import { MuxVideoBG } from "../util/muxPlayer";
import { getData } from "../util/sanity";
import React from "react";



import ScrollUp from "../util/misc";
import { PortableText } from "next-sanity";
import { Right, ScrollArrow } from "../components/svg";
import { Reveal } from "../util/reveal";
import Map from "../components/Map";
import GalleryA from "../components/galleryA";
import TextBlock from "../components/textBlock";
import GalleryB from "../components/galleryB";
import Next from "../components/next";
import GalleryC from "../components/galleryC";
import { VidHead } from "../components/vidHead";



export default async function Home() {
  const query = await getData(`{
    'data': *[_type=='cipres'][0]{header{video{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption}},intro{title,subtitle,subhead,copy,left{top{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption},bottom{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption}}, right{benefits[]{title},media{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption}}}, edge{title,copy,benefits[]{title},profile{name,title,media{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption}}}, residences{title,subtitle,copy,media{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption},gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption}},services{title,subtitle,media{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption},benefits[]{title,subhead}}, tech{title,subtitle,copy,media{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption},screen{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption}},setup{title,media{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption},benefits[]{title},gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption}},guest{title,subtitle,copy,gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption}}, potential{title,subtitle,copy,media{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption}},schedule{title,copy,contact,media{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption}},cta{label,title,copy,cta{label,url},"image":image.asset->url},next},

    }`)



  const { data } = query.data


  return (


    <React.Fragment>
      {/* <div className="w-full h-[100dvh] grid grid-cols-2 sticky top-0 z-1">

        <div className="projectCover col-span-2 h-[100dvh] relative coverSwitch fadeOn ">
          <SwitchContent work={data.header.video} title={'Header Video'} ratio={data.header.video.ratio} audio={false} cover />

          <div className="scrollArrow absolute left-4 bottom-4"><ScrollArrow className="w-[30px] h-auto" fill={"#ffffff"} /></div>

        </div>

      </div> */}
          <VidHead data={data.header.video}/>

      <div className="w-full  bg-offWhite  sticky z-2 grid grid-cols-12 ">
        <div className="col-span-full mb-9 md:mb-12"> <TextBlock title={data.intro.title} /></div>
        <div className="col-span-full md:col-span-6 divide mb-9 md:mb-24 px-4 md:px-9"><PortableText value={data.intro.subtitle} /></div>
        <div className="col-span-12 px-4 md:px-9 grid grid-cols-2 gap-4 md:gap-9 items-start 9 mb-md:mb-45">
          <div className="col-span-full md:col-span-1 cipres"><PortableText value={data.intro.subhead} /></div>
          <div className="col-span-full md:col-span-1 grid grid-cols-6 mb-9 md:mb-45"><div className="col-span-full md:col-span-5"><PortableText value={data.intro.copy} /></div></div>
          <div className="col-span-full md:col-span-1 grid grid-cols-6"><div className="col-span-full md:col-span-5 mb-9 md:mb-48"><SwitchContent work={data.intro.left.top} title={'Header Video'} audio={false} cover /></div>
            <div className="col-span-4 md:col-span-3 col-start-2"><SwitchContent work={data.intro.left.bottom} title={'Header Video'} audio={false} cover /></div></div>
          <div className="col-span-full md:col-span-1 grid grid-cols-6 gap-9">
            <div className="benifits border-t col-span-full mb-9 md:mb-25">
              {data.intro.right.benefits ? (
                data.intro.right.benefits.map((item: any, i: number) => {
                  return (

                    <div className="w-full flex items-center gap-3 py-5 border-b" key={`intro-benefits-${i}`}>
                      <div className="w-[28px] h-auto"><Right className="w-full h-auto" /></div>
                      <div className="font-semibold uppercase"><h5>{item.title}</h5></div>
                    </div>
                  )
                })
              ) : ('')}

            </div>
            <div className="col-span-full md:col-span-3 mb-9 md:mb-48"><SwitchContent work={data.intro.right.media} title={'Header Video'} audio={false} cover /></div>
          </div>
        </div>

        {/* edge */}
        <div className="col-span-full mb-9 md:mb-81.5 overflow-x-hidden">
          <div className="w-full grid grid-cols-2 px-4 md:px-9 gap-9">
            <div className="col-span-full divide py-4 md:py-12 border-t uppercase md:mb-37.5"><PortableText value={data.edge.title} /></div>
            <div className="col-span-full md:col-span-1 grid grid-cols-9">
              <div className="col-span-full md:col-span-5 md:col-start-3"><div className="w-full"><SwitchContent work={data.edge.profile.media} title={'Header Video'} audio={false} /></div>
                <div className="w-full uppercase py-4.5">
                  <p className="mb-2 label">{data.edge.profile.name}</p>
                  <div className="text-darkGray label"><PortableText value={data.edge.profile.title}/></div>
                </div>
              </div>
            </div>
            <div className="col-span-full md:col-span-1 grid grid-cols-6">
              <div className="col-span-full mb-9 md:mb-31.5"><PortableText value={data.edge.copy} /></div>
              <div className="benifits border-t col-span-full mb-9 md:mb-25">
                {data.edge.benefits ? (
                  data.edge.benefits.map((item: any, i: number) => {
                    return (

                      <div className="w-full flex items-center gap-3 py-5 border-b" key={`intro-benefits-${i}`}>
                        <div className="w-[28px] h-auto"><Right className="w-full h-auto" /></div>
                        <div className="font-semibold uppercase"><h5>{item.title}</h5></div>
                      </div>
                    )
                  })
                ) : ('')}

              </div>
            </div>
          </div>

        </div>

        {/* Residences */}
        <div className="col-span-full mb-9 md:mb-81.5 overflow-x-hidden">
          <div className="w-full grid grid-cols-2 px-4  md:px-9 gap-x-9 items-center">
            <div className="col-span-full divide pt-4 md:pt-12 border-t uppercase mb-9 md:mb-34"><PortableText value={data.residences.title} /></div>
            <div className="col-span-full divide uppercase mb-9 md:mb-37.5"><PortableText value={data.residences.subtitle} /></div>
            <div className="col-span-full md:col-span-1 grid grid-cols-6">
              <div className="col-span-full md:col-span-5 mb-9 md:mb-0"><PortableText value={data.residences.copy} /></div>
            </div>
            <div className="col-span-full md:col-span-1 grid grid-cols-8">
              <div className="col-span-full md:col-span-4 md:col-start-3 mb-9 md:mb-37.5"><div className="w-full"><SwitchContent work={data.residences.media} title={'Header Video'} audio={false} /></div>
              </div>
            </div>

          </div>
          <div className="w-full h-[350px] md:h-[66dvh]">
            <GalleryC data={data.residences.gallery} />
          </div>

        </div>

        {/* services */}
        <div className="col-span-full mb-9 md:mb-46 overflow-x-hidden">
          <div className="w-full grid grid-cols-12 px-4 md:px-9 gap-x-4 md:gap-x-9 items-center">
            <div className="col-span-full divide pt-9 md:pt-12 border-t uppercase mb-9 md:mb-34"><PortableText value={data.services.title} /></div>
                <div className="col-span-full md:col-span-4 md:col-start-5 mb-9 md:mb-27.5"><SwitchContent work={data.services.media} title={'Header Video'} audio={false} /></div>
            <div className="col-span-full divide uppercase mb-9 md:mb-12"><PortableText value={data.services.subtitle} /></div>
            
            
          </div>
               <div className="w-full px-4 md:px-9">
                  {data.services.benefits ? (
                    data.services.benefits.map((item: any, i: number) => {
                      return (
  
                        <div className="w-full flex items-top gap-3 py-5 border-b" key={`intro-benefits-${i}`}>
                          <div className="w-[28px] h-auto"><Right className="w-full h-auto pt-2" /></div>
                          <div><div className="font-semibold uppercase mb-5.5"><h5>{item.title}</h5></div>
                          <div className="font-semibold  text-darkGray"><PortableText value={item.subhead}/></div>
                          </div>
                        </div>
                      )
                    })
                  ) : ('')}
  
               </div>
        </div>


        {/* tech */}
        <div className="col-span-full mb-9 md:mb-81.5 overflow-x-hidden">
          <div className="w-full grid grid-cols-2 px-4 md:px-9 gap-9 items-center">
            <div className="col-span-full divide py-4 md:py-12 md:border-t uppercase mb-4 md:mb-37.5"><PortableText value={data.tech.title} /></div>
            <div className="col-span-full md:col-span-1 grid grid-cols-9">
              <div className="col-span-full md:col-span-5 md:col-start-3"><div className="w-full"><SwitchContent work={data.tech.media} title={'Header Video'} audio={false} /></div>
                
              </div>
            </div>
            <div className="col-span-full md:col-span-1 grid grid-cols-6">
              <div className="col-span-full mb-9 uppercase divide"><PortableText value={data.tech.subtitle} /></div>
              <div className="col-span-full "><PortableText value={data.tech.copy} /></div>
              
            </div>
            
          </div> 
          <div className="grid grid-cols-12 px-4 md:px-9 mt-9 md:mt-35">
             <div className="col-span-full md:col-span-8 md:col-start-3"><SwitchContent work={data.tech.screen} title={'Header Video'} audio={false} /></div></div>          

        </div> 

        
         {/* services */}
        <div className="col-span-full mb-9 md:mb-46 overflow-x-hidden">
          <div className="w-full grid grid-cols-12 px-4 md:px-9 gap-x-9 items-center">
            <div className="col-span-full divide pt-12 border-t uppercase mb-9 md:mb-34"><PortableText value={data.setup.title} /></div>
                <div className="col-span-full md:col-span-8 md:col-start-3 mb-9 md:mb-27.5"><SwitchContent work={data.setup.media} title={'Header Video'} audio={false} /></div>
            
          </div>
               <div className="w-full px-4 md:px-9 mb-9 md:mb-23.5">
                  {data.setup.benefits ? (
                    data.setup.benefits.map((item: any, i: number) => {
                      return (
  
                        <div className="w-full flex items-top gap-3 py-5 border-b" key={`intro-benefits-${i}`}>
                          <div className="w-[28px] h-auto"><Right className="w-full h-auto pt-2" /></div>
                          <div>
                          <div className="font-semibold uppercase"><PortableText value={item.title}/></div>
                          </div>
                        </div>
                      )
                    })
                  ) : ('')}
  
               </div>
               <div className="w-full grid grid-cols-12 gap-9">
                <div className="col-span-full md:col-span-4 grid grid-cols-3 gap-9 px-9">
                  {data.setup.gallery.map((item:any,i:number)=>{
                    return(
                      <div key={`logo-${i}`} className="h-[30px]">
                        <Image alt="image" sizes={`150px`} width={45} height={45} src={item.image} className={`w-auto h-[30px] `} />
                      </div>
                    )
                  })}
                </div>
               </div>
        </div>


            {/* Guest */}
        <div className="col-span-full mb-9 md:mb-81.5 overflow-x-hidden">
          <div className="w-full grid grid-cols-2 px-4 md:px-9 gap-x-4 md:gap-x-9 items-center">
            <div className="col-span-full divide pt-12 border-t uppercase mb-9 md:mb-34"><PortableText value={data.guest.title} /></div>
            <div className="grid grid-cols-6 col-span-full md:col-span-1 mb-9 md:mb-23.5">
              <div className="col-span-full md:col-span-5"><PortableText value={data.residences.copy} /></div>
            </div>
            <div className="col-span-full divide uppercase mb-9 md:mb-37.5"><PortableText value={data.guest.subtitle} /></div>
            

          </div>
          <div className="w-full h-[350px] md:h-[66dvh]">
            <GalleryC data={data.guest.gallery} />
          </div>

        </div>

           {/* Potential */}
        <div className="col-span-full mb-9 md:mb-34.25 px-4 md:px-9 overflow-x-hidden">
          <div className="w-full grid grid-cols-2 gap-x-9 items-center border-t">
             
            <div className="col-span-full md:col-span-1">
             <div className="col-span-full divide pt-12 uppercase mb-9 md:mb-34"><PortableText value={data.potential.title} /></div>
              <div className="col-span-full md:col-span-1 grid grid-cols-6 w-full mb-9 md:mb-23.5">
                <div className="col-span-full md:col-span-5"><PortableText value={data.potential.copy} /></div>
              </div>
              <div className="w-full divide uppercase mb-9 md:mb-37.5"><PortableText value={data.potential.subtitle} /></div>
            </div>
            
            <div className="col-span-full md:col-span-1 grid grid-cols-9">
              <div className="col-span-full md:col-span-4 md:col-start-3"><div className="w-full"><SwitchContent work={data.potential.media} title={'Header Video'} audio={false} /></div>
                
              </div>
            </div>

          </div>

        </div>
        
        {/* contact  */}
        <div className="bg-black p-4 md:p-9 col-span-full text-white overflow-x-hidden">
         <div className="w-full grid grid-cols-2 border-t py-9 md:py-23.5 ">
          <div className="col-span-full md:col-span-1">
             <div className="grid grid-cols-9">
              <div className="col-span-full md:col-span-4 md:col-start-3"><div className="w-full"><SwitchContent work={data.schedule.media} title={'Header Video'} audio={false} /></div>
                
              </div>
            </div>
          </div>
          <div className="col-span-full md:col-span-1 md:flex flex-col justify-between h-auto md:h-full cipres">
           <div className="mb-9 md:mb-0"> <PortableText value={data.schedule.title}/></div>
           <div className='md:w-1/2 mb-9 md:mb-0'> <PortableText value={data.schedule.copy}/></div>
           <div> <PortableText value={data.schedule.contact}/></div>
            </div>
          </div>
        </div>















        {/* CTA */}
        <div className="col-span-full"> <Next next={data.next} cta={data.cta} /></div>


      </div>

      <ScrollUp />
    </React.Fragment>

  );
}




export async function generateMetadata() {
  const query = await getData(`{
    'data':*[_type=='settings'][0]{meta{title,description,keywords,"image":image.asset->url}}
 }`)
  const { data } = query.data
  return {
    title: `${data.meta.title}`,
    keywords: `${data.meta.keywords}`,
    description: `${data.meta.description}`,
    openGraph: {
      images: data.meta.image
    }
  };
}


