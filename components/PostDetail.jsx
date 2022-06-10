import React from 'react'
import moment from 'moment';
import { Stack,Text, Box, Flex,useColorModeValue } from '@chakra-ui/react';

const PostDetail = ({ post }) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
        
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
        }
    
        switch (type) {
          case 'heading-three':
            return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
          case 'paragraph':
            return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'heading-four':
            return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
          case 'image':
            return (
              <img
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
              />
            );
          case 'audio':
            return (                       
              <audio controls src={obj.src} />     
            );
          default:
            return modifiedText;
        }
    };
    
    return (
        <Box
        bg={useColorModeValue('white', 'gray.900')}
        border="1px"
        borderColor={useColorModeValue('white', 'white')}
        color={useColorModeValue('gray.700', 'gray.200')}
        className=" shadow-lg rounded-lg lg:p-8 mb-8"
        id="blog"
        >
               
          <div className="px-4 lg:px-0"> 
            <div className="flex items-center  lg:mb-0 lg:w-auto">
              <img alt={post.author.name} src={post.author.photo.url} height='40px' width="50px" className="rounded-full align-middle" />
              <Stack align="start" ml={5} className="ml-sm-1" justifycontents="space-around">
                <Text className="inline align-middle text-grey-700 text-lg">{post.author.name}</Text>
                <Flex className="font-medium text-gray-700 align-middle justify-around" direction="row" align="center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-green-500" fill="none" viewBox="0 0 24 24"   stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <Text fontSize={"small"} style={{position:'relative',top:"1px"}}>
                        {moment(post.createdAt).format('MMM DD YYYY')}
                    </Text>
                </Flex> 
              </Stack>

          </div>

            <h1 className="my-4 text-2xl font-semibold">{post.title}</h1>                
          </div>

          <div className="relative overflow-hidden shadow-md mb-5">
              <img src={post.featuredImage.url}  alt={post.title} className="object-top h-full w-full " />
              
          </div>

          
          <div className="px-4 lg:px-0">
              <div className="flex items-center justify-between mb-8 w-full">
                  {/* <div className="flex items-center  mb-4 lg:mb-0 lg:w-auto">
                      <img alt={post.author.name} src={post.author.photo.url} height='30px' width="30px" className="rounded-full align-middle" />
                      <p className="inline align-middle text-grey-700 ml-2 text-lg">{post.author.name}</p>
                  </div> */}
                  {/* <div className="font-medium text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>
                          {moment(post.createdAt).format('MMM DD YYYY')}
                      </span>
                  </div> */}
              </div>
              <audio controls style={{display:post.featuredAudio?.url? "block": "none"}} className="mb-7"  src={post.featuredAudio?.url} /> 
              {post.content.raw.children.map((typeObj,index) => {
                  const children = typeObj.children.map((item,itemIndex) => getContentFragment(itemIndex,item.text, item))

                  return getContentFragment(index,children, typeObj, typeObj.type)
              })}
          </div>
            
        </Box>
    )
}

export async function getStaticProps(){
    const posts = (await getPosts()) || [];
    
    return {
      props:{ posts }
    }
  }

export default PostDetail
