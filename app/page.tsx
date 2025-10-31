
import Link from "next/link";
import Image from "next/image";
import { SwitchContent } from "./util/contentSwitch";
import { MuxVideoBG } from "./util/muxPlayer";
import { getData } from "./util/sanity";
import React from "react";



import ScrollUp from "./util/misc";
import { PortableText } from "next-sanity";
import { ScrollArrow } from "./components/svg";
import { Reveal } from "./util/reveal";
import Map from "./components/Map";
import GalleryA from "./components/galleryA";
import TextBlock from "./components/textBlock";
import GalleryB from "./components/galleryB";
import { MediaGrow } from "./components/mediaGrow";
import GalleryI from "./components/galleryI";
import Next from "./components/next";
import {ScrollTarget, ScrollCTA} from "./components/scrollTarget";




export default async function Home() {
  const query = await getData(`{
    'map':*[_type=='map'][0]{'map':map.asset->url, locations},
    'data': *[_type=='home'][0]{header{headlines,cta,video{"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio},gallery[]{"vid":video.asset->playbackId, "ratio":reel.asset->data.aspect_ratio,"image":image.asset->url,credits}},welcome,build{title,copy,gallery[]{"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,"image":image.asset->url,caption,credits}}, menu[]{title,copy,url,gallery[]{"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,"image":image.asset->url,credits}},location{title,copy,video{credits,"vid":video.asset->playbackId,"ratio":video.asset->data.aspect_ratio,"image":image.asset->url}}, map, residency{title,copy,cta,video{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits}, gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,caption,credits}}, interiors{title,headline, subhead,copy,features[]{title,copy,url,gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits}}, outro{title, copy,cta,video{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits}}}, amenities{title,headline,copy,cta,gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},gallery{title,headline,contacts,cta,gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}}, cta{label,title,copy,cta,"image":image.asset->url}, next{label,url}},

    }`)



  const { data, map } = query.data
  console.log(data)

  return (


    <React.Fragment>
      <div className="w-full h-[100dvh] grid grid-cols-2 sticky top-0 z-1">

        <div className="projectCover col-span-1 h-[100dvh] relative coverSwitch fadeOn ">
          <SwitchContent work={data.header.video} title={'Header Video'} ratio={data.header.video.ratio} audio={false} cover />
          <div className='z-20 center-object w-full text-white px-9'>
            <div className="w-auto mb-9"> <PortableText value={data.header.headlines[0].title} /></div>
            
           <ScrollCTA id={'intro'} cta={data.header.cta} inverted />

          </div>
          <div className="scrollArrow absolute left-4 bottom-4"><ScrollTarget id={'intro'}/></div>

        </div>

        <div className="projectCover col-span-1  h-[100dvh] relative coverSwitch fadeOn">
          {data.header.gallery.length ? (<SwitchContent work={data.header.gallery[0]} title={'Header Video'} ratio={data.header.gallery[0].ratio} audio={false} cover />) : ('')}


        </div>

      </div>

      <div id={'intro'} className="w-full  bg-offWhite relative z-2 grid grid-cols-12 rounded-t-[12px]">
        <div className="col-span-12 text-right footnote text-gray pointer-events-none sticky top-18 right-9 pr-9 translate-y-9 h-0 z-2"><PortableText value={data.welcome.copy} /></div>
       <div className="col-span-full"> <TextBlock off title={data.welcome.title} footnote={data.welcome.copy} copy={data.build.copy} subhead={data.build.title}/></div>
        
    
        <Reveal styleSet="col-span-6 col-start-4 mb-76 mt-39 relative hoverOn">
          {data.build.gallery.length ? (<SwitchContent caption credits work={data.build.gallery[0]} title={'Header Video'} ratio={data.header.gallery[0].ratio} audio={false} />) : ('')}

        </Reveal>

        {/* mini menu */}
        <div className="miniMenu grid grid-cols-2 gap-9 col-span-full mb-39 px-9">
          {data.menu ? (
            data.menu.map((item: any, i: number) => {
              return (
                <Reveal styleSet={'col-span-1 mb-9 relative hoverOn'} key={`${item.title}`} count={i * .25}>
                  <Link href={item.url}>
                    <div className="aspect-video w-full bg-mux relative mb-4">
                      {item.gallery.length ? (<SwitchContent work={item.gallery[0]} title={`${item.title}`} ratio={data.header.gallery[0].ratio} audio={false} cover />) : ('')}
  
                       {item.gallery.length >= 2 ? (<div className="w-full h-full absolute z-2 top-0 left-0 onHover"><SwitchContent work={item.gallery[1]} title={`${item.title}`}  audio={false} cover credits inside /></div>) : ('')}
  
  
                      
                    </div>
                    <div className="w-full py-4 onHoverBorder relative flex items-center justify-between">
                      <h3 className="uppercase py-3">{item.title}</h3>
                      <div className="menunote text-right onHover"><PortableText value={item.copy}/></div>
                    </div>
                  </Link>
                </Reveal>
              )
            })
          ) : ('')}
        </div>

        

      {/* Residencies */}
        <div className="col-span-full gap-4">
          <Reveal styleSet="w-full px-9 grid grid-cols-12">
            <div className="col-span-full py-2 border-b  uppercase label font-bold"><p>{data.residency.title}</p></div>
            <div className="mb-10 col-span-full divide py-9"><PortableText value={data.residency.copy} /></div>
           <div className="col-span-5">  <Link href={data.residency.cta.url}> <div className="cta inline-block mb-10"><p>{data.residency.cta.label}</p></div></Link></div>
          

          </Reveal>

                  {data.residency.gallery ? (
          <div className='col-span-full overflow-x-hidden'>
            <GalleryA data={data.residency.gallery} />
          </div>
        ) : ('')}

         <div className="w-full grid grid-cols-12 px-9 hoverOn mb-39">
            {data.residency.video.vid ? (
                <MediaGrow data={data.residency.video} size={.568}/>
              ) : ('')}
         </div>


        </div>





      
      </div>

      {/* design */}
      <div className="w-full bg-black py-9 relative z-3 grid grid-cols-12 text-white pb-22 ">
        <Reveal styleSet='col-span-full px-9'><div className="w-full py-2 border-b uppercase label font-bold"><p>{data.interiors.title}</p></div></Reveal>
        <Reveal styleSet="col-span-full mb-39">
          <TextBlock title={data.interiors.headline.copy} copy={data.interiors.copy} subhead={data.interiors.subhead} off/>
        </Reveal>
       
        <Reveal styleSet="deisngHold col-span-full grid grid-cols-12">
          <div className="col-span-6 col-start-4 mb-10">
            {data.interiors.features ? (
              data.interiors.features.map((item: any, i: number) => {
                return (
                  <Reveal styleSet={`w-full mb-10 grid grid-cols-9 items-start`} key={`${i}-designs`}>
                    <div className="relative col-span-full"><GalleryB data={item}/></div>
                  </Reveal>
                )
              })
            ) : ('')}
          </div>
         
        </Reveal>

      </div>
      <div className="col-span-full  relative z-2 bg-white top-0" style={{height:"200vh"}}>
        <div className="sticky top-0 mt-[-100vh] h-[100dvh]">
          {data.interiors.outro.video ? (<SwitchContent work={data.interiors.outro.video} title={'Header Video'} ratio={data.interiors.outro.video.ratio} audio={false} cover/>) : ('')}
          <div className="w-full h-[100dvh] absolute z-3 top-0 left-0 flex items-center" style={{backgroundColor:`rgba(0,0,0,.4)`}}>
              <div className="w-1/3 px-9 text-white">
                <div className="w-full mb-9"><PortableText value={data.interiors.outro.title}/></div>
                <ScrollCTA id={'intro'} cta={data.interiors.outro.cta} inverted />
              </div>
          </div>
        </div>
      </div>

      {/* Area */}
        <div className="col-span-full  grid grid-cols-12 gap-4 px-9 relative z-2 bg-offWhite py-14">
          <Reveal styleSet='col-span-full uppercase py-3 border-t border-b text-center mb-42'><h2 className='w-full serif'>{data.location.title}</h2></Reveal>
          <Reveal styleSet="col-span-6 col-start-4 aspect-video relative">
            <div className="absolute center-object w-1/3">
              <Image alt="image" height={0} width={0} sizes="100vw" src={data.location.video.image} className={`w-full h-auto `} />
            </div>
          </Reveal>
        </div>

        
        {/* Map */}
        <div className="col-span-full grid grid-cols-12 gap-4 px-9 relative z-4 bg-offWhite">
          <Reveal styleSet="col-span-full py-2 border-b mb-4 uppercase label font-bold"><p>{data.map.label}</p></Reveal>
          <Reveal styleSet="mb-10 col-span-8 divide"><PortableText value={data.map.title} /></Reveal>
          {map ? (
            <Map data={map} />
          ) : ('')}


        </div>

        
       

      {/* amenities */}
      <div className="w-full relative z-5 bg-offWhite pt-4 ">
        <div className="w-full grid grid-cols-12 px-9 mb-10 ">
          <div className="col-span-full py-2 border-b  uppercase label font-bold"><p>{data.amenities.title}</p></div>
          <div className=" col-span-5 mb-10 py-9">
            <div className="mb-6 uppercase divide"> <PortableText value={data.amenities.headline} /></div>
            <div className="mb-6"><PortableText value={data.amenities.copy} /></div>
           <Link href={data.amenities.cta.url}> <div className="cta inline-block "><p>{data.amenities.cta.label}</p></div></Link>
          </div>



        </div>
        <div className="w-full galleryHold mb-39">
                  {data.amenities.gallery ? (
          <div className='col-span-full overflow-x-hidden'>
            <GalleryA data={data.amenities.gallery} />
          </div>
        ) : ('')}
        </div>
      


        {/* Gallery */}
        <div className="w-full relative z-5 bg-offWhite pt-4 grid grid-cols-12">
          <div className="col-span-full grid grid-cols-12 px-9 mb-10">
            <div className="col-span-full py-2 border-b  uppercase label font-bold"><p>{data.gallery.title}</p></div>
            <div className=" col-span-full mb-10 py-9">
              <div className="mb-12.5 uppercase divide"> <PortableText value={data.gallery.headline} /></div>
              <div className="mb-6 grid grid-cols-6 gap-4">
                {data.gallery.contacts.map((item: any, i: number) => {
                  return (
                    <div className='col-span-1' key={`contact-${i}`}><PortableText value={item.copy} /></div>
                  )
                })}

              </div>
              <div className="cta inline-block "><p>{data.gallery.cta.label}</p></div>
            </div>



          </div>
          <div className="galleryHold col-span-10 col-start-2 mb-42">
            {data.gallery.gallery ? (
              <GalleryI data={data.gallery.gallery}/>
                )
              
             : ('')}
          </div>


        </div>
        {/* CTA */}
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


