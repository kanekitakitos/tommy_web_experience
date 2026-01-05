import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="New Gen Services - Powering the future of Businesses, Creators, and Entrepreneurs with AI, Digital Innovation & Media." />
        <meta name="keywords" content="AI, Digital Innovation, Media Production, Content Automation, Businesses, Creators" />
        <meta property="og:title" content="New Gen Services" />
        <meta property="og:description" content="Modern solutions for businesses and creators who want to grow, stand out, and save time." />
        {/* Preload critical fonts */}
        <link rel="preload" href="/assets/fonts/interregular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/poppinreg.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/poppinmed.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
