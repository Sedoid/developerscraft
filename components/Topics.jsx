import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import {Button,Box, useColorMode,useColorModeValue,Text} from '@chakra-ui/react'
import { getTopics } from '../services'

const Topics = () => {
    const [topics,setTopics] = useState([])

    useEffect(() =>{
        getTopics()
            .then(newTopic => setTopics(newTopic))
        
    },[])
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            className="shadow-lg rounded-md p-5 mb-8 pb-6" borderWidth='1px' borderRadius='md'>
            <h6 className="text-xl mb-2 font-semibold border-b pb-1  sub_title">
                Topics
            </h6>
            {topics.map(topic => 
            
                <Button key={topic.slug} colorScheme='green' size="sm" margin={1} display="inline-block" variant='outline'>
                    <Link key={topic.slug} href={`/topic/${topic.slug}`}>
                        <Text fontWeight="light" className="cursor-pointer sub_title">{topic.name}</Text>
                    </Link> 
                </Button>                                  
            )
            }
        </Box>
    )
}

export default Topics
