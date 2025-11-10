
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
import GalleryC from "../components/galleryC";
import GalleryG from "../components/galleryG";
import GalleryH from "../components/galleryH";
import { VidHead } from "../components/vidHead";
import GalleryD from "../components/galleryD";
import { ScrollCTA } from "../components/scrollTarget";



export default async function Home() {
  const query = await getData(`{
    'data': *[_type=='amenities'][0]{header{title,video{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,captions}},intro{title,subhead,copy,outro,gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,captions},cta},feat{title,subhead,points[]{title},media{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,captions},gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,captions}},outro{media{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,captions}, gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,captions}},box{label,title,copy,feat{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,captions},outro{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,captions}},swing{label,title,copy,feat{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,captions}},beach{label,title,copy,gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,captions}},cta{label,title,copy,cta,'image':image.asset->url},next,access{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,captions,cta,title}},

    }`)



  const { data } = query.data
  console.log(data)

  return (


    <React.Fragment>
      {/* <div className="w-full h-[100dvh] grid grid-cols-2 sticky top-0 z-1">

        <div className="projectCover col-span-2 h-[100dvh] relative coverSwitch fadeOn ">
          <SwitchContent work={data.header.video} title={'Header Video'} ratio={data.header.video.ratio} audio={false} cover />

          <div className="scrollArrow absolute left-4 bottom-4"><ScrollArrow className="w-[30px] h-auto" fill={"#ffffff"} /></div>

        </div>

      </div> */}
      <VidHead data={data.header.video} />

      <div className="w-full  bg-offWhite  sticky z-2 grid grid-cols-12">
        <div className="col-span-full mb-9 md:mb-39">
          <TextBlock title={data.intro.title} copy={data.intro.copy} subhead={data.intro.subhead} arrowBot />
        </div>

        <div className="col-span-full px-4 md:px-9 mb-18 md:mb-39 hoverOn">
          <GalleryD data={data.intro.gallery} />
        </div>

        {/* amenities */}
        <div className={'col-span-full md:col-span-6 relative z-2 px-4 md:px-9 overflow-x-hidden'}>
          <div className="w-full font-bold uppercase"><p className="subMenu font-semibold mb-4 text-darkGray md:text-black">{data.feat.title}</p></div>
          <div className="menuText mb-9 md:mb-[42px]"><p><em>{data.feat.subhead}</em></p></div>
          <div className="listHold mb-9 md:mb-14 beorder-darkGray  border-b">
            {data.feat.points ? (
              data.feat.points.map((item: any, i: number) => {
                return (
                  <div key={`service-${i}`} className="flex hoverOn gap-x-3 w-full py-[15px] font-semibold text-darkGray border-darkGray border-t  uppercase">
                    <p className="label">{i < 9 ? '0' : ''}{i + 1}.</p>
                    <p className="label hoverRight">{item.title}</p>
                  </div>
                )
              })
            ) : ('')}
          </div>
        </div>

        <div className="col-span-full md:col-span-6 grid grid-cols-6  px-4 md:px-9 overflow-x-hidden ">
          <div className="col-span-full md:col-span-4 md:col-start-3 hoverOn">
            <div className="w-full mb-9 md:mb-46"> {data.feat.media ? (<SwitchContent noBleed captions credits work={data.feat.media} title={'Building Spec'} ratio={data.feat.media.ratio} audio={false} />) : ('')}</div>
          </div>


        </div>
        <div className="mb-18 md:mb-39 col-span-full h-auto ">
          {data.feat.gallery ? (
            <GalleryC data={data.feat.gallery} />
          ) : ('')}
        </div>

        <Reveal styleSet="col-span-full md:col-span-4 md:col-start-5 mb-9 md:mb-39 hoverOn px-4 md:px-0 overflow-x-hidden">
          {data.outro.media ? (<SwitchContent noBleed captions credits work={data.outro.media} title={'Header Video'} ratio={data.outro.media.ratio} audio={false} />) : ('')}

        </Reveal>

        <Reveal styleSet="col-span-full h-auto md:col-span-8 md:col-start-3 mb-9 md:mb-39 px-4 md:px-0 hoverOn">
          {data.outro.media ? (
            <GalleryD data={data.outro.gallery} />
          ) : ('')}

        </Reveal>

        <div className="col-span-full bg-black  grid grid-cols-12 text-white pb-4 pt-9 md:py-9 relative z-3 ">
          <div className="px-4 md:px-9 col-span-full"> <div className="col-span-full py-2 border-b  pb-4  uppercase label font-bold"><p>{data.box.label}</p></div></div>

          <div className="col-span-full mb-9 md:mb-39 ">
            <TextBlock off title={data.box.title} copy={data.box.copy} subhead={data.box.subhead} />
          </div>

          <div className="col-span-full mb-9 md:mb-39 md:px-9 hoverOn">
            <SwitchContent work={data.box.feat} title={'Header Video'} ratio={data.box.feat.ratio} audio={false} />
          </div>

          <Reveal styleSet="col-span-full md:col-span-8 md:col-start-3 px-4 md:px-0 mb-9 md:mb-39 hidden md:block hoverOn">
            {data.box.outro ? (<SwitchContent work={data.box.outro} title={'Header Video'} ratio={data.box.outro.ratio} audio={false} />) : ('')}

          </Reveal>

          <div className="px-4 md:px-9 col-span-full"> <div className="col-span-full py-2 border-b  pb-4 uppercase label font-bold"><p>{data.swing.label}</p></div></div>

          <div className="col-span-full md:col-span-6 divide md:uppercase md:mb-14 p-4 md:p-9">
            <div className="mb-9 md:mb-14 uppercase"><PortableText value={data.swing.title} /></div>
            <div className="mb-9 md:mb-39"><PortableText value={data.swing.copy} /></div>
          </div>

          <Reveal styleSet="col-span-full md:col-span-8 md:col-start-3 md:mb-28 px-4 md:px-0  hoverOn text-white">
            {data.swing.feat ? (<SwitchContent noBleed credits captions work={data.swing.feat} title={'Header Video'} ratio={data.swing.feat.ratio} audio={false} />) : ('')}

          </Reveal>


        </div>

        <div className="col-span-full  relative z-2 bg-white top-0" style={{ height: "200vh" }}>
          <div className="sticky top-0 mt-[-100vh] h-[100dvh] hoverOn">
            {data.access ? (<SwitchContent work={data.access} title={'Header Video'} ratio={data.access.ratio} audio={false} cover />) : ('')}
            <div className="w-full h-[100dvh] absolute z-3 top-0 left-0 flex items-center" style={{ backgroundColor: `rgba(0,0,0,.4)` }}>
              <div className="w-3/4 md:w-1/3 pb-4 md:pb-0 px-0 md:px-9 text-white">
                <div className="w-full mb-9 fullVid"><PortableText value={data.access.title} /></div>
                <ScrollCTA id={'intro'} cta={data.access.cta} inverted />
              </div>
            </div>
          </div>
        </div>


        <div className="col-span-full p-4 md:p-9 grid grid-cols-12 overflow-x-hidden">
          <div className="col-span-full md:col-span-7 uppercase mb-14">
            <PortableText value={data.beach.title} />
          </div>
          <div className="col-span-full md:col-span-6 md:col-start-4">
            {data.beach.gallery ? (
              <GalleryH data={data.beach.gallery} />
            ) : ('')}

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


