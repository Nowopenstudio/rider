
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
import { VidHead } from "../components/vidHead";
import { BuildExpand } from "../components/buildExpand";
import Bio from "./bio";



export default async function Home() {
  const query = await getData(`{
    'data': *[_type=='building'][0]{build{title,subhead,copy,hero{"image":image.asset->url,"vid":video.asset->playbackId,'ratioImg':image.asset->metadata.dimensions.aspectRatio, "ratio":video.asset->data.aspect_ratio,credits,captions},building{"image":image.asset->url,"vid":video.asset->playbackId,'ratioImg':image.asset->metadata.dimensions.aspectRatio, "ratio":video.asset->data.aspect_ratio,credits,captions},outro, gallery[]{"image":image.asset->url,"vid":video.asset->playbackId,'ratioImg':image.asset->metadata.dimensions.aspectRatio, "ratio":video.asset->data.aspect_ratio,credits,captions}},landmark{title,services,feat,cta},specs{title,spec,media{"image":image.asset->url,"vid":video.asset->playbackId,'ratioImg':image.asset->metadata.dimensions.aspectRatio, "ratio":video.asset->data.aspect_ratio,credits,captions}},devStory{label,title,intro,quote,profile{name,title,'image':image.asset->url},copy,footerLogos[]{'image':image.asset->url,url}},rise{title,copy,'image':image.asset->url,credits,captions},retail{label,title,copy,cta,intro{"image":image.asset->url,"vid":video.asset->playbackId,'ratioImg':image.asset->metadata.dimensions.aspectRatio, "ratio":video.asset->data.aspect_ratio,credits,caption},outro{"image":image.asset->url,"vid":video.asset->playbackId,'ratioImg':image.asset->metadata.dimensions.aspectRatio, "ratio":video.asset->data.aspect_ratio,credits,captions,cta,title},gallery[]{"image":image.asset->url,"vid":video.asset->playbackId,'ratioImg':image.asset->metadata.dimensions.aspectRatio, "ratio":video.asset->data.aspect_ratio,credits,captions}},cta{label,title,copy,cta,"image":image.asset->url}, next{label,url}},

    }`)



  const { data } = query.data


  return (


    <React.Fragment>
      {/* <div className="w-full h-[100dvh] grid grid-cols-2 sticky top-0 z-1">

        <div className="projectCover col-span-2 h-[100dvh] relative coverSwitch fadeOn ">
          <SwitchContent work={data.build.hero} title={'Header Video'} ratio={data.build.hero.ratio} audio={false} cover />

          

        </div>

      </div> */}
      <VidHead data={data.build.hero}/>
      <div className="w-full  bg-offWhite  sticky z-2 grid grid-cols-12 rounded-t-[12px] ">
        <div className="col-span-full mb-9 md:mb-39"> <TextBlock arrow title={data.build.title} copy={data.build.copy} subhead={data.build.subhead} top right/></div>
        <Reveal styleSet="col-span-full md:col-span-8 md:col-start-3 mb-9 md:mb-39 hoverOn ">
          {data.build.building ? (<SwitchContent  zoom credits captions work={data.build.building} title={'Header Video'} ratio={data.build.building.ratio} audio={false} />) : ('')}

        </Reveal>
        {/* Gallery */}
        <div className="col-span-12 "><div className="md:w-1/2 px-4 md:px-9"><PortableText value={data.build.outro} />
        </div>
          <div className="w-full h-auto  my-9 md:my-39"><GalleryC data={data.build.gallery} /></div>
        </div>

        {/* Specs */}
        <div className="col-span-full grid grid-cols-2 md:pb-39">

          <Reveal styleSet="col-span-full mb-9 md:mb-0 md:col-span-1 px-4 md:px-9">
            <BuildExpand title={'Building Services'} sub={data.landmark.services.title} data={data.landmark.services.points}/>
            
            {/* feat */}

             <BuildExpand title={'Building Features'} sub={data.landmark.feat.title} data={data.landmark.feat.points}/>
           

            <a href={data.landmark.cta.url} className="cta inline-block"><p>{data.landmark.cta.label}</p></a>
          </Reveal>
          <div className="col-span-full md:col-span-1 row-start-1 md:row-start-auto items-start grid grid-cols-6 pt-29">
            <Reveal styleSet={`col-span-full md:col-span-4 md:col-start-2 mb-9 md:mb-0 `}>
              <div className="w-full mb-9 hoverOn"> {data.specs.media ? (<SwitchContent zoom credits captions work={data.specs.media} title={'Building Spec'} ratio={data.specs.media.ratio} audio={false} />) : ('')}</div>
              <h3 className="mb-10 px-4 md:px-0 divide">{data.specs.title}</h3>
              <div className="specsList w-full  px-4 md:px-0">
                {data.specs.spec.map((item: any, i: number) => {
                  return (
                    <p key={`spec-${i}`} className="uppercase"><span className="text-darkGray uppercase ">{item.title} </span>{item.metric}</p>
                  )
                })}
              </div>
            </Reveal>

          </div>

        </div>

        {/* dev */}
        <div className="col-span-full md:grid grid-cols-12 bg-black p-4 md:p-9 z-2 md:sticky top-0 md:top-[74px] md:min-h-[calc(100dvh_-_74px)]">
          <Reveal styleSet="col-span-full py-2 border-b border-white uppercase label font-bold text-white"><p>{data.devStory.label}</p></Reveal>
          
          <div className="col-span-full md:col-span-6 grid grid-cols-6 items-end md:items-center">
            <div className="col-span-full text-white divide border-b md:border-none py-4">
            <PortableText value={data.devStory.title} />
          </div>
            <div className=" col-span-4 md:col-span-4 col-start-2 md:col-start-auto lg:col-span-3 xl:col-span-2">
              <div className="w-full mb-4 md:pb-9 mt-9 md:mt-14">
                {data.devStory.profile ? (<SwitchContent work={data.devStory.profile} title={'Building Spec'} audio={false} />) : ('')}
              </div>
              <div className="profile">
                <p className="label text-white uppercase mb-4">{data.devStory.profile.name}</p>
                <div className="label text-darkGray mb-9 md:mb-0"><PortableText value={data.devStory.profile.title} /></div>
              </div>
            </div>
          </div>
          <div className="col-span-full h-full md:col-span-6 grid grid-cols-6">
            <div className="col-span-full h-full xl:col-span-5 richText  text-white p2 flex items-center justify-center">
               <div className="w-full "><Bio data={data.devStory}/></div>
              </div>
          </div>
          <div className="col-span-full border-white md:border-b flex gap-4 items-end h-auto pb-4 mt-4 md:mt-0">
            {data.devStory.footerLogos.map((item: any, i: number) => {
              return (
                <div className="h-[50px] w-auto mix-blend-difference flex-shrink-0" key={`devLogo-${i}`}>
                  <Image alt="image" sizes={`150px`} width={45} height={45} src={item.image} className={`w-auto h-[50px] `} />
                </div>
              )
            })}
          </div>
        </div>

        {/* Rise */}
        <div className="col-span-12 rounded-t-[12px] bg-offWhite pt-4 md:pt-9 z-3 reliatve">
          <div className="w-full grid grid-cols-12 px-0 md:px-9">
            <div className="col-span-full md:col-span-5 mb-6.5 md:mb-39 px-4 md:px-0"><div className="mb-6.5 md:mb-18 divide"><PortableText value={data.rise.title} /></div>
              <div className="w-full"><PortableText value={data.rise.copy} /></div>
            </div>
            <Reveal styleSet="col-span-full md:col-span-6 md:col-start-4 mb-6.5 md:mb-39 hoverOn">
              {data.rise.image ? (<SwitchContent zoom captions credits work={data.rise} title={'Header Video'} audio={false} />) : ('')}

            </Reveal>

            <div className="col-span-full grid grid-cols-12 px-4 md:px-0">
              <div className="col-span-full py-2 border-b  pb-4 uppercase label font-bold"><p>{data.retail.label}</p></div>
              <div className="col-span-full divide uppercase mb-6.5 md:mb-14 py-4 md:py-9">
                <PortableText value={data.retail.title} />
              </div>
              <div className="col-span-12 md:col-span-6 mb-6.5 md:mb-14">
                <PortableText value={data.retail.copy} />
              </div>
              <a href={data.retail.cta.url} className="col-span-12"> <div className="cta inline-block"><p>{data.retail.cta.label}</p></div></a>
            </div>


          </div>


          <div className=" col-span-full pt-6.5 md:pt-13 pb-18 md:pb-39 h-auto"><GalleryC data={data.retail.gallery} /></div>
          <div className="w-full grid grid-cols-12 px-0 md:px-9">
            <Reveal styleSet="col-span-full md:col-span-6 md:col-start-4 mb-6.5 md:mb-39 hoverOn">
              {data.retail.intro ? (<SwitchContent zoom captions credits work={data.retail.intro} title={'Header Video'} audio={false} />) : ('')}
            </Reveal>
          </div>
          <div className='w-full h-[100dvh] md:h-auto md:aspect-video flex items-end md:items-center relative'>
            <div className='w-full absolute top-0 h-full left-0 z-0'>
              {data.retail.outro ? (
                <SwitchContent work={data.retail.outro} title={'Header Video'} ratio={data.retail.outro.ratio} audio={false} cover dim />
              ) : ('')}
            </div>
            <div className="w-3/4 md:w-1/4 text-white relative z-10 pb-4 md:pb-0 px-4 md:px-9">
              <div className="mb-9 fullVid"><PortableText value={data.retail.outro.title} /></div>
              <a href={`${data.retail.cta.url?data.retail.cta.url:'/'}`}><div className="cta inline-block inverted"><p>{data.retail.cta.label}</p></div></a>
            </div>
          </div>

        </div>



















        {/* CTA */}
        <div className="col-span-full z-5"> <Next next={data.next} cta={data.cta} /></div>


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


