"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function MetaPixel() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "PageView");
    }
  }, []);

  return (
    <>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        onLoad={() => {
          if ((window as any).fbq) {
            (window as any).fbq("init", "2083372059196540");
            (window as any).fbq("track", "PageView");
          }
        }}
      >
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;
          n.push=n;
          n.loaded=!0;
          n.version='2.0';
          n.queue=[];
          t=b.createElement(e);
          t.async=!0;
          t.src=v;
          s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}
          (window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
        `}
      </Script>
    </>
  );
}