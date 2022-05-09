import React,{useState,useEffect} from 'react'
import {Button,Box, useColorMode,useColorModeValue} from '@chakra-ui/react'
import Loader from './Loader'

const Advertisement = () => {

    return (
        <Box

        bg={useColorModeValue('white', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        className="shadow-lg rounded-md p-5 mb-8 pb-12" borderWidth='1px' borderRadius='md'>        

            <h5 className="text-xl mb-2 font-semibold border-b pb-1  sub_title">
               Ads
            </h5>
            <div height="100px">
                <Loader/>
            </div>
        </Box>
    )
}

export default Advertisement
