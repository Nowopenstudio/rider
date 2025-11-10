
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
import Gate from "./gate";



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
        <Gate data={data}/>


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


