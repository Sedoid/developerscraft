import React from 'react'
import { useColorMode, Flex, Button, Box,Container, Stack,useColorModeValue } from '@chakra-ui/react'
import { Header} from '.'
import { DarkModeSwitch } from '../components'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import Footer from './Footer'


const Layout = ({children}) => {

    const {colorMode} = useColorMode()
    return (
        <>
            <Header />
            {/* <StickNav>
                <Box>
                    <NextLink href="/" passHref>
                        <Button as="a" variant='ghost' p={[1,2,4]} _hover={{backgroundColor: navHoverBackground[colorMode]}}>Home</Button>
                    </NextLink>
                </Box>
                <DarkModeSwitch />
            </StickNav> */}
            
            <Box 
                bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}>
                <Container as={Stack} maxW={'6xl'} py={10}>
                    {children}
                </Container>                
                     
            </Box>
      

            <Footer />

            
        </>
    ) 
}

export default Layout
