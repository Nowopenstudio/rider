
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



export default async function Home() {
  const query = await getData(`{
    'data': *[_type=='residences'][0]{header{title,video{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},intro{title,copy,media{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption},cta},specs[]{title,subtitle,subhead,copy,logos[]{"image":image.asset->url,url},gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption},outro{title,copy,media{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption},gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}}}, feats{label,title,subhead,points[]{title},media{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption},cta}, floorplan{label,title,subhead,copy,rooms[]{title,rooms[]{name,copy,"image":image.asset->url,cta}},cta}, floors{label,title,rooms[]{title,rooms[]{name,copy,"image":image.asset->url,cta}},cta,media{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},smart{label,title,subhead,copy,gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},cta{label,title,copy,"image":image.asset->url,cta},next},

    }`)



  const { data } = query.data
  console.log(data)

  return (


    <React.Fragment>
      <div className="w-full h-[100dvh] grid grid-cols-2 sticky top-0 z-1">

        <div className="projectCover col-span-2 h-[100dvh] relative coverSwitch fadeOn ">
          <SwitchContent work={data.header.video} title={'Header Video'} ratio={data.header.video.ratio} audio={false} cover />

          <div className="scrollArrow absolute left-4 bottom-4"><ScrollArrow className="w-[30px] h-auto" fill={"#ffffff"} /></div>

        </div>

      </div>

      <div className="w-full  bg-offWhite relative z-2 grid grid-cols-12">
        <div className="col-span-full mb-39"> <TextBlock title={data.intro.title} copy={data.intro.copy} cta={data.intro.cta} />


        </div>
        <Reveal styleSet="col-span-6 col-start-4 mb-39 ">
          {data.intro.media ? (<SwitchContent work={data.intro.media} title={'Header Video'} ratio={data.intro.media.ratio} audio={false} />) : ('')}

        </Reveal>




        {/* specs */}
        {data.specs ? (
          data.specs.map((item: any, i: number) => {
            return (
              <div className="col-span-full grid grid-cols-2 mb-39" key={`spec-${i}`}>
                <div className="grid grid-cols-2 px-9 col-span-2 relative">
                  <div className="header mb-7 col-span-full border-t pt-9"><h3 className="serif uppdercase">{item.title}</h3></div>
                  <div className="subtitle mb-18"><h4 className="serif uppdercase">{item.subtitle}</h4></div>
                  <div className="subhead mb-10"><p><em>{item.subHead}</em></p></div>
                  <div className="mb-9"><PortableText value={item.copy} /></div>
                  {item.logos ? (
                    <div className="logo absolute top-9 z-10 right-9 flex flex-col justify-end items-end gap-4">
                      {item.logos.map((logo: any, l: number) => {
                        return (
                          <div className="h-[45px] w-auto mix-blend-difference flex-shrink-0" key={`logo-${i}-${l}`}>
                            <Image alt="image" sizes={`150px`} width={45} height={45} src={logo.image} className={`w-auto h-[45px] `} />
                          </div>
                        )
                      })}
                    </div>
                  ) : ('')}
                </div>
                <div className="col-span-2">
                  <GalleryC data={item.gallery} />
                </div>
                {item.outro ? (
                  <div className='col-span-1 px-9'>
                    <div className="subhead mb-10"><PortableText value={item.outro.title} /></div>
                    <div className="mb-9"><PortableText value={item.outro.copy} /></div>
                  </div>
                ) : ('')}
                {item.outro.media ? (
                  <div className=" relative col-span-1">
                    <SwitchContent work={item.outro.media} title={'Header Video'} ratio={item.outro.media.ratio} audio={false} />
                  </div>
                ) : ('')}

                {item.outro.gallery ? (
                  <div className="col-span-2">
                    <GalleryC data={item.outro.gallery} />
                  </div>
                ) : ('')}
              </div>


            )
          })
        ) : ('')}





        {/* feat */}
        <div className="col-span-full grid grid-cols-2 pb-39">
          <div className="col-span-1 px-9 ">
            <div className="w-full font-bold uppercase subMenu"><PortableText value={data.feats.title} /></div>
            <div className="menuText mb-[42px]"><p><em>{data.feats.subhead}</em></p></div>
            <div className="listHold  border-darkGray border-b mb-[42px]">
              {data.feats.points.map((item: any, i: number) => {
                return (
                  <div key={`service-${i}`} className="flex gap-x-3 w-full py-[15px] font-semibold text-darkGray border-darkGray border-t uppercase">
                    <p className="label">{i < 9 ? '0' : ''}{i + 1}.</p>
                    <p className="label">{item.title}</p>
                  </div>
                )
              })}
            </div>
            <div className="cta inline-block "><p>{data.feats.cta.label}</p></div>
          </div>
          <div className="col-span-1 grid grid-cols-6 px-9">
            <div className="col-span-4 col-end-7"><div className="w-full mb-9"> {data.feats.media ? (<SwitchContent work={data.feats.media} title={'Building Spec'} ratio={data.feats.media.ratio} audio={false} />) : ('')}</div></div>
          </div>

        </div>

        {/* floors */}
        <div className="col-span-12 rounded-t-[12px] bg-offWhite py-9 z-3 reliatve">
          <div className="w-full grid grid-cols-12 px-9">

            <div className="col-span-full py-2 border-b  pb-4 mb-4 uppercase label font-bold"><p>{data.floorplan.label}</p></div>
            <div className="col-span-full divide uppercase mb-14">
              <PortableText value={data.floorplan.title} />
            </div>
            <div className="col-span-6 mb-30">
              <PortableText value={data.floorplan.copy} />
            </div>
            </div>
            <div className="col-span-6">
              
            </div>






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


