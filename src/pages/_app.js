import "@/styles/globals.css";
import ScrollProgressBar from "@/components/effects/ScrollProgressBar";
import InteractiveGrid from "@/components/effects/InteractiveGrid";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Head from "next/head";

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
      <ScrollProgressBar />
      <InteractiveGrid />
      <div ref={pageRef} className="opacity-0">
        <Component {...pageProps} />
      </div>
    </>
  );
}
