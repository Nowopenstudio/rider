
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

import TextBlock from "../components/textBlock";

import Next from "../components/next";
import GalleryC from "../components/galleryC";



export default async function Home() {
  const query = await getData(`{
    'data': *[_type=='building'][0]{build{title,subhead,copy,hero{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption},building{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption},outro, gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},landmark{title,services,feat,cta},specs{spec,media{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits}},devStory{label,title,quote,profile{name,title,'image':image.asset->url},copy,footerlogos[]{'image':image.asset->url,url}},rise{title,copy,'image':image.asset->url},retail{lable,title,copy,cta,intro,outro,gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},cta{label,title,copy,cta,"image":image.asset->url}, next{label,url}},

    }`)



  const { data } = query.data
  console.log(data)

  return (


    <React.Fragment>
      <div className="w-full h-[100dvh] grid grid-cols-2 sticky top-0 z-1">

        <div className="projectCover col-span-2 h-[100dvh] relative coverSwitch fadeOn ">
          <SwitchContent work={data.build.hero} title={'Header Video'} ratio={data.build.hero.ratio} audio={false} cover />

          <div className="scrollArrow absolute left-4 bottom-4"><ScrollArrow className="w-[30px] h-auto" fill={"#ffffff"} /></div>

        </div>

      </div>

      <div className="w-full  bg-offWhite  sticky z-2 grid grid-cols-12">
        <div className="col-span-full mb-39"> <TextBlock title={data.build.title} copy={data.build.copy} subhead={data.build.subhead} /></div>
        <Reveal styleSet="col-span-6 col-start-4 mb-39 ">
          {data.build.building ? (<SwitchContent work={data.build.building} title={'Header Video'} ratio={data.build.building.ratio} audio={false} />) : ('')}

        </Reveal>
        <div className="col-span-12 "><div className="w-1/2 px-9"><PortableText value={data.build.outro} />
        </div>
            <GalleryC data={data.build.gallery} />
        </div>



















        {/* CTA */}
        <div className="col-span-full"> <Next next={data.next} cta={data.cta} /></div>


      </div>

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


