
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



export default async function Home() {
  const query = await getData(`{
    'data': *[_type=='building'][0]{build{title,subhead,copy,hero{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,captions},building{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,captions},outro, gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,captions}},landmark{title,services,feat,cta},specs{title,spec,media{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,captions}},devStory{label,title,quote,profile{name,title,'image':image.asset->url},copy,footerLogos[]{'image':image.asset->url,url}},rise{title,copy,'image':image.asset->url,credits,captions},retail{label,title,copy,cta,intro{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption},outro{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,captions,cta,title},gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,captions}},cta{label,title,copy,cta,"image":image.asset->url}, next{label,url}},

    }`)



  const { data } = query.data
  console.log(data)

  return (


    <React.Fragment>
      {/* <div className="w-full h-[100dvh] grid grid-cols-2 sticky top-0 z-1">

        <div className="projectCover col-span-2 h-[100dvh] relative coverSwitch fadeOn ">
          <SwitchContent work={data.build.hero} title={'Header Video'} ratio={data.build.hero.ratio} audio={false} cover />

          

        </div>

      </div> */}
      <VidHead data={data.build.hero}/>
      <div className="w-full  bg-offWhite  sticky z-2 grid grid-cols-12 rounded-t-[12px]">
        <div className="col-span-full mb-39"> <TextBlock arrow title={data.build.title} copy={data.build.copy} subhead={data.build.subhead} top right/></div>
        <Reveal styleSet="col-span-8 col-start-3 mb-39 hoverOn ">
          {data.build.building ? (<SwitchContent  credits captions work={data.build.building} title={'Header Video'} ratio={data.build.building.ratio} audio={false} />) : ('')}

        </Reveal>
        {/* Gallery */}
        <div className="col-span-12 "><div className="w-1/2 px-9"><PortableText value={data.build.outro} />
        </div>
          <GalleryC data={data.build.gallery} />
        </div>

        {/* Specs */}
        <div className="col-span-full grid grid-cols-2 pb-39">

          <Reveal styleSet="col-span-1 px-9 ">
            <div className="w-full font-bold uppercase"><p className="subMenu font-medium mb-4">Building Services</p></div>
            <div className="menuText mb-[42px]"><p><em>{data.landmark.services.title}</em></p></div>
            <div className="listHold mb-14 border-darkGray border-b">
              {data.landmark.services.points.map((item: any, i: number) => {
                return (
                  <div key={`service-${i}`} className="hoverOn flex gap-x-3 w-full py-[15px] font-semibold text-darkGray border-darkGray border-t uppercase">
                    <p className="label">{i < 9 ? '0' : ''}{i + 1}.</p>
                    <p className="label hoverRight">{item.title}</p>
                  </div>
                )
              })}
            </div>
            {/* feat */}
            <div className="w-full font-bold uppercase"><p className="subMenu font-medium mb-4">Building Features</p></div>
            <div className="menuText mb-[42px]"><p><em>{data.landmark.feat.title}</em></p></div>
            <div className="listHold mb-14 border-darkGray  border-b">
              {data.landmark.feat.points.map((item: any, i: number) => {
                return (
                  <div key={`service-${i}`} className="flex gap-x-3 w-full py-[15px] font-semibold text-darkGray border-darkGray border-t  uppercase hoverOn">
                    <p className="label">{i < 9 ? '0' : ''}{i + 1}.</p>
                    <p className="label hoverRight">{item.title}</p>
                  </div>
                )
              })}
            </div>
            <a href={data.landmark.cta.url} className="cta inline-block"><p>{data.landmark.cta.label}</p></a>
          </Reveal>
          <div className="col-span-1 grid grid-cols-6 pt-29">
            <Reveal styleSet="col-span-4 col-start-2">
              <div className="w-full mb-9 hoverOn"> {data.specs.media ? (<SwitchContent credits captions work={data.specs.media} title={'Building Spec'} ratio={data.specs.media.ratio} audio={false} />) : ('')}</div>
              <h3 className="mb-10">{data.specs.title}</h3>
              <div className="specsList w-full">
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
        <div className="col-span-full grid grid-cols-12 bg-black p-9 items-center z-2 sticky top-[74px] h-[calc(100dvh_-_74px)]">
          <Reveal styleSet="col-span-full py-2 border-b border-white pb-4 mb-4 uppercase label font-bold text-white"><p>{data.devStory.label}</p></Reveal>
          <div className="col-span-full text-white divide">
            <PortableText value={data.devStory.title} />
          </div>
          <div className="col-span-6 grid grid-cols-6">
            <div className="col-span-2">
              <div className="w-full pb-9 pt-27">
                {data.devStory.profile ? (<SwitchContent work={data.devStory.profile} title={'Building Spec'} audio={false} />) : ('')}
              </div>
              <div className="profile">
                <p className="label text-white uppercase mb-4">{data.devStory.profile.name}</p>
                <div className="label  text-darkGray"><PortableText value={data.devStory.profile.title} /></div>

              </div>
            </div>
          </div>
          <div className="col-span-6 grid grid-cols-6">
            <div className="col-span-4 col-start-2 text-white p2"><PortableText value={data.devStory.quote} /></div>
          </div>
          <div className="col-span-full border-white border-b flex mt-21 gap-4 items-end h-auto pb-4">
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
        <div className="col-span-12 rounded-t-[12px] bg-offWhite pt-9 z-3 reliatve">
          <div className="w-full grid grid-cols-12 px-9">
            <div className="col-span-5 mb-39"><div className="mb-18 divide"><PortableText value={data.rise.title} /></div>
              <div className="w-full"><PortableText value={data.rise.copy} /></div>
            </div>
            <Reveal styleSet="col-span-6 col-start-4 mb-39 hoverOn">
              {data.rise.image ? (<SwitchContent captions credits work={data.rise} title={'Header Video'} audio={false} />) : ('')}

            </Reveal>

            <div className="col-span-full py-2 border-b  pb-4 uppercase label font-bold"><p>{data.retail.label}</p></div>
            <div className="col-span-full divide uppercase mb-14 py-9">
              <PortableText value={data.retail.title} />
            </div>
            <div className="col-span-6 mb-14">
              <PortableText value={data.retail.copy} />
            </div>
            <a href={data.retail.cta.url} className="col-span-12"> <div className="cta inline-block"><p>{data.retail.cta.label}</p></div></a>






          </div>


          <div className="mb-39 col-span-full"><GalleryC data={data.retail.gallery} /></div>
          <div className="w-full grid grid-cols-12 px-9">
            <Reveal styleSet="col-span-6 col-start-4 mb-39 hoverOn">
              {data.retail.intro ? (<SwitchContent captions credits work={data.retail.intro} title={'Header Video'} audio={false} />) : ('')}
            </Reveal>
          </div>
          <div className='w-full aspect-video flex items-center relative'>
            <div className='w-full absolute top-0 h-full left-0 z-0'>
              {data.retail.outro ? (
                <SwitchContent work={data.retail.outro} title={'Header Video'} ratio={data.retail.outro.ratio} audio={false} cover dim />
              ) : ('')}
            </div>
            <div className="w-1/4 text-white relative z-10 px-9">
              <div className="mb-9"><PortableText value={data.retail.outro.title} /></div>
              <div className="cta inline-block inverted"><p>{data.retail.cta.label}</p></div>
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


