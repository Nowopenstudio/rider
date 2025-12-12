import type { Metadata } from "next";
import Script from 'next/script';
import "./globals.css";
import Navbar from "./components/navbar";
import { getData } from "./util/sanity";
import { GoogleTagManager } from '@next/third-parties/google'


import React from "react";
import SmoothScrolling from "./util/SmoothScrolling";
import Footer from "./components/footer";
import Loader from "./loader";



export const metadata: Metadata = {
  title: "Experience the Rider",
  description: "lorem ipsum"
};

export default async function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {
  const query = await getData(`{
      'home':*[_type=='home'][0]{loader},
       'data':*[_type=='info'][0]{name,titles,location,bio,links,cv,email, media[]{"image":image.asset->url, "vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio}, name, clients[]{title, "image":image.asset->url}},
       'footer':*[_type=="footer"][0]{contact,form,downloads,cta,disclaimers,privacy,disclaim{"logo":logo.asset->url,disclaimers,privacy,terms,faqs,copyright},contacts,footerVid{"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio}, footerLogos[]{'image':image.asset->url,url},sucessVid{top,bottom,"image":image.asset->url,"vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio}}

       }`)

  const { data, footer, home } = query.data;


  return (
    <html lang="en" >
      {/* <head>
        <Script src="/assets/lang-config.js" strategy="beforeInteractive" />
        <Script src="/assets/translation.js" strategy="beforeInteractive" />
        <Script src="//translate.google.com/translate_a/element.js?cb=TranslateInit" strategy="afterInteractive" />
      </head> */}
      <GoogleTagManager gtmId="GTM-TZSW26XN"/>
      <SmoothScrolling>
        <body id="body" className="w-[100vw] relative" style={{ height: '100dvh' }}>
          <Loader words={home.loader.words} />
          <Navbar data={data} footer={footer} />
          {children}
          <Footer data={footer} />
        </body>

      </SmoothScrolling>
    </html>
  )
}
