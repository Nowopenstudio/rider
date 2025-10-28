
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
import GalleryE from "../components/galleryE";



export default async function Home() {
  const query = await getData(`{
    'data': *[_type=='creators'][0]{header{video{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},intro{title,subhead,copy,outro,media{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption},cta},legends,artists[]{profile{name,title,"image":image.asset->url,bio,gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption,title,copy},feat{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption,headline},media{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption,headline}}},cta{cta,label,title,copy,"image":image.asset->url},next},

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
        <div className="col-span-full mb-24">
          <TextBlock title={data.intro.title} copy={data.intro.copy} subhead={data.intro.subhead} cta={data.intro.cta} />
        </div>

        <Reveal styleSet="col-span-6 col-start-4 mb-39 ">
          {data.intro.media ? (<SwitchContent work={data.intro.media} title={'Header Video'} ratio={data.intro.media.ratio} audio={false} />) : ('')}

        </Reveal>
        <div className="col-span-6 mb-14 px-9">
          <PortableText value={data.intro.outro} />
        </div>

        <div className="col-span-full px-9">
          <div className="border-t py-25 divide">
            <PortableText value={data.legends.headline} />
          </div>
        </div>

        <div className="bg-black p-9 col-span-full">
          {data.artists.map((item: any, i: number) => {
            return (
              <div className="w-full singleArtist " key={`${item.profile.name}`}>
                <div className="w-full py-4 grid grid-cols-12 border-t  border-darkGray text-white items-center">
                  <div className="col-span-6 grid grid-cols-6 border-r border-darkGray">
                    <div className="col-span-full divide pt-14"><h3>{item.profile.name}</h3></div>
                    <div className="col-span-3">
                      <div className="w-full pb-9">
                        {item.profile ? (<SwitchContent work={item.profile} title={'Building Spec'} audio={false} />) : ('')}
                      </div>
                      <div className="profile">
                        <h3 className=" text-white uppercase mb-4">{item.profile.title}</h3>


                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 grid grid-cols-6">
                    <div className="col-span-4 col-start-2 text-white p2"><PortableText value={item.profile.bio} /></div>
                  </div>
                </div>

                {/* feat */}
                {item.profile.feat?(
                  <React.Fragment>
                    <div className="col-span-full py-9 text-white uppercase border-t border-darkGray">
                      {item.profile.feat.headline?(
                         <PortableText value={item.profile.feat.headline} />
                      ):('')}
                     
                    </div>
                    <div className="col-span-full pb-9">
                      {item.profile.feat ? (<SwitchContent work={item.profile.feat} title={'Building Spec'} audio={false} />) : ('')}
                    </div>
                    
                  </React.Fragment>
                ):('')}
                {item.profile.gallery?(
                      <div className="col-span-full h-[100dvh] py-9 border-t border-darkGray relative">
                      <GalleryE data={item.profile.gallery}/>
                    </div>
                    ):('')}

                    {item.profile.media?(
                  <React.Fragment>
                    
                    <div className="col-span-full h-[100dvh] flex items-center justify-center border-t border-darkGray">
                      <div className="w-2/3">{item.profile.media ? (<SwitchContent work={item.profile.media} ratio={item.profile.media.ratio} title={'Building Spec'} audio={true} />) : ('')}</div>
                    </div>
                    
                  </React.Fragment>
                ):('')}
              </div>
            )
          })}
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


