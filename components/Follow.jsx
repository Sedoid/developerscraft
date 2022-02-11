import React,{useState,useEffect} from 'react'
import Link from 'next/link'
  
import {  
    VisuallyHidden,
    Box, 
    useColorModeValue,
    Stack,
    Center, 
    chakra,} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Follow = () => {

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
        <Box
        bg={useColorModeValue('white', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        className="shadow-lg rounded-md p-5 mb-8 pb-6" borderWidth='1px' borderRadius='md'>
            <h5 className="text-xl mb-2 font-semibold border-b pb-1 sub_title">
                Follow Us
            </h5>
            <Box>
                
                <Center className="mb-4 follow_content">
                    If you like the content, consider following us on social media to get updated
                </Center>
                <Stack direction={'row'} align="center" justifyContent="center" spacing={7}>

                    <SocialButton label={'Twitter'} href={'https://twitter.com/IghtsGreen'}>
                    <FaTwitter style={{color:'#00acee'}}/>
                    </SocialButton>

                    <SocialButton label={'Whatsapp'} href={'https://wa.me/+237654451039'}>
                    <FaWhatsapp color='' style={{color:'#25D366'}} />
                    </SocialButton>

                    <SocialButton label={'Instagram'} href={'https://www.instagram.com/_greenlights__/'}>
                    <FaInstagram style={{color:'#fb3958'}} />
                    </SocialButton>

                    <SocialButton label={'Facebook'} href={'https://www.facebook.com/GreenLights-111635238105668'}>
                    <FaFacebook  style={{color:'#3b5998'}} />
                    </SocialButton> 

              </Stack>
            </Box>
        </Box>
    )
}

export default Follow
