import React,{useEffect,useState} from 'react'
import Link from 'next/link';
import { getCategories } from '../services'
import { Text,Container,Stack,Box,  useColorModeValue, Flex,Image, position } from '@chakra-ui/react'
import DarkModeSwitch from './DarkModeSwitch';
import { BsInfoCircle,BsEnvelope } from 'react-icons/bs';


function Header() {
    const [categories,setCategories] = useState([])
    
    useEffect(() =>{
        getCategories()
            .then(newCategories => setCategories(newCategories))
        
    },[])
    return (
        <Box 
        bg={useColorModeValue('green.700', 'gray.900')}
        color={useColorModeValue('gray.50', 'gray.200')} id="header">
            <Container id="top"  as={Stack} maxH={64} maxW={'6xl'} pt={3} pb={3}>
                
                <div className="w-full inline-block mt-3">
                   
                    <Flex justifyContent="space-between">
                        {/* <DarkModeSwitch /> */}
                        <Link href="/" style={{position:"relative",left:"150px"}} className="cursor-pointer mini_title invisible sm:visible"> 
                            <Image  src = {useColorModeValue('/mini_logo_light.png', '/mini_logo_dark.png')} alt="Developers Craft Logo"  height={50} />
                        </Link> 

                        {/* <Link href="/" > 
                            <Image  className="cursor-pointer invisible md:visible" src = {useColorModeValue('/Logo_light.png', '/logo_dark-removebg-preview.png')}  height={50} />
                        </Link> 
                        */}

                    <Flex direction="row" className="position-relative md:float-left md:contents sm:contents sm:float-left" alignItems="center">
                        {/* {
                            categories.map(category => 
                            <Link key={category.slug} href={`/category/${category.slug}`}>
                                <Text className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer sub_title">
                                    {category.name}
                                </Text>
                            </Link>)
                        } */}


                        <Link href={`/about`}>
                            <Text className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer sub_title">
                                <BsInfoCircle />
                            </Text>
                        </Link>

                        <Link href={`/contact`}>
                                <Text className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer sub_title">
                                    <BsEnvelope />
                                </Text>
                               
                            </Link>

                        <DarkModeSwitch />

                    </Flex> 


                    </Flex>

                    {/* <div className="md:float-left md:contents sm:contents sm:float-left  mt-3"> */}

                        
                </div>
                
                
            </Container> 
            <Box
                bg={useColorModeValue('green.500', 'green.500')}
                color={useColorModeValue('gray.700', 'gray.200')}>

                <Container textAlign="center"  py={7} id="banner-container"  as={Stack} maxW={'6xl'} className=''>
                <Text fontWeight="bold" fontSize="19px"  color="white" id="banner" className="capitalize">What developers Do and How they do it</Text>
                </Container>                 
            </Box>
          
        </Box>

    )
}

export default Header

// import { ReactNode } from 'react';
// import {
//   Box,
//   Flex,
//   Avatar,
//   Link,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
//   useColorMode,
//   Center,
// } from '@chakra-ui/react';
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

// export default function Header() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <>
//       <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
//         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//           <Box>Logo</Box>

//           <Flex alignItems={'center'}>
//             <Stack direction={'row'} spacing={7}>
//               <Button onClick={toggleColorMode}>
//                 {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
//               </Button>

//               <Menu>
//                 <MenuButton
//                   as={Button}
//                   rounded={'full'}
//                   variant={'link'}
//                   cursor={'pointer'}
//                   minW={0}>
//                   <Avatar
//                     size={'sm'}
//                     src={'https://avatars.dicebear.com/api/male/username.svg'}
//                   />
//                 </MenuButton>
//                 <MenuList alignItems={'center'}>
//                   <br />
//                   <Center>
//                     <Avatar
//                       size={'2xl'}
//                       src={'https://avatars.dicebear.com/api/male/username.svg'}
//                     />
//                   </Center>
//                   <br />
//                   <Center>
//                     <p>Username</p>
//                   </Center>
//                   <br />
//                   <MenuDivider />
//                   <MenuItem>Your Servers</MenuItem>
//                   <MenuItem>Account Settings</MenuItem>
//                   <MenuItem>Logout</MenuItem>
//                 </MenuList>
//               </Menu>
//             </Stack>
//           </Flex>
//         </Flex>
//       </Box>
//     </>
//   );
// }
