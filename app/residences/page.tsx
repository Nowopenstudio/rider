
import Image from "next/image";
import { SwitchContent } from "../util/contentSwitch";

import { getData } from "../util/sanity";
import React from "react";



import ScrollUp from "../util/misc";
import { PortableText } from "next-sanity";

import { Reveal } from "../util/reveal";

import TextBlock from "../components/textBlock";

import Next from "../components/next";
import GalleryC from "../components/galleryC";
import Floorplans from "../components/floorplans";
import GalleryD from "../components/galleryD";
import { VidHead } from "../components/vidHead";
import { ScrollCTA } from "../components/scrollTarget";
import { BuildExpand } from "../components/buildExpand";



export default async function Home() {
  const query = await getData(`{
    'data': *[_type=='residences'][0]{header{title,video{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,'ratioImg':image.asset->metadata.dimensions.aspectRatio,"mobileVid":mobileVid.asset->playbackId,"mobileRatio":mobileVid.asset->data.aspect_ratio,credits,captions}},intro{title,copy,media{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,'ratioImg':image.asset->metadata.dimensions.aspectRatio,credits,captions},cta},specs[]{title,subtitle,subHead,copy,logos[]{"image":image.asset->url,url},gallery[]{"image":image.asset->url,"vid":video.asset->playbackId,'ratioImg':image.asset->metadata.dimensions.aspectRatio, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,captions},outro{title,copy,media{"image":image.asset->url,"vid":video.asset->playbackId,'ratioImg':image.asset->metadata.dimensions.aspectRatio, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,captions},gallery[]{"image":image.asset->url,"vid":video.asset->playbackId,'ratioImg':image.asset->metadata.dimensions.aspectRatio, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,captions}}}, feats{label,title,subhead,points[]{title},media{"image":image.asset->url,"vid":video.asset->playbackId,'ratioImg':image.asset->metadata.dimensions.aspectRatio, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,captions},cta}, floorplan{label,title,subhead,copy,rooms[]{title,rooms[]{name,copy,rooms,"image":image.asset->url,cta{label,url,"file":file.asset->url,"og":file.asset->originalFilename}}},cta{label,url,"file":file.asset->url,"og":file.asset->originalFilename}}, floors{label,title,rooms[]{title,rooms[]{name,copy,"image":image.asset->url,cta{label,url,"file":file.asset->url,"og":file.asset->originalFilename}}},cta{label,url,"file":file.asset->url,"og":file.asset->originalFilename},media{"image":image.asset->url,"vid":video.asset->playbackId,'ratioImg':image.asset->metadata.dimensions.aspectRatio, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,captions}},smart{label,title,subhead,copy,gallery[]{"image":image.asset->url,"vid":video.asset->playbackId,'ratioImg':image.asset->metadata.dimensions.aspectRatio, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,captions}},cta{label,title,copy,"image":image.asset->url,cta},next},

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

      <div className="w-full  bg-offWhite relative z-2 grid grid-cols-12 rounded-t-[12px] ">
                <div className="col-span-12 pointer-events-none sticky mt-[-100dvh] md:mt-0 top-4 right-9 pr-4 md:pr-9 translate-y-16 md:translate-y-18 h-0 z-10 flex flex-row-reverse">
                 
                  <ScrollCTA id={'floors'} cta={data.intro.cta} sub />
                  </div>
        
       
        <div className="col-span-full mb-9 md:mb-39"> <TextBlock title={data.intro.title} copy={data.intro.copy} arrowBot/>


        </div>
        <Reveal styleSet="col-span-full md:col-span-6 md:col-start-4 mb-9 md:mb-39 hoverOn overflow-x-hidden">
          {data.intro.media ? (<SwitchContent captions credits work={data.intro.media} title={'Header Video'} ratio={data.intro.media.ratio} audio={false} />) : ('')}

        </Reveal>




        {/* specs */}
        {data.specs ? (
          data.specs.map((item: any, i: number) => {
            return (
              <div className="col-span-full grid grid-cols-2  overflow-x-hidden" key={`spec-${i}`}>
                <div className="grid grid-cols-2 px-4 lg:px-9 col-span-full lg:col-span-2 relative">
                  <div className="header mb-2 md:mb-5.5 col-span-full border-t pt-9"><h3 className="serif uppdercase">{item.title}</h3></div>
                  <div className="subtitle mb-9 lg:mb-21  col-span-full "><h4 className="serif uppdercase">{item.subtitle}</h4></div>
                  <div className="subhead mb-9  col-span-full serif "><p><em>{item.subHead}</em></p></div>
                  <div className="col-span-full 2xl:col-span-1 mb-9"><PortableText value={item.copy} /></div>
                  {item.logos ? (
                    <div className="col-span-2 lg:col-span-1 logo relative lg:absolute lg:top-9 z-10 lg:right-9 flex lg:flex-col lg:justify-end lg:items-end gap-4 mb-9">
                      {item.logos.map((logo: any, l: number) => {
                        return (
                          <div className="h-[70px] w-auto mix-blend-difference flex-shrink-0" key={`logo-${i}-${l}`}>
                            <Image alt="image" sizes={`150px`} width={45} height={45} src={logo.image} className={`w-auto h-[70px] `} />
                          </div>
                        )
                      })}
                    </div>
                  ) : ('')}
                </div>
                <div className="col-span-2 h-auto mb-10 lg:mb-20 hoverOn overflow-x-hidden">
                  <GalleryC data={item.gallery} />
                </div>
                {item.outro ? (
                  <div className='col-span-full xl:col-span-1 mx-4 md:px-9'>
                    <div className="subhead mb-2 md:mb-10"><PortableText value={item.outro.title} /></div>
                    <div className="mb-9"><PortableText value={item.outro.copy} /></div>
                  </div>
                ) : ('')}
                {item.outro.media ? (
                  <div className=" relative col-span-full xl:col-span-1 hoverOn">
                    <SwitchContent captions credits work={item.outro.media} title={'Header Video'} ratio={item.outro.media.ratio} audio={false} />
                  </div>
                ) : ('')}

                {item.outro.gallery ? (
                  <div className="col-span-2 h-[350px] lg:h-[66dvh] mb-20 lg:mb-39 overflow-x-hidden">
                    <GalleryC data={item.outro.gallery} />
                  </div>
                ) : ('')}
              </div>


            )
          })
        ) : ('')}





        {/* feat */}
        <div className="col-span-full grid grid-cols-2 md:pb-39 overflow-x-hidden">
          <div className="col-span-2 md:col-span-1 px-4 md:px-9 mb-9 md:mb-0 ">
            <BuildExpand title={'RESIDENTIAL FEATURES'} sub={data.feats.subhead} data={data.feats.points}/>
            
            <a href={`${data.feats.cta.url?data.feats.cta.url:'/'}`} className="cta inline-block "><p>{data.feats.cta.label}</p></a>
          </div>
          <div className="col-span-2 md:col-span-1 grid grid-cols-6 px-4 md:px-9 hoverOn">
            <div className="col-span-full md:col-span-4 md:col-end-7"><div className="w-full md:mb-9"> {data.feats.media ? (<SwitchContent captions credits work={data.feats.media} title={'Building Spec'} ratio={data.feats.media.ratio} audio={false} />) : ('')}</div></div>
          </div>

        </div>

        {/* floors */}
        <div id={'floors'} className="col-span-12  bg-offWhite md:py-9 z-3 relative">
          <div className="w-full grid grid-cols-12 px-4 md:px-9  md:mb-9">

            <div className="col-span-full py-2 border-b  pb-4 uppercase label font-bold"><p>{data.floorplan.label}</p></div>
            <div className="col-span-full md:col-span-6 divide uppercase mb-4 md:mb-14 row-start-2 pt-9">
              <PortableText value={data.floorplan.title} />
            </div>
            <div className="col-span-full md:col-span-6 mb-9 md:mb-30 row-start-3">
              <PortableText value={data.floorplan.copy} />
            </div>
          </div>
        </div>

         <Floorplans line={true} data={data.floorplan.rooms} filter cta={data.floorplan.cta}/>


         <div className="col-span-12  bg-offWhite py-9 z-3 relatve  md:mb-14 overflow-x-hidden">
              <div className="w-full uppercase px-4 md:px-9 divide">
                <PortableText value={data.floors.title} />
                
              </div>
         </div>
         <Floorplans data={data.floors.rooms} cta={data.floors.cta}/>
         <Reveal styleSet="col-span-full md:col-span-6 md:col-start-4 mb-9 md:mb-39 hoverOn">
          {data.floors.media ? (<SwitchContent credits captions work={data.floors.media} title={'Header Video'} audio={false} />) : ('')}

        </Reveal>


        <div className='col-span-full grid grid-cols-12 px-4 md:px-9 overflow-x-hidden'>
          <div className="col-span-full py-2 border-b  pb-4 mb-4 md:mb-9 uppercase label font-bold"><p>{data.smart.label}</p></div>
          <div className="col-span-full divide uppercase mb-6.5 md:mb-14">
            <PortableText value={data.smart.title} />
          </div>
          <div className="col-span-full md:col-span-6 mb-6.5 md:mb-14">
            <PortableText value={data.smart.subhead} />
          </div>
          <div className="col-span-full md:col-span-6 mb-9 md:mb-14 row-start-4">
            <PortableText value={data.smart.copy} />
          </div>
          <div className="col-span-full md:col-span-4 md:col-start-5 mt-0 md:mt-14 overflow-x-hidden">
            <GalleryD data={data.smart.gallery}/>
          </div>
        </div>


    


      {/* CTA */}
      <div className="col-span-full"> <Next next={data.next} cta={data.cta} /></div>


    </div>
 
          <ScrollUp />
    </React.Fragment >

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


