import React from 'react'
import Image from 'next/image';
import { Box,useColorModeValue } from '@chakra-ui/react';
const Author = ({ author }) => {
    return (
        <Box
        bg={useColorModeValue('green.700', 'green.600')}
        color={useColorModeValue('gray.700', 'gray.200')}
        className="text-center mt-20 mb-8 p-12 relative rounded-lg">
            <div className="absolute left-0 right-0 -top-12">
                <Image unoptimized src={author.photo.url} alt={author.name} height="100px" width="100px" className="align-middle rounded-full  shadow-lg " />
            </div>
            <h3 className="text-white my-4 text-xl font-bold author_name"> {author.name}</h3>
            <p className="text-white text-lg author_bio">{author.bio}</p>
        </Box>
    )
}

export default Author
