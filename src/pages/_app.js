import "@/styles/globals.css";
import ScrollProgressBar from "@/components/effects/ScrollProgressBar";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import Head from "next/head";
import Script from "next/script";

const InteractiveGrid = dynamic(() => import("@/components/effects/InteractiveGrid"), { ssr: false });

export default function App({ Component, pageProps }) {
  const pageRef = useRef(null);

  useEffect(() => {
    // Page transition entrance
    if (pageRef.current) {
      gsap.fromTo(
        pageRef.current,
        { opacity: 0, y: 5 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0 }
      );
    }
  }, [Component]); // Re-run when component (page) changes



  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Google Analytics via next/script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MGWQ74LE36"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MGWQ74LE36');
        `}
      </Script>

      <ScrollProgressBar />
      <InteractiveGrid />
      <div ref={pageRef} className="opacity-0">
        <Component {...pageProps} />
      </div>
    </>
  );
}
