import React, {useEffect, useState} from 'react';
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
    <ChakraProvider resetCSS theme={customTheme}>
      
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

  )
}

{/* <meta name="viewport" content="width=device-width, initial-scale=0.1"></meta> */}
export default MyApp
