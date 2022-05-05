import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import customTheme from '../styles/theme';
import { ChakraProvider, ColorModeProvider, userColorMode } from '@chakra-ui/react'
import {Layout} from '../components';
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  return (
    <>
      <Head>
        <title>Developers Craft</title>
        <html lang="en" style={{margin: 0,padding:0}} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://developerscraft.com" />
        <link rel="manifest" href='/manifest.json' /> 
               
        <meta name="description" content="Check out  Articles in pidgin and english about African Local Cultures, Agriculture, Music, Health and Languages meant to Educate and Entertain you." />
  
        <link rel="apple-touch-icon"  href="/icons/apple-touch-icon.png" />

        <meta property="og:type" content="website" />

        <meta property="og:title" content="Developers Craft" />

        <meta property="og:description" content="Check out  Articles in pidgin and english about African Local Cultures, Agriculture, Music, Health and Languages meant to Educate and Entertain you." />

        <meta property="og:image" content="/mini_logo_light.png" />

        <meta property="og:url" content="https://developerscraft.com" />

        <meta property="og:site_name" content="Developers Craft" />


      {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

    </Head>  

    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
          options={{
          initialColorMode: "light",
          useSystemColorMode: true
        }}    
      >
 
        <Layout>
          <Component {...pageProps} />
        </Layout> 

      </ColorModeProvider>


    </ChakraProvider>

    </>

  )
}

{/* <meta name="viewport" content="width=device-width, initial-scale=0.1"></meta> */}
export default MyApp
