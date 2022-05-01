import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Stack,
    Center,
    useColorModeValue,
  } from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
    MdLink
  } from 'react-icons/md';

import { BsGithub, BsDiscord, BsPerson, BsLinkedin, BiMailSend } from 'react-icons/bs';
import Head from 'next/head'
import Script from 'next/script'
import { ContactForm, EngagingHeader } from '../../components'
import { Formik } from 'formik';


export default function Contact() {
return(
    <Box>
        <Head>
            <title>Contact Us</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="manifest" href='/manifest.json' />

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
        
        <Box maxW="full" mt={0} overflow="hidden">
            <Center> 
        <Flex>
          <Box
            bg="green.500"

            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Get in Touch</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.300">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">

                        <Button
                          size="md"
                          textAlign={'start'}
                          height="48px"
                          bg={'whiteAlpha.300'}
                          width="300px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdLocationOn color="red.300" size="20px" />}>
                          Yaounde, Cameroon
                        </Button>

                                               
                        <Button
                          size="md"
                          height="48px"
                          width="300px"
                          bg={'whiteAlpha.300'}
                          textAlign="start"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color="red.300" size="20px" />}>
                          +237-654451039    
                        </Button>

                        <Text>
                            
                        <Button
                          size="md"
                          height="48px"
                          width="300px"
                          bg={'whiteAlpha.300'}
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color="red.300" size="20px" />}>
                          devscraft22@gmail.com
                        </Button>                            
                        </Text>
 


                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsLinkedin size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                        <ContactForm />
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
        
        </Center>
        </Box>




    </Box>
)
}

function sendMail(){
    console.log(sendMail)
    alert("Sending Mail")
}
