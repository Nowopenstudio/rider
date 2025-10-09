
import Link from "next/link";
import { SwitchContent } from "./util/contentSwitch";
import { MuxVideoBG } from "./util/muxPlayer";
import { getData } from "./util/sanity";
import React from "react";


import ScrollUp from "./util/misc";
import { PortableText } from "next-sanity";
import { ScrollArrow } from "./components/svg";
import { Reveal } from "./util/reveal";



export default async function Home() {
  const query = await getData(`{
    'data': *[_type=='home'][0]{header{headlines,cta,video{"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio},gallery[]{"vid":video.asset->playbackId, "ratio":reel.asset->data.aspect_ratio,"image":image.asset->url,credits}},welcome,build{title,copy,gallery[]{"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,"image":image.asset->url}}}
    }`)



  const { data } = query.data
  console.log(data)

  return (


    <React.Fragment>
      <div className="w-full h-[100dvh] grid grid-cols-2 sticky top-0 z-1">

        <div className="projectCover col-span-1 h-[100dvh] relative coverSwitch fadeOn ">
          <SwitchContent work={data.header.video} title={'Header Video'} ratio={data.header.video.ratio} audio={false} cover />
          <div className='z-20 center-object w-full text-white px-4'>
            <div className="w-auto mb-2"> <PortableText value={data.header.headlines[0].title} /></div>
            <div className="cta inline-block"><p>{data.header.cta.label}</p></div>

          </div>
          <div className="scrollArrow absolute left-4 bottom-4"><ScrollArrow className="w-[30px] h-auto" fill={"#ffffff"} /></div>

        </div>

        <div className="projectCover col-span-1  h-[100dvh] relative coverSwitch fadeOn ">
          {data.header.gallery.length ? (<SwitchContent work={data.header.gallery[0]} title={'Header Video'} ratio={data.header.gallery[0].ratio} audio={false} cover />) : ('')}


        </div>

      </div>

      <div className="w-full  bg-white px-4 z-2 relative grid grid-cols-12 gap-x-4">
        <div className='col-span-full grid grid-cols-2 py-7 border-b items-start'>
          <Reveal styleSet="uppercase"><PortableText value={data.welcome.title} /></Reveal>
          <div className="text-right footnote text-gray"><PortableText value={data.welcome.copy} /></div>
        </div>
        <div className="col-span-full flex flex-col-reverse"><div className=" text py-7 uppercase ml-auto mr-0 inline-block"><PortableText value={data.build.title} /></div>
        </div>
        <div className="col-span-5 mb-22"><PortableText value={data.build.copy}/></div>
        <div className="col-span-6 col-start-4 mb-38">
              {data.build.gallery.length ? (<SwitchContent work={data.build.gallery[0]} title={'Header Video'} ratio={data.header.gallery[0].ratio} audio={false} />) : ('')}
        </div>

      </div>
      <div className="w-full  grid grid-cols-2  bottom-0 z-3 bg-black">

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


