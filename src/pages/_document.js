import { Html, Head, Main, NextScript } from "next/document";

/**
 * Custom Document Component
 * 
 * Overrides the default Next.js Document to control the `<html>` and `<body>` tags.
 * This is where we:
 * 1. Set the lang attribute for accessibility (`html lang="en"`).
 * 2. Inject global Meta tags for SEO (Description, Keywords, OGs).
 * 3. Preload critical fonts (Inter, Poppins) to prevent FOUT (Flash of Unstyled Text).
 * 
 * @component
 * @returns {JSX.Element} The HTML shell.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="New Gen Services - Powering the future of Businesses, Creators, and Entrepreneurs with AI, Digital Innovation & Media." />
        <meta name="keywords" content="AI, Digital Innovation, Media Production, Content Automation, Businesses, Creators" />
        <meta property="og:title" content="New Gen Services" />
        <meta property="og:description" content="Modern solutions for businesses and creators who want to grow, stand out, and save time." />

        <link rel="icon" href="/favicon.ico" />

        {/* Preload critical fonts */}
        <link rel="preload" href="/assets/fonts/interregular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/poppinreg.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/poppinmed.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      <body className="antialiased">
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MGWQ74LE36"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-MGWQ74LE36');
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
