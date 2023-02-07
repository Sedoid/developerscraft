import React,{useState,useEffect} from 'react'
import {Button,Box, useColorMode,useColorModeValue} from '@chakra-ui/react'
import Loader from './Loader'

const Advertisement = () => {

    return (
        <Box

        bg={useColorModeValue('white', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        className="shadow-lg rounded-md p-5 mb-8 pb-6" borderWidth='1px' borderRadius='md'>        

            <h5 className="text-xl mb-2 font-semibold border-b pb-1  sub_title">
               Read Me
            </h5>
            <div>
                <h3 className='text-xl mb-2  pb-1 pt-1  ads_title'>Upcoming Updates for 2023!</h3>
                <ol className='lists'>
                    <li>Software Pre-Release Announcements</li>
                    <li>Product Release Waiting List Subscription</li>
                    <li>Software Beta Tester Volunteering</li>
                    <li>User Account Creation</li>
                    <li>Project Support/Dev Crowd Funding</li>
                </ol>
                {/* <Loader/> */}
            </div>
        </Box>
    )
}

export default Advertisement
