import {     
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue, } from '@chakra-ui/react'
import Head from 'next/head'
import Script from 'next/script'
import { EngagingHeader } from '../../components'
import Typewriter from 'typewriter-effect';

export default function About() {
return(
    <Box>
        <Head>
            <title>About Developers Craft </title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Showcasing software development projects and products worked on by developers and devcommunities in Cameroon,Nigeria, Kenya and Africa at Large. Explore Web and mobile applications, Ai/ML and design projects brought about by African developers." />
            <link rel="canonical" href="https://developerscraft.com" />

            <meta property="og:type" content="website" />

            <meta name="theme-color" content="#276749" />

            <meta property="og:title" content="Developers Craft" />

            <meta property="og:description" content="Showcasing software projects and products worked on by developers and devcommunities in Cameroon and Africa at Large. Explore Web and mobile applications, Ai/ML and design projects brought about by African developers." />

            <meta property="og:image" content="https://developerscraft.com/favicon.ico" />

            <meta property="og:url" content="https://developerscraft.com" />

            <meta property="og:site_name" content="Developers Craft" />

            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6951101662003064"
            crossorigin="anonymous">
            </Script>
        </Head>

      <Box maxW={'8xl'} >
        <Stack

          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 14 }}
          direction={{ base: 'column', md: 'row' }}
          justifyContent="stretch"
          >
          
          
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              id="about"
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'red.400',
                  zIndex: -1,
                }}>
                {/* Hi there, Welcome
              
              <br /> */}
              {/* <Text as={'span'} className="inline-block" color={'black.400'}>
                  I &nbsp; 
              </Text> */}
              {/* <Text as={'span'} className="inline-block" color={'green.400'}>
               </Text> */}
                    {/* <Typewriter
                        options={{
                            strings: ['am Dzekewong Karlson', 'Write Code.'],
                            autoStart: true,
                            delay:250,
                            loop: true,
                        }}
                    /> */}     
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                        .pauseFor(890)
                        .typeString('<span id="about_i_am"> This is the place')
                        // .changeDelay(30)
                        .pauseFor(250)
                        // .deleteAll()
                        .typeString('<br/><span id="about_i_write">where </span> <span id="code"> <span style="color:#f56565">&lsaquo;</span>Developers<span style="color:#f56565">&sol;&rsaquo;</span></span>')
                        .pauseFor(890)
                        // .deleteAll()
                        .typeString(`<br/><span id="about_here_to">share their </span> <span id="craft">Craft.</span>`)
                        .start();
                    }}
                    />

                </Text>

                
            </Heading>

              <Text color={'gray.500'} fontFamily="Roboto">
                Showcasing products/services built by Developers and DevCommunities which are innovative and/or solves some of your day-to-day and even future problems.
             </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>



              {/* <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={'red.400'}
                disabled
                _hover={{ bg: 'red.500' }}>
                Sign Up
              </Button> */}
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}>
                Explore
              </Button>
            </Stack>
          </Stack>
          
          {/* Image */}
          
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
            height= {300}
            >
            
            <Blob
              w={'150%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('red.50', 'red.400')}
            />

            <Box
            
              position={'relative'}
              height={'430px'}
              rounded={'2xl'}
              // boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>

                {/* <IconButton
                    aria-label={'Play Button'}
                    variant={'ghost'}
                    _hover={{ bg: 'transparent' }}
                    icon={<PlayIcon w={12} h={12} />}
                    size={'lg'}
                    color={'white'}
                    position={'absolute'}
                    left={'50%'}
                    top={'50%'}
                    transform={'translateX(-50%) translateY(-50%)'}
                /> */}

                <Image
                    alt={'Hero Image'}
                    fit={'cover'}
                    align={'center'}
                    w={'100%'}
                    h={'100%'}
                    src={
                        'blackCoder2.bd05ceeb_black.png'
                    // '/blackCoder2.bd05ceeb.png'
                    // '/about.png'
                    // 'developer-activity-concept-illustration_114360-1981.png'
                    // 'programmer-concept-illustration_114360-2417.png'
                    // '813d1dff2144c601606a2874a175bcc1.jpeg'
                    }
                />

            </Box>

          </Flex>
        </Stack>
      </Box>

      <Box>

            {/* <Text>
              We select projects that provide solution to specific problems that industries/people or provide innovative ways of improving the livelihood of the average person.
            </Text> */}
      </Box>
    </Box>
)
}

  
const PlayIcon = createIcon({
    displayName: 'PlayIcon',
    viewBox: '0 0 58 58',
    d:
      'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
  });
  
  export const Blob = (props) => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    );
  };