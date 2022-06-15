import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Script from 'next/script'
import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';
import { Box, Header, Text,Flex, useColorModeValue } from '@chakra-ui/react';

const CategoryPost = ({ posts , categoryName }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-md-10 mb-8">
        <Head>
        <title>Developers Craft </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href='/manifest.json' />  
        <link rel="apple-touch-icon"  href="/icons/apple-touch-icon.png" />

        <meta name="description" content={"Showcasing " +categoryName +" projects and products worked on by developers and devcommunities in Cameroon,Nigeria, Kenya and Africa at Large. Explore Web and mobile applications, Ai/ML and design projects brought about by African developers"} />
        <link rel="canonical" href="https://developerscraft.com" />

        <meta property="og:type" content="website" />

<meta name="theme-color" content="#276749" />

        <meta property="og:title" content="Developers Craft" />

        <meta property="og:description" content={"Showcasing " + categoryName +" projects and products worked on by developers and devcommunities in Cameroon,Nigeria, Kenya and Africa at Large. Explore Web and mobile applications, Ai/ML and design projects brought about by African developers"} />

        <meta property="og:image" content="https://developerscraft.com/favicon.ico" />

        <meta property="og:url" content="https://developerscraft.com" />

        <meta property="og:site_name" content="Developers Craft" />


        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6951101662003064"
        crossorigin="anonymous">
        </Script>
      </Head>
      <Box
        bg={useColorModeValue('grey.900', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        
        <Flex direction="row" align="center">
          <Text
          bg={useColorModeValue('gray.50', 'gray.900')}
          color={useColorModeValue('gray.700', 'gray.200')
          }
          fontWeight="semibold"
          marginRight = {3}
          id="recent"
          >{categoryName}({posts.length})</Text>
          <Box flexGrow="1"  height="1px" bg="gray.300"></Box>
      </Flex> 

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      

     

        <div className="col-span-1 lg:col-span-8">
          
          {!posts.length ? "No Projects Available": ""}
          {posts.map((post, index) => (
            <Box key={index}>
              <br />
              <PostCard post={post.node} />
            </Box>
            
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <br />
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div> 
      </Box>

    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);
  var categoryName = params.slug 
  if(params.slug == "app-development") categoryName = " App Development" 
  else if(params.slug == "ui-ux-design") categoryName = "UI/UX Development" 
  else if(params.slug == "web-development") categoryName = "Web Development" 
  else if(params.slug == "backend-architecture") categoryName = "Backend Architecture" 
  else if(params.slug == "game-development") categoryName ="Game Development" 
  else if(params.slug == "app-development") categoryName = "App Development" 
  else if(params.slug == "programming-concepts") categoryName ="Programming Concepts"
  else if(params.slug == "ai-ml") categoryName ="Ai/ML"
  else if(params.slug == "iot") categoryName ="Internet of Things"

  return {
    props: { posts, categoryName },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}