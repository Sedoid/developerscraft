import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'
import {Button,Box, useColorMode,useColorModeValue} from '@chakra-ui/react'
import { getCategories } from '../services'

const Advertisement = () => {

    return (
        <Box

        bg={useColorModeValue('grey.900', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        className="bg-white shadow-lg rounded-md p-5 mb-8 pb-12" borderWidth='1px' borderRadius='md'>        
        
        <Head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6951101662003064"
            crossorigin="anonymous">
        </Script>
        </Head>
            <h5 className="text-xl mb-2 font-semibold border-b pb-1  sub_title">
                Advertisement
            </h5>
            <Box height="200px">

            </Box>
        </Box>
    )
}

export default Advertisement
