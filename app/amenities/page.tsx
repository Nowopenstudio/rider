
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



export default async function Home() {
  const query = await getData(`{
    'data': *[_type=='amenities'][0]{header{title,video{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},intro{title,subhead,copy,outro,media{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption},cta},feat{title,subhead,points[]{title},media{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption},gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},outro{media{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}, gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},box{label,title,copy,feat{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption},outro{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},swing{label,title,copy,feat{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},beach{label,title,copy,gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},cta{label,title,copy,cta,'image':image.asset->url},next},

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

      <div className="w-full  bg-offWhite  sticky z-2 grid grid-cols-12 ">
        <div className="col-span-full mb-39">
          <TextBlock title={data.intro.title} copy={data.intro.copy} subhead={data.intro.subhead} />
        </div>

        <div className="col-span-full px-9 mb-39">
          <SwitchContent work={data.intro.media} title={'Header Video'} ratio={data.intro.media.ratio} audio={false} />
        </div>

        {/* amenities */}
        <div className={'col-span-6 relative z-2 px-9'}>
        <div className="w-full font-bold uppercase"><p className="subMenu font-semibold mb-4">{data.feat.title}</p></div>
          <div className="menuText mb-[42px]"><p><em>{data.feat.subhead}</em></p></div>
          <div className="listHold mb-14 beorder-darkGray  border-b">
            {data.feat.points?(
              data.feat.points.map((item: any, i: number) => {
              return (
                <div key={`service-${i}`} className="flex gap-x-3 w-full py-[15px] font-semibold text-darkGray border-darkGray border-t  uppercase">
                  <p className="label">{i < 9 ? '0' : ''}{i + 1}.</p>
                  <p className="label">{item.title}</p>
                </div>
              )
            })
            ):('')}
          </div>
      </div>

      <div className="col-span-6 grid grid-cols-6  px-9">
        <div className="col-span-4 col-start-3">
          <div className="w-full mb-9"> {data.feat.media ? (<SwitchContent work={data.feat.media} title={'Building Spec'} ratio={data.feat.media.ratio} audio={false} />) : ('')}</div>
        
        </div>


      </div>
            <div className="mb-39 col-span-full">
              {data.feat.gallery?(
                 <GalleryC data={data.feat.gallery} />
              ):('')}
             </div>

      <Reveal styleSet="col-span-4 col-start-5 mb-39 ">
                {data.outro.media ? (<SwitchContent work={data.outro.media} title={'Header Video'} ratio={data.outro.media.ratio} audio={false} />) : ('')}
      
      </Reveal>

          <Reveal styleSet="col-span-8 col-start-3 mb-39 ">
                {data.outro.media ? (
                  <GalleryG data={data.outro.gallery}/>
                ) : ('')}
      
      </Reveal>

      <div className="col-span-full bg-black  grid grid-cols-12 text-white py-9">
               <div className="px-9 col-span-full"> <div className="col-span-full py-2 border-b  pb-4  uppercase label font-bold"><p>{data.box.label}</p></div></div>

        <div className="col-span-full mb-39 ">
          <TextBlock title={data.box.title} copy={data.box.copy} subhead={data.box.subhead} />
        </div>

        <div className="col-span-full mb-39 px-9">
          <SwitchContent work={data.box.feat} title={'Header Video'} ratio={data.box.feat.ratio} audio={false} />
        </div>

        <Reveal styleSet="col-span-8 col-start-3 mb-39 ">
                {data.box.outro ? (<SwitchContent work={data.box.outro} title={'Header Video'} ratio={data.box.outro.ratio} audio={false} />) : ('')}
      
      </Reveal>

          <div className="px-9 col-span-full"> <div className="col-span-full py-2 border-b  pb-4  uppercase label font-bold"><p>{data.swing.label}</p></div></div>

        <div className="col-span-6 divide uppercase mb-14 p-9">
           <div className="mb-14"><PortableText value={data.swing.title} /></div>
            <div className="mb-39"><PortableText value={data.swing.copy} /></div>
         </div>                        

         <Reveal styleSet="col-span-8 col-start-3 mb-39 ">
                {data.swing.feat ? (<SwitchContent work={data.swing.feat} title={'Header Video'} ratio={data.swing.feat.ratio} audio={false} />) : ('')}
      
      </Reveal>


      </div>


      <div className="col-span-full p-9 grid grid-cols-12">
        <div className="col-span-7 uppercase mb-14">
          <PortableText value={data.beach.title}/>
        </div>
        <div className="col-span-6 col-start-4">
          {data.beach.gallery?(
                 <GalleryH data={data.beach.gallery}/>
          ):('')}
     
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


