
import Link from "next/link";
import Image from "next/image";
import { SwitchContent } from "../util/contentSwitch";
import { MuxVideoBG } from "../util/muxPlayer";
import { getData } from "../util/sanity";
import React from "react";



import ScrollUp from "../util/misc";
import { PortableText } from "next-sanity";
import { ScrollArrow } from "../components/svg";
import { Reveal } from "../util/reveal";
import Map from "../components/Map";
import GalleryA from "../components/galleryA";
import TextBlock from "../components/textBlock";
import GalleryB from "../components/galleryB";
import Next from "../components/next";
import Locations from "./locations";
import { VidHead } from "../components/vidHead";
import { ScrollCTA } from "../components/scrollTarget";



export default async function Home() {
  const query = await getData(`{
    'map':*[_type=='map'][0]{'map':map.asset->url, locations},
    'data': *[_type=='location'][0]{header{video{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,captions}},intro{title,subhead,copy,galery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,captions},cta},locations[]{label,title,copy,media{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,captions},gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,captions}},cta{label,title,copy,'image':image.asset->url,cta},next},

    }`)



  const { data, map } = query.data
  console.log(data)

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
         <div className="col-span-12 pointer-events-none sticky top-4 right-9 pr-9 translate-y-18 h-0 z-7 flex flex-row-reverse">
                         
                          <ScrollCTA id={'map'} cta={data.intro.cta} sub />
                          </div>
        <div className="col-span-full mb-24">
            <TextBlock title={data.intro.title} copy={data.intro.copy} subhead={data.intro.subhead}  arrowBot />
        </div>

        {/* menu */}
        <div className="col-span-full flex gap-4 relative">
          <Locations data={data.locations}/>
        </div>













        {/* Map */}
        <div id={'map'} className="col-span-full grid grid-cols-12 gap-4 px-9 pt-9 relative">
          
          {map ? (
            <Map data={map} />
          ) : ('')}


        </div>




        {/* CTA */}
        


      </div>
      <div className="col-span-full relative z-10"> <Next next={data.next} cta={data.cta} /></div>
 
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


