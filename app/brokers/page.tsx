
import Link from "next/link";
import Image from "next/image";
import { SwitchContent } from "../util/contentSwitch";
import { MuxVideoBG } from "../util/muxPlayer";
import { getData } from "../util/sanity";
import React from "react";



import ScrollUp from "../util/misc";
import { PortableText } from "next-sanity";
import { Plus, ScrollArrow } from "../components/svg";
import { Reveal } from "../util/reveal";
import Map from "../components/Map";
import GalleryA from "../components/galleryA";
import TextBlock from "../components/textBlock";
import GalleryB from "../components/galleryB";
import Next from "../components/next";
import { VidHead } from "../components/vidHead";
import { ListExpand } from "../components/listExpand";



export default async function Home() {
  const query = await getData(`{
    'data': *[_type=='brokers'][0]{header{video{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},intro{title,subhead,copy,outro,media{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption},cta},sales{title,subhead,sheets[]{title,copy}}, toolkit{title,subhead,copy,cta,media{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},resources[]{title,copy,cta,media{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},brokers{title,copy,profiles[]{name,contact,media{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},media{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},cta{label,title,copy,cta,"image":image.asset->url},next}

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
          <VidHead data={data.header.video}/>

      <div className="w-full  bg-offWhite  sticky z-2 grid grid-cols-12 ">
        <div className="col-span-full mb-24">
          <TextBlock title={data.intro.title} copy={data.intro.copy} subhead={data.intro.subhead} cta={data.intro.cta} off arrowBot />
        </div>


        <div className='col-span-full px-9 mb-35'>
          <div className="sheets mb-5"><PortableText value={data.sales.title}/></div>
          <div className="mb-14"><PortableText value={data.sales.subhead}/></div>
          <div className="w-full sheetsHold border-t ">
            {data.sales.sheets.map((item:any,i:number)=>{
              return(
              <ListExpand key={`cheat-${item.title}`} data={item}/>
              )
            })}
          </div>
        </div>

        <div className="col-span-full px-9 grid grid-cols-2 items-center mb-39">
          <div className="col-span-1">
            <div className="sheets mb-5"><PortableText value={data.toolkit.title}/></div>
          <div className="mb-14"><PortableText value={data.toolkit.subhead}/></div>
          <div className="mb-14"><PortableText value={data.toolkit.copy}/></div>
          </div>
          <div className="grid grid-cols-6 col-span-1">
            <div className="col-span-4 col-end-7">
              <SwitchContent work={data.toolkit.media} title={'Header Video'} ratio={data.toolkit.media.ratio} audio={false} />
            </div>
          </div>
        </div>

        <div className="col-span-full px-9 grid grid-cols-12 mb-39">
          {data.resources.map((item:any,i:number)=>{
            return(
              <div key={`resources-${i}`} className="col-span-6 col-start-4 mb-22">
                <div className="w-full aspect-[791/532]">
                <SwitchContent work={item.media} title={'Header Video'} ratio={item.media.ratio} audio={false} cover/>
                
                </div>
                <div className="w-full py-8 flex justify-between items-center">
                  <div className="w-2/3 uppercase sheets">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="w-1/3 flex-shrink-0 text-right resource"><PortableText value={item.copy}/></div>
                </div>
                <div className="cta inline-block inverted"><p>{item.cta.label}</p></div>
              </div>
            )
          })}
        </div>

        <div className="col-span-full bg-black grid grid-cols-12 p-9 text-white">
          <div className="col-span-full border-darkGray border-t divide py-9 mb-28">
            <PortableText value={data.brokers.title}/>
          </div>
          <div className="col-span-8 col-start-3 mb-28">
            <div className="w-full uppercase mb-28"><PortableText value={data.brokers.copy}/></div>
             <div className="w-full grid grid-cols-3 gap-15 mb-39">
              {data.brokers.profiles.map((item:any,i:number)=>{
                return(
                  <div key={`broker-${i}`} className="col-span-1">
                      <div className="w-full aspect-[352/440]">
                              <SwitchContent work={item.media} title={'Header Video'} ratio={item.media.ratio} audio={false} cover/>

                      </div>
                      <div className="py-8">
                        <p className="mb-3">{item.name}</p>
                        <div className="w-full text-darkGray"><PortableText value={item.contact}/></div>
                      </div>
                  </div>
                )
              })}
             </div>
             <div className="w-full">
              <SwitchContent work={data.brokers.media} title={'Header Video'} ratio={data.brokers.media.ratio} audio={false} />
             </div>
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


