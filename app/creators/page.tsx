
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
import { VidHead } from "../components/vidHead";



export default async function Home() {
  const query = await getData(`{
    'data': *[_type=='creators'][0]{header{video{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,captions}},intro{title,subhead,copy,outro,media{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption},cta},legends,artists[]{profile{name,title,"image":image.asset->url,bio,gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption,title,copy},icon{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption,headline},feat{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption,headline},media{title,subtitle,"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption,headline}}},cta{cta,label,title,copy,"image":image.asset->url},next},

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

      <div className="w-full  bg-offWhite  sticky z-2 grid grid-cols-12 rounded-t-[12px] ">
        <div className="col-span-full mb-9 md:mb-24">
          <TextBlock title={data.intro.title} copy={data.intro.copy} subhead={data.intro.subhead} arrowBot off />
        </div>

        <Reveal styleSet="col-span-full md:col-span-9 md:col-span-6 md:col-start-4 mb-9 md:mb-39 ">
          {data.intro.media ? (<SwitchContent work={data.intro.media} title={'Header Video'} ratio={data.intro.media.ratio} audio={false} />) : ('')}

        </Reveal>
        <div className="col-span-full md:col-span-6 mb-9 md:mb-14 px-4 md:px-9">
          <PortableText value={data.intro.outro} />
        </div>

        <div className="col-span-full px-4 md:px-9">
          <div className="border-t py-4 md:py-25 divide">
            <PortableText value={data.legends.headline} />
          </div>
        </div>

        <div className="bg-black p-0 md:p-9 col-span-full overflow-x-hidden">
          {data.artists.map((item: any, i: number) => {
            return (
              <div className="w-full singleArtist pb-14" key={`${item.profile.name}`}>
                <div className="w-full py-4  border-t  border-darkGray text-white items-center relative">
                  <div className='w-full grid grid-cols-12 relative py-9 md:py-18.5'>
                    <div className="w-[1px] h-full absolute top-0 left-1/2 border-darkGray border-l hidden md:block"></div>
                    <div className="col-span-full md:col-span-6 grid grid-cols-6 px-4 md:px-0">
                      <div className="col-span-full divide mb-10.5 md:w-3/4"><h3>{item.profile.name}</h3></div>
                      <div className="col-span-full md:col-span-3">
                        <div className="w-full pb-10.5">
                          {item.profile ? (<SwitchContent work={item.profile} title={'Building Spec'} audio={false} />) : ('')}
                        </div>
                        <div className="profile">
                          <h3 className=" text-white uppercase mb-9 md:mb-0">{item.profile.title}</h3>
  
  
                        </div>
                      </div>
                    </div>
                    <div className="col-span-full md:col-span-6 grid grid-cols-6 px-4 md:px-0">
                      
                      <div className="col-span-4 md:col-span-2 col-start-2 mb-9 md:mb-17.5 hidden md:block">
                        {item.profile.icon?(<SwitchContent work={item.profile.icon} title={`${item.profile.name}-logo`} audio={false} />):('')}
                      </div>
                      <div className="col-span-full md:col-span-4 md:col-start-2 text-white p2 richText "><PortableText value={item.profile.bio} /></div>
                    </div>
                  </div>
                </div>

                {/* feat */}
                {item.profile.feat?(
                  <React.Fragment>
                    <div className="col-span-full py-9 text-white px-4 md:px-0 md:uppercase border-t border-darkGray overflow-x-hidden">
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
                      <div className="col-span-full h-[calc(100dvh_-_74px)] px-4 md:px-0 py-9 border-t border-darkGray relative">
                      <GalleryE data={item.profile.gallery} name={item.profile.name}/>
                    </div>
                    ):('')}

                    {item.profile.media?(
                  <React.Fragment>
                    
                    <div className="col-span-full md:h-[100dvh] md:flex items-center justify-center border-t border-darkGray relative px-4 md:px-0">
                      <div className="md:absolute w-full h-full top-0 left-0 pointer-events-none z-2 grid grid-cols-12">
                        <div className="col-span-full md:col-span-10 md:col-start-2 h-full md:flex items-center justify-center">
                          <div className="w-full md:flex justify-between text-white items-center  ">
                            <div className='py-9 md:py-0'><PortableText value={item.profile.media.title}/></div>
                            <div className="hidden md:block"><PortableText value={item.profile.media.subtitle}/></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-full w-full md:w-2/3 z-1 relative">{item.profile.media ? (<SwitchContent work={item.profile.media} ratio={item.profile.media.ratio} title={'Building Spec'} autoplay audio={true} />) : ('')}</div>
                      
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


