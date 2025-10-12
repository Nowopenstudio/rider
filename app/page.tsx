
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



export default async function Home() {
  const query = await getData(`{
    'map':*[_type=='map'][0]{'map':map.asset->url, locations},
    'data': *[_type=='home'][0]{header{headlines,cta,video{"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio},gallery[]{"vid":video.asset->playbackId, "ratio":reel.asset->data.aspect_ratio,"image":image.asset->url,credits}},welcome,build{title,copy,gallery[]{"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,"image":image.asset->url}}, menu[]{title,copy,url,gallery[]{"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,"image":image.asset->url}},location{title,copy,video{credits,"vid":video.asset->playbackId,"ratio":video.asset->data.aspect_ratio,"image":image.asset->url}}, map, residency{title,copy,video{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio}}},

    }`)



  const { data, map } = query.data
  console.log(data)

  return (


    <React.Fragment>
      <div className="w-full h-[100dvh] grid grid-cols-2 sticky top-0 z-1">

        <div className="projectCover col-span-1 h-[100dvh] relative coverSwitch fadeOn ">
          <SwitchContent work={data.header.video} title={'Header Video'} ratio={data.header.video.ratio} audio={false} cover />
          <div className='z-20 center-object w-full text-white px-4'>
            <div className="w-auto mb-2"> <PortableText value={data.header.headlines[0].title} /></div>
            <div className="cta inline-block inverted"><p>{data.header.cta.label}</p></div>

          </div>
          <div className="scrollArrow absolute left-4 bottom-4"><ScrollArrow className="w-[30px] h-auto" fill={"#ffffff"} /></div>

        </div>

        <div className="projectCover col-span-1  h-[100dvh] relative coverSwitch fadeOn ">
          {data.header.gallery.length ? (<SwitchContent work={data.header.gallery[0]} title={'Header Video'} ratio={data.header.gallery[0].ratio} audio={false} cover />) : ('')}


        </div>

      </div>

      <div className="w-full  bg-offWhite px-4 z-2 relative grid grid-cols-12 gap-x-4">
        <div className='col-span-full grid grid-cols-2 py-7 border-b items-start'>
          <Reveal styleSet="uppercase"><PortableText value={data.welcome.title} /></Reveal>
          <Reveal styleSet="text-right footnote text-gray pointer-events-none"><PortableText value={data.welcome.copy} /></Reveal>
        </div>
        <div className="col-span-full flex flex-col-reverse"><Reveal styleSet=" text py-7 uppercase ml-auto mr-0 inline-block"><PortableText value={data.build.title} /></Reveal>
        </div>
        <Reveal styleSet="col-span-5 mb-22"><PortableText value={data.build.copy} /></Reveal>
        <Reveal styleSet="col-span-6 col-start-4 mb-38">
          {data.build.gallery.length ? (<SwitchContent work={data.build.gallery[0]} title={'Header Video'} ratio={data.header.gallery[0].ratio} audio={false} />) : ('')}

        </Reveal>

        {/* mini menu */}
        <div className="miniMenu grid grid-cols-2 gap-8 col-span-full mb-38">
          {data.menu ? (
            data.menu.map((item: any, i: number) => {
              return (
                <Reveal styleSet={'col-span-1 mb-8'} key={`${item.title}`} count={i * .25}>
                  <div className="aspect-video w-full bg-mux relative mb-4">
                    {item.gallery.length ? (<SwitchContent work={item.gallery[0]} title={`${item.title}`} ratio={data.header.gallery[0].ratio} audio={false} cover />) : ('')}
                  </div>
                  <div className="w-full">
                    <h3 className="text-gray uppercase py-3">{item.title}</h3>
                  </div>
                </Reveal>
              )
            })
          ) : ('')}
        </div>

        {/* Area */}
        <div className="col-span-full px-4 grid grid-cols-12 gap-4">
          <h4 className="col-span-full uppercase py-3 border-t border-b text-center mb-22">{data.location.title}</h4>
          <div className="col-span-6 col-start-4 aspect-video relative">
            <div className="absolute center-object w-1/3">
              <Image alt="image" height={0} width={0} sizes="100vw" src={data.location.video.image} className={`w-full h-auto `} />
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="col-span-full px-4 grid grid-cols-12 gap-4">
          <div className="col-span-full py-2 border-b mb-2 uppercase label font-bold"><p>{data.map.label}</p></div>
          <div className="mb-10 col-span-9 divide"><PortableText value={data.map.title} /></div>
          <Map data={map} />

        </div>

        {/* Residencies */}
        <div className="col-span-full px-4 grid grid-cols-12 gap-4">
          <div className="col-span-full py-2 border-b mb-2 uppercase label font-bold"><p>{data.residency.title}</p></div>
          <div className="mb-10 col-span-9 divide"><PortableText value={data.residency.copy} /></div>
          {data.residency.video.vid ? (
            <div className={`col-span-8 col-start-3 relative mb-10 `} style={{aspectRatio:`${data.residency.video.ratio.replace(":", " / ")}`}}>
              <SwitchContent work={data.residency.video} title={'Header Video'} ratio={data.residency.video.ratio} audio={false} cover />
            </div>
          ) : ('')}

          <div className='w-full'></div>


        </div>


        {/* end of div */}
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


