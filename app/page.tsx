
import Link from "next/link";
import Image from "next/image";
import { SwitchContent } from "./util/contentSwitch";
import { MuxVideoBG } from "./util/muxPlayer";
import { getData } from "./util/sanity";
import React from "react";



import ScrollUp from "./util/misc";
import { PortableText } from "next-sanity";
import { ScrollArrow } from "./components/svg";
import { Reveal } from "./util/reveal";
import Map from "./components/Map";
import GalleryA from "./components/galleryA";
import TextBlock from "./components/textBlock";
import GalleryB from "./components/galleryB";



export default async function Home() {
  const query = await getData(`{
    'map':*[_type=='map'][0]{'map':map.asset->url, locations},
    'data': *[_type=='home'][0]{header{headlines,cta,video{"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio},gallery[]{"vid":video.asset->playbackId, "ratio":reel.asset->data.aspect_ratio,"image":image.asset->url,credits}},welcome,build{title,copy,gallery[]{"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,"image":image.asset->url}}, menu[]{title,copy,url,gallery[]{"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,"image":image.asset->url}},location{title,copy,video{credits,"vid":video.asset->playbackId,"ratio":video.asset->data.aspect_ratio,"image":image.asset->url}}, map, residency{title,copy,video{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio}, gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,caption,credits}}, interiors{title,headline, subhead,copy,features[]{title,copy,url,gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits}}, outro{title, copy,cta,video{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits}}}, amenities{title,headline,copy,cta,gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}},gallery{title,headline,contacts,cta,gallery[]{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio,credits,caption}}, cta{label,title,copy,cta,"image":image.asset->url}, next{label,url}},

    }`)



  const { data, map } = query.data
  console.log(data)

  return (


    <React.Fragment>
      <div className="w-full h-[100dvh] grid grid-cols-2 sticky top-0 z-1">

        <div className="projectCover col-span-1 h-[100dvh] relative coverSwitch fadeOn ">
          <SwitchContent work={data.header.video} title={'Header Video'} ratio={data.header.video.ratio} audio={false} cover />
          <div className='z-20 center-object w-full text-white px-9'>
            <div className="w-auto mb-4"> <PortableText value={data.header.headlines[0].title} /></div>
            <div className="cta inline-block inverted"><p>{data.header.cta.label}</p></div>

          </div>
          <div className="scrollArrow absolute left-4 bottom-4"><ScrollArrow className="w-[30px] h-auto" fill={"#ffffff"} /></div>

        </div>

        <div className="projectCover col-span-1  h-[100dvh] relative coverSwitch fadeOn ">
          {data.header.gallery.length ? (<SwitchContent work={data.header.gallery[0]} title={'Header Video'} ratio={data.header.gallery[0].ratio} audio={false} cover />) : ('')}


        </div>

      </div>

      <div className="w-full  bg-offWhite  sticky z-2 grid grid-cols-12">
       <div className="col-span-full"> <TextBlock title={data.welcome.title} footnote={data.welcome.copy} copy={data.build.copy} subhead={data.build.title}/></div>
        
    
        <Reveal styleSet="col-span-6 col-start-4 mb-76 mt-39">
          {data.build.gallery.length ? (<SwitchContent work={data.build.gallery[0]} title={'Header Video'} ratio={data.header.gallery[0].ratio} audio={false} />) : ('')}

        </Reveal>

        {/* mini menu */}
        <div className="miniMenu grid grid-cols-2 gap-9 col-span-full mb-76 px-9">
          {data.menu ? (
            data.menu.map((item: any, i: number) => {
              return (
                <Reveal styleSet={'col-span-1 mb-9'} key={`${item.title}`} count={i * .25}>
                  <div className="aspect-video w-full bg-mux relative mb-9">
                    {item.gallery.length ? (<SwitchContent work={item.gallery[0]} title={`${item.title}`} ratio={data.header.gallery[0].ratio} audio={false} cover />) : ('')}
                  </div>
                  <div className="w-full">
                    <h3 className="uppercase py-3">{item.title}</h3>
                  </div>
                </Reveal>
              )
            })
          ) : ('')}
        </div>

        {/* Area */}
        <div className="col-span-full  grid grid-cols-12 gap-4 px-9">
          <h4 className="col-span-full uppercase py-3 border-t border-b text-center mb-42">{data.location.title}</h4>
          <div className="col-span-6 col-start-4 aspect-video relative">
            <div className="absolute center-object w-1/3">
              <Image alt="image" height={0} width={0} sizes="100vw" src={data.location.video.image} className={`w-full h-auto `} />
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="col-span-full grid grid-cols-12 gap-4 px-9">
          <div className="col-span-full py-2 border-b mb-4 uppercase label font-bold"><p>{data.map.label}</p></div>
          <div className="mb-10 col-span-8 divide"><PortableText value={data.map.title} /></div>
          {map ? (
            <Map data={map} />
          ) : ('')}


        </div>

        {/* Residencies */}
        <div className="col-span-full gap-4">
          <div className="w-full px-9 grid grid-cols-12">
            <div className="col-span-full py-2 border-b mb-4 uppercase label font-bold"><p>{data.residency.title}</p></div>
            <div className="mb-10 col-span-full divide"><PortableText value={data.residency.copy} /></div>
     
          

          </div>

                  {data.residency.gallery ? (
          <div className='col-span-full overflow-x-hidden'>
            <GalleryA data={data.residency.gallery} />
          </div>
        ) : ('')}

         <div className="w-full grid grid-cols-12 px-9">
            {data.residency.video.vid ? (
                <div className={`col-span-12  relative mb-10 origin-center `} style={{ transform:`scale(.598)`,aspectRatio: `${data.residency.video.ratio.replace(":", " / ")}` }}>
                  <SwitchContent work={data.residency.video} title={'Header Video'} ratio={data.residency.video.ratio} audio={false} cover />
                </div>
              ) : ('')}
         </div>


        </div>

       




        {/* end of div */}
      </div>

      {/* design */}
      <div className="w-full bg-black p-4 relative z-3 grid grid-cols-12 text-white pb-22">
        <div className="col-span-full py-2 border-b uppercase label font-bold"><p>{data.interiors.title}</p></div>
        <div className="col-span-full mb-39">
          <TextBlock title={data.interiors.headline.copy} copy={data.interiors.copy} subhead={data.interiors.subhead}/>
        </div>
        {/* <div className=" col-span-12 divide uppercase border-b border-white py-4"><PortableText value={data.interiors.headline.copy} /></div>
        <div className="col-span-full flex flex-col-reverse px-9 mb-10"><Reveal styleSet=" text py-4 uppercase ml-auto mr-0 inline-block"><PortableText value={data.interiors.subhead} /></Reveal>
        </div> */}
        <div className="deisngHold col-span-full grid grid-cols-12">
          <div className="col-span-6 col-start-4 mb-10">
            {data.interiors.features ? (
              data.interiors.features.map((item: any, i: number) => {
                return (
                  <div className={`w-full mb-10 grid grid-cols-9 items-start`} key={`${i}-designs`}>
                    <div className="relative col-span-full"><GalleryB data={item}/></div>
                  </div>
                )
              })
            ) : ('')}
          </div>
          {/* <div className="col-span-full grid grid-cols-12">
            <div className=" col-span-5 mb-10">
              <div className="mb-6 uppercase divide"> <PortableText value={data.interiors.outro.title} /></div>
              <div className="mb-6"><PortableText value={data.interiors.outro.copy} /></div>
              <div className="cta inline-block inverted"><p>{data.interiors.outro.cta.label}</p></div>
            </div>

            {data.interiors.outro.video.vid ? (
              <div className={`col-span-8 col-start-3 relative`} style={{ aspectRatio: `${data.interiors.outro.video.ratio.replace(":", " / ")}` }}>
                <SwitchContent work={data.interiors.outro.video} title={'Header Video'} ratio={data.interiors.outro.video.ratio} audio={false} cover />
              </div>
            ) : ('')}

          </div> */}

        </div>

      </div>

      {/* amenities */}
      <div className="w-full relative z-5 bg-offWhite pt-4 ">
        <div className="w-full grid grid-cols-12 px-9 mb-10 ">
          <div className="col-span-full py-2 border-b mb-4 uppercase label font-bold"><p>{data.amenities.title}</p></div>
          <div className=" col-span-5 mb-10">
            <div className="mb-6 uppercase divide"> <PortableText value={data.amenities.headline} /></div>
            <div className="mb-6"><PortableText value={data.amenities.copy} /></div>
            <div className="cta inline-block inverted"><p>{data.amenities.cta.label}</p></div>
          </div>



        </div>
        <div className="w-full galleryHold mb-39">
                  {data.amenities.gallery ? (
          <div className='col-span-full overflow-x-hidden'>
            <GalleryA data={data.amenities.gallery} />
          </div>
        ) : ('')}
        </div>
      


        {/* Gallery */}
        <div className="w-full relative z-5 bg-offWhite pt-4 grid grid-cols-12">
          <div className="col-span-full grid grid-cols-12 px-9 mb-10">
            <div className="col-span-full py-2 border-b mb-4 uppercase label font-bold"><p>{data.gallery.title}</p></div>
            <div className=" col-span-full mb-10">
              <div className="mb-6 uppercase divide"> <PortableText value={data.gallery.headline} /></div>
              <div className="mb-6 grid grid-cols-6 gap-4">
                {data.gallery.contacts.map((item: any, i: number) => {
                  return (
                    <div className='col-span-1' key={`contact-${i}`}><PortableText value={item.copy} /></div>
                  )
                })}

              </div>
              <div className="cta inline-block inverted"><p>{data.gallery.cta.label}</p></div>
            </div>



          </div>
          <div className="galleryHold col-span-8 col-start-3 mb-42">
            {data.gallery.gallery ? (
              data.gallery.gallery.map((item: any, i: number) => {
                return (
                  <div className={`w-full`} key={`${i}-designs`}>
                    <div className={'aspect-video'}>
                      <SwitchContent work={item} title={`amenities`} ratio={item.ratio} audio={false} cover />
                    </div>
                  </div>
                )
              })
            ) : ('')}
            <div className="col-span-full flex justify-between py-1 items-start ">
              <div className="flex gap-2 items-start">
                <div className="galleryMarker flex h-[10px] gap-2 ">
                  {data.gallery.gallery.map((dot: any, d: number) => {
                    return (
                      <div key={`amenities-${d}`} className="w-[10px] h-[10px] border rounded-full bg-black"></div>
                    )
                  })}
                </div>
                <div className="caption"><PortableText value={data.amenities.gallery[0].caption} /></div>
              </div>
              <div className="caption"><PortableText value={data.amenities.gallery[0].credits} /></div>
            </div>
          </div>


        </div>
        {/* CTA */}
        <div className="w-full grid grid-cols-2 py-9 bg-white">
          <div className="col-span-full py-2 uppercase label font-bold px-9"><p>{data.cta.label}</p></div>

          <div className="col-span-1 border-r px-9 ">
            <div className="w-full border-t border-b h-full py-2">
              <div className="mb-8 uppercase divide w-full"><PortableText value={data.cta.title}/></div>
              <div className="w-2/3 mb-16"><PortableText value={data.cta.copy}/></div>
              <div className="w-full flex gap-13 pb-9 items-center">
                <div className="h-[45px] w-[45px]"><Image alt="image" sizes={`150px`} width={45} height={45} src={data.cta.image}  className={`w-auto h-[45px]}`} /></div>
                 <div className="cta secondary inline-block"><p>{data.cta.cta.label}</p></div>
              </div>
            </div>
          </div >
            <div className="col-span-1 border-r px-9 ">
              <div className="w-full border-t border-b h-full py-2 flex items-center justify-center">
              <div className="cta-sub text-darkGray"><p>{data.next.label}</p></div>
            
            </div>
            </div>
        </div>


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


