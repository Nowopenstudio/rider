

import { SwitchContent } from "../util/contentSwitch";

import { getData } from "../util/sanity";
import React from "react";



import ScrollUp from "../util/misc";
import { PortableText } from "next-sanity";

import { Reveal } from "../util/reveal";

import TextBlock from "../components/textBlock";

import Next from "../components/next";
import GalleryF from "../components/galleryF";
import { VidHead } from "../components/vidHead";
import { ScrollCTA } from "../components/scrollTarget";



export default async function Home() {
  const query = await getData(`{
    'data': *[_type=='team'][0]{header{video{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,"mobileVid":mobileVid.asset->playbackId,"mobileRatio":mobileVid.asset->data.aspect_ratio,credits,caption}},intro{title,subhead,copy,outro,media{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption},cta},team[]{profile{label,Role,Company,name,title,intro,bio,gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio,credits,caption,title,copy}}},outro{title,video{"image":image.asset->url,"vid":video.asset->playbackId, 'ratioImg':image.asset->metadata.dimensions.aspectRatio,"ratio":video.asset->data.aspect_ratio}},cta{label,copy,title,cta,"image":image.asset->url},next},

    }`)



  const { data } = query.data


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
               <div className="col-span-12 pointer-events-none sticky top-14 md:top-14 mt-[-100dvh] md:mt-0 right-9 pr-4 md:pr-9 translate-y-7 h-0 z-7 flex flex-row-reverse">
                                       
                                        <ScrollCTA id={'video'} cta={data.intro.cta} sub />
                                        </div>
              <div className="col-span-full mb-9 md:mb-24">
                <TextBlock title={data.intro.title} copy={data.intro.copy} subhead={data.intro.subhead} arrowBot off top />
              </div>

              {/* profile */}
      
            <div className="col-span-full teamHold px-4 md:px-9 overflow-x-hidden">
                  {data.team.map((item:any,i:number)=>{
                    return(
                      <Reveal key={`team-${i}`} styleSet="w-full md:grid grid-cols-12 gap-9 mb-9 md:mb-39">
                        <div className="col-span-full py-2 border-b  pb-4 mb-4 uppercase label font-medium"><p>{item.profile.label}</p></div>
                        <div className="col-span-full md:col-span-6 md:col-start-4">
                          <h3 className="uppercase text-darkGray mb-2">{item.profile.Role}</h3>
                          <h3 className="uppercase mb-4 md:mb-0">{item.profile.Company}</h3>
                        </div>
                        <div className="col-span-full md:col-span-6 md:grid grid-cols-6 gap-4 md:gap-9 mb-9 md:mb-0">
                          {item.profile.gallery.length?(
                              <div className="col-span-full md:col-span-3 md:col-start-4 overflow-x-hidden">
                                  <GalleryF data={item.profile}/>
                                </div>
                          ):('')}
                              
                        </div>
                        <div className="col-span-full md:col-span-6  md:grid grid-cols-6 items-start">
                          <div className="col-span-full md:col-span-3 md:col-start-3 p3 md:mb-6">
                            <div className="w-full mb-6 uppercase font-semibold"><PortableText value={item.profile.intro}/></div>
                            <div className="richText"><PortableText value={item.profile.bio}/></div>
                            </div>
                          
                        </div>
                      </Reveal>
                    )
                  })}
            </div>
      


     

    







   
  
         {data.outro.video?(
                          <React.Fragment>
                            
                            <Reveal id={'video'} styleSet="col-span-full py-4 md:py-14 flex items-center justify-center border-t border-darkGray bg-black flex-wrap px-4 md:px-9 overflow-x-hidden">
                              <div className="w-full text-white divide uppercase pt-9 border-t border-darkGray mb-14">
                                <PortableText value={data.outro.title}/>
                              </div>
                              <div className="w-full md:w-2/3 md:pb-35">
                              
                              {data.outro.video ? (<SwitchContent work={data.outro.video} ratio={data.outro.video.ratio} title={'Building Spec'} audio={true} />) : ('')}</div>
                            </Reveal>
                            
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


