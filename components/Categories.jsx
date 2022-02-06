import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import {Button,Box, useColorMode,useColorModeValue,Text} from '@chakra-ui/react'
import { getCategories } from '../services'

const Categories = () => {
    const [categories,setCategories] = useState([])

    useEffect(() =>{
        getCategories()
            .then(newCategories => setCategories(newCategories))
        
    },[])
    return (
        <Box
        bg={useColorModeValue('white', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        className="shadow-lg rounded-md p-5 mb-8 pb-6" borderWidth='1px' borderRadius='md'>
            <h6 className="text-xl mb-2 font-semibold border-b pb-1  sub_title">
                Categories
            </h6>
            {categories.map(category => 
            
                <Button key={category.slug} colorScheme='green' size="sm" margin={1} display="inline-block" variant='outline'>
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <Text fontWeight="light" className="cursor-pointer sub_title">{category.name}</Text>
                    </Link> 
                </Button>                                  
            )
            }
        </Box>
    )
}

export default Categories
