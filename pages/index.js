import Head from 'next/head'
import Script from 'next/script'
import { PostCard,Categories, PostWidget, Advertisement, Follow} from '../components'
import { getPosts } from '../services'
import { VisuallyHidden,Box, Input, InputRightElement, InputGroup, Button,useColorModeValue,Text, Stack, chakra, Flex, isTruncated, } from '@chakra-ui/react'
import { FaCogs,FaFutbol, FaMusic, FaGlobeAfrica, FaLanguage, FaHeartbeat } from 'react-icons/fa';

import { FeaturedPosts } from '../sections'

export default function Home({posts}) {

  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  return (
    
    <div className="container mx-auto  pb-8">
      <Head>
        <title>Green Lights</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Check out  Articles in pidgin and english about African Local Cultures, Agriculture, Music, Health and Languages meant to Educate and Entertain you." />
        <link rel="canonical" href="https://thegreenlights.net" />

        <meta property="og:type" content="website" />

        <meta property="og:title" content="GreenLights" />

        <meta property="og:description" content="Check out  Articles in pidgin and english about African Local Cultures, Agriculture, Music, Health and Languages meant to Educate and Entertain you." />

        <meta property="og:image" content="https://thegreenlights.net/favicon.ico" />

        <meta property="og:url" content="https://thegreenlights.net" />

        <meta property="og:site_name" content="GreenLights" />


        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6951101662003064"
        crossorigin="anonymous">
        </Script>
      </Head>
      
      {/* SearchBar Section */}
      <InputGroup  
            bg={useColorModeValue('white', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            className='rounded-md' size='lg' alignItems="center" justifyContent="center"  mb={8} >
        <Input
          pr='4.5rem'
          placeholder='Whats on your mind'
          height={70}
          className='rounded-md'
        />
        <InputRightElement width='6rem' className='position-relative top-10'>
          <Button bg="green.400" color="white" className='hover:bg-green-800' mt={5}  mr={5} p={5} size='md'>
            Search
          </Button>
        </InputRightElement>
      </InputGroup>


      {/* Popular Search Section */}
      <Flex   mb={8}>
        <Text id="popular_searches" className='xs:hidden md:block'   flexGrow={1}>
          Popular Searches: 
        </Text>
        <Box flexGrow={6} >
          <Stack direction={'row'} justifyContent="space-between"  align="center" mb={5} >

                <Box maxW="30%" flexGrow={1}>
                  <Text className='category' isTruncated textAlign="start">
                    <SocialButton label={'Twitter'}  href={'#'}>
                    <FaCogs color="" />
                    </SocialButton>  
                     &nbsp;Technology            
                  </Text>
                </Box>


                <Box  maxW="30%" flexGrow={1}>
                <Text className='category' flexGrow={1}  textAlign="start"  isTruncated>
                  <SocialButton label={'YouTube'} href={'#'}>
                  <FaLanguage color='' />
                  </SocialButton>   
                  &nbsp;Pidgin          
                </Text>

                </Box>


                <Box  maxW="30%" flexGrow={1}>
                <Text className='category'  textAlign="start"  isTruncated >
                  <SocialButton label={'Instagram'} href={'#'}>
                  <FaGlobeAfrica color='' />
                  </SocialButton>    
                  &nbsp;Culture
                </Text>
                </Box>


          </Stack>

          <Stack direction={'row'}  justifyContent="space-between"  align="center">

          <Box   maxW="30%"  flexGrow={1}>
          <Text className='category'  textAlign="start"   isTruncated flexGrow={1}>
              <SocialButton label={'Instagram'} href={'#'}>
              <FaHeartbeat color='' />
              </SocialButton>  
              &nbsp;Health
          </Text>
          </Box>


          <Box  maxW="30%"  flexGrow={1}>
          <Text className='category'  textAlign="start"   isTruncated flexGrow={1} >
            <SocialButton label={'Twitter'} href={'#'}>
            <FaFutbol color="" />
            </SocialButton>  
            &nbsp;Sports      
          </Text>
            
          </Box>


          <Box maxW="30%"  flexGrow={1}>
          <Text className='category'  textAlign="start"   isTruncated>
              <SocialButton label={'YouTube'} href={'#'}>
              <FaMusic color='' />
              </SocialButton> 
              &nbsp; Music 
          </Text>        
          </Box>

          </Stack>
        </Box>
      </Flex>

      {/* <FeaturedPosts /> */}
      <Box className=" grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main section for posts  */}
          <div className="lg:col-span-8 col-span-1">
              {
              posts.map((post,index) => <PostCard post={post.node} index={index} key={index} />)
              } 
            </div>

        {/* side section for categories and stuffs */}
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <Follow />
              <Categories />
              <Advertisement/>
              {/* <PostWidget /> */}
            </div>
          </div>
      </Box>

    </div>

  )
}


export async function getStaticProps(){
  const posts = (await getPosts()) || [];

  return {
    props:{ posts }
  }
}