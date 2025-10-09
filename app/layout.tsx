import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { getData } from "./util/sanity";


import React from "react";
import SmoothScrolling from "./util/SmoothScrolling";



export const metadata: Metadata = {
  title: "Experience the Rider",
  description: "lorem"
};

export default async function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {
    const query = await getData(`{
       'data':*[_type=='info'][0]{name,titles,location,bio,links,cv,email, media[]{"image":image.asset->url, "vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio}, name, clients[]{title, "image":image.asset->url}},
       }`)

    const {data} = query.data;


  return (
    <html lang="en" >
     <SmoothScrolling>
        <body id="body" className="w-[100vw] relative">
          <Navbar data={data}/>
          {children}
           
          </body>
         
     </SmoothScrolling>
    </html>
  )
}
