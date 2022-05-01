import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {Button,Box, useColorMode,useColorModeValue} from '@chakra-ui/react'
import { getCategories } from '../services'

const Advertisement = () => {

    return (
        <Box

        bg={useColorModeValue('grey.900', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        className="bg-white shadow-lg rounded-md p-5 mb-8 pb-12" borderWidth='1px' borderRadius='md'>        

            <h5 className="text-xl mb-2 font-semibold border-b pb-1  sub_title">
                Advertisement
            </h5>
            <Box height="100px">

            </Box>
        </Box>
    )
}

export default Advertisement
