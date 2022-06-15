import React from 'react'
import moment from 'moment';
import Link from 'next/link';
import { Flex,Badge, Box, Image, Container,Button, Text, Stack, HStack, VStack,useColorModeValue } from '@chakra-ui/react'
import { FaFileAudio } from 'react-icons/fa';

const PostCard = ({post,index,category,content}) => {

    return (
        <div  style={{marginBottom: '3em'}}>

                {
                    index ==0 ? 
                    
                 <>
                    <Box
                        bg={useColorModeValue('white    ', 'gray.900')}
                        color={useColorModeValue('gray.700', 'gray.200')}
                        padding={0}
                        maxW="100%" borderWidth='1px' borderRadius='md' overflow='hidden'
                        className='shadow-sm'
                    >
                        <Flex id="latest" justifyContent="space-between" alignItems="center" align="center">
                            <VStack px={2} py={3} width={'100%'} id="latest_content" align="start" >
                                <Stack direction="row" spacing="10px" align="center">
                                    <Image
                                    borderRadius='full'
                                    boxSize='35px'
                                    id="postcared_author_image"
                                    src={post.author?.photo.url}
                                    alt={post.author.name}
                                    />
                                    
                                    <Text id="postcard_author" className='sm:text-xs md:text-md author_name'  fontWeight="semibold">{post.author.name}</Text>
                                    <Badge ml='1' style={{fontSize:"10px"}} p={1} className='rounded-md' colorScheme='green'>
                                        Latest Project
                                    </Badge>
                                </Stack>
                                
                                <Text fontSize="2xl" width={'100%'} id="postcard_title"  className="transition duration-700 cursor-pointer hover:text-green-600" fontWeight="bold">
                                    <Link href={`/post/${post.slug}`}>
                                    {post.title}
                                    </Link>
                                </Text> 
                                
                                {/* rounded-md */}
                                <div  className='' id="latest_image" style={{
                                    width:"100%", 
                                    height: "230px",
                                    backgroundImage:`url("${post.featuredImage.url}")`,
                                    backgroundSize:'cover', 
                                    backgroundPosition:'center center'
                                }}>
                                </div>


                                <Box noOfLines={10} id="postcard_content">
                                    <i>{post.excerpt}</i>
                                    <br />
                                    <br />
                                
                                    {
                                    post.featuredAudio?.url? 
                                    <Box>
                                        <Text  fontSize="sm" fontWeight="semibold" style={{marginBottom: '5px'}}>Listen Instead</Text>
                                        <audio  controls style={{display:post.featuredAudio?.url? "block": "none"}} className="mb-1"  src={post.featuredAudio?.url} /> 

                                        <Flex direction="row" align="center"  style={{marginTop: '1em'}}>
                                            <Box flexGrow="1"  className="mb-5" height="1px" bg="gray.300"></Box>
                                        </Flex>
                                    </Box>
                                    : 
                                    ''
                                    }
                                    
                                    <Text id="recent_post_text">       
                                        {post.content.raw?.children[0].children[0].text}<br />
                                        {post.content.raw?.children[1].children[0].text}<br />
                                        {post.content.raw?.children[2].children[0].text}<br />
                                    </Text>    
                                </Box> 

                                <div className="text-center">
                                    <Link href={`/post/${post.slug}`}>
                                    {/* <span className="transition duraion-500 transform hover:-translate-y-1 inline-block bg-green-700 text-sm font-medium rounded-full text-white px-3 py-2 cursor-pointer"> Continue Reading... </span> */}
                                    <Button
                                        rounded={'full'}
                                        size={'md'}
                                        fontWeight={'normal'}
                                        px={6}
                                        bg={useColorModeValue('green.700', 'green.500')}
                                        color={useColorModeValue('white', 'white')}
                                        >
                                        Learn More
                                    </Button>
                                    </Link>
                                </div>
                                
                                <br />

                                <Box mt={5} id="postcard_details" spacing="10px" className='w-full' align="left" bg="transparent">
                                    <span>{moment(post.createdAt).format('MMM DD')}<FaFileAudio className='mr-5 ml-2' style={{display:post.featuredAudio?.url? "inline-block": "none"}}  /></span>
                                    {/* {
                                        post.categories.map(category => 
                                            <Badge  key={category.slug}   ml='1' colorScheme='blue' style={{fontSize:"12px"}} paddingX={3} paddingY={1}  rounded= "base" className='rounded-md'>
                                                {category.name}
                                            </Badge>                                        
                                        )
                                    } */}

                                    {
                                        post.topics.map(topic => 
                                            <Badge key={topic.slug}  ml='1' colorScheme='green' style={{fontSize:"10px"}} paddingX={3} paddingY={1}  rounded={'full'} className='rounded-md'>
                                                {topic.name}
                                            </Badge>
                                        )
                                    }
                                </Box> 
                                    {/* 
                                        <Stack direction="row"  className='w-full' id="postcard_details" spacing="10px" align="center">
                                            <Text fontSize="sm">{moment(post.createdAt).format('MMM DD')}</Text>
                                            <FaFileAudio style={{display:post.featuredAudio?.url? "block": "none"}} />
                                            <Text fontSize="sm">
                                                <Badge ml='1' colorScheme='green' paddingX={3} paddingY={1}  rounded={'full'} className='rounded-md'>
                                                    {post.categories[0].name}
                                                </Badge>
                                            </Text>
                                        </Stack>  
                                    */}
                            </VStack> 
                        </Flex>
                    </Box>         

                    <Flex direction="row" align="center"  style={{marginTop: '3em'}}>
                        <Text
                        bg={useColorModeValue('gray.50', 'gray.900')}
                        color={useColorModeValue('gray.700', 'gray.200')
                        }
                        fontWeight="semibold"
                        marginRight = {3}
                        id="recent"
                        >More Projects</Text>
                        <Box flexGrow="1"  height="1px" bg="gray.300"></Box>
                    </Flex>      
                       
                 </>   
  
                :

                <Box
                bg={useColorModeValue('white', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}
                maxW="100%" borderWidth='1px' borderRadius='md' overflow='hidden'
                className='shadow-sm'
                >
                <Flex justifyContent="space-between"  alignItems="stretch"   align="start">
                    <VStack align="start" maxWidth="65%" flexGrow={2} padding={5} paddingRight={0}>
                    <Stack direction="row" spacing="10px" align="center">
                        <Image
                        borderRadius='full'
                        boxSize='35px'
                        id="postcared_author_image"
                        src={post.author.photo.url}
                        alt={post.author.name}
                        />
                        
                        <Text id="postcard_author_minor" className='sm:text-xs md:text-sm'  fontWeight="semibold">{post.author.name}</Text>
                        {/* <Badge ml='1' colorScheme='green'>
                            New
                        </Badge> */}
                    </Stack>
                    
                        <Text fontSize="2xl"  id="postcard_title"  lineHeight={0.9} className="transition duration-700 cursor-pointer hover:text-green-600" fontWeight="bold">
                            <Link href={`/post/${post.slug}`}>
                                {post.title}
                            </Link>
                        </Text> 
                    
                    <Text noOfLines={2} id="postcared_content">{post.excerpt}</Text> 
                    <Box mt={5} id="postcard_details" spacing="10px" className='w-full' align="left" bg="transparent">
                                    <span>{moment(post.createdAt).format('MMM DD')}<FaFileAudio className='mr-5 ml-2' style={{display:post.featuredAudio?.url? "inline-block": "none"}}  /></span>
                                    {
                                        post.categories.map(category => 
                                            <Badge  key={category.slug}   ml='1' colorScheme='blue' style={{fontSize:"12px"}} paddingX={3} paddingY={1}  rounded= "base" className='rounded-md'>
                                                {category.name}
                                            </Badge>                                        
                                        )
                                    }

                                    {
                                        post.topics.map((topic,index) => 
                                            <Badge key={index}  ml='1' colorScheme='green' style={{fontSize:"10px"}} paddingX={3} paddingY={1}  rounded={'full'} className='rounded-md'>
                                                {topic.name}
                                            </Badge>
                                        )
                                    }
                                </Box>               
                </VStack> 

                    <div style={{
                        width:"33%", 
                        backgroundImage:`url("${post.featuredImage.url}")`,
                        backgroundSize:'cover', 
                        backgroundPosition:'center center'
                        
                        }}>
                    </div>
                </Flex>



                </Box>
                }

  
        </div>
    )
}

export default PostCard
