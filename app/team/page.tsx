
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
import GalleryF from "../components/galleryF";
import { VidHead } from "../components/vidHead";
import { ScrollCTA } from "../components/scrollTarget";



export default async function Home() {
  const query = await getData(`{
    'data': *[_type=='team'][0]{header{video{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},intro{title,subhead,copy,outro,media{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption},cta},team[]{profile{label,Role,Company,name,title,intro,bio,gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption,title,copy}}},outro{title,video{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio}},cta{label,title,copy,cta,"image":image.asset->url},next},

    }`)



  const { data } = query.data
  console.log(data.team[0].profile.gallery)

  return (


    <React.Fragment>
       {/* <div className="w-full h-[100dvh] grid grid-cols-2 sticky top-0 z-1">
      
              <div className="projectCover col-span-2 h-[100dvh] relative coverSwitch fadeOn ">
                <SwitchContent work={data.header.video} title={'Header Video'} ratio={data.header.video.ratio} audio={false} cover />
      
                <div className="scrollArrow absolute left-4 bottom-4"><ScrollArrow className="w-[30px] h-auto" fill={"#ffffff"} /></div>
      
              </div>
      
            </div> */}
            
                <VidHead data={data.header.video}/>
            <div className="w-full  bg-offWhite  sticky z-2 grid grid-cols-12 rounded-t-[12px]">
               <div className="col-span-12 pointer-events-none sticky top-14 right-9 pr-9 translate-y-9 h-0 z-7 flex flex-row-reverse">
                                       
                                        <ScrollCTA id={'map'} cta={data.intro.cta} sub />
                                        </div>
              <div className="col-span-full mb-24">
                <TextBlock title={data.intro.title} copy={data.intro.copy} subhead={data.intro.subhead} arrowBot off top />
              </div>

              {/* profile */}
      
            <div className="col-span-full teamHold px-9">
                  {data.team.map((item:any,i:number)=>{
                    return(
                      <div key={`team-${i}`} className="w-full grid grid-cols-12 gap-9 mb-39">
                        <div className="col-span-full py-2 border-b  pb-4 mb-4 uppercase label font-bold"><p>{item.profile.label}</p></div>
                        <div className="col-span-6 col-start-4">
                          <h3 className="uppercase text-darkGray mb-2">{item.profile.Role}</h3>
                          <h3 className="uppercase ">{item.profile.Company}</h3>
                        </div>
                        <div className="col-span-6 grid grid-cols-6 gap-9">
                          {item.profile.gallery.length?(
                              <div className="col-span-3 col-start-4">
                                  <GalleryF data={item.profile}/>
                                </div>
                          ):('')}
                              
                        </div>
                        <div className="col-span-6  grid grid-cols-6 items-start">
                          <div className="col-span-3 col-start-3 p3  mb-6">
                            <div className="mb-6 uppercase font-semibold"><PortableText value={item.profile.intro}/></div>
                            <PortableText value={item.profile.bio}/>
                            </div>
                          
                        </div>
                      </div>
                    )
                  })}
            </div>
      


     

    







   
  
         {data.outro.video?(
                          <React.Fragment>
                            
                            <div className="col-span-full py-14 flex items-center justify-center border-t border-darkGray bg-black flex-wrap px-9 ">
                              <div className="w-full text-white divide uppercase pt-9 border-t border-darkGray mb-14">
                                <PortableText value={data.outro.title}/>
                              </div>
                              <div className="w-2/3 pb-35">
                              
                              {data.outro.video ? (<SwitchContent work={data.outro.video} ratio={data.outro.video.ratio} title={'Building Spec'} audio={true} />) : ('')}</div>
                            </div>
                            
                          </React.Fragment>
                        ):('')}

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


