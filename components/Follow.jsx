import React,{useState,useEffect} from 'react'
import Link from 'next/link'
  
import {  
    VisuallyHidden,
    Button,
    Box, 
    useColorMode,
    useColorModeValue,
    Text,
    Stack,
    SocialButton,
    Center, 
    chakra,} from '@chakra-ui/react'
import { getCategories } from '../services'
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
                Follow Me
            </h5>
            <Box>
                
                <Center className="mb-4 follow_content">
                    If you like the content, consider following us on social media to get updated
                </Center>
                <Stack direction={'row'} align="center" justifyContent="center" spacing={7}>

                    <SocialButton label={'Twitter'} href={'#'}>
                    <FaTwitter color=""/>
                    </SocialButton>

                    <SocialButton label={'Whatsapp'} href={'#'}>
                    <FaWhatsapp color='' />
                    </SocialButton>

                    <SocialButton label={'Instagram'} href={'#'}>
                    <FaInstagram color='' />
                    </SocialButton>

                    <SocialButton label={'Facebook'} href={'#'}>
                    <FaFacebook color='' />
                    </SocialButton> 

              </Stack>
            </Box>
        </Box>
    )
}

export default Follow
