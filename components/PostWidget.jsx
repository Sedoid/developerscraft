import React, {useState,useEffect, useContext} from 'react'
import moment from 'moment'
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';
import { Box,useColorModeValue,Text } from '@chakra-ui/react';

const PostWidget = ({categories,slug}) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() =>{
        if(slug){
            getSimilarPosts(categories,slug)
            .then(result=> setRelatedPosts(result))
        }else{
            getRecentPosts()
            .then(result => setRelatedPosts(result))
        }
    },[slug])


    return (
        <Box
        bg={useColorModeValue('grey.900', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        key={slug} className="bg-white shadow-lg rounded-md p-5 mb-8 borderWidth='1px' borderRadius='md'">
            <h4 className="text-xl mb-2 font-semibold border-b pb-2">
                {slug ? 'Related Post' : "Recent Posts"}
            </h4>
            {relatedPosts.map(post => 
                <div key={post.title} className="flex items-center w-full mb-4">
                    <div className="w-16 flex-none"> 
                    <img alt={post.title} height= "60px" width="60px" className="align-middle rounded-full"src={post.featuredImage.url} />
                    </div>
                    <div className="flex-grow ml-4">
                        <Text className="text-gray-500 font-xs">
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </Text>  
                        <Link href={`/post/${post.slug}`} key={post.title} className="text-md ">{post.title}</Link>
                    </div>  
                </div>
            )}
        </Box>
    )
}

export default PostWidget
