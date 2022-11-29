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

import { Formik } from 'formik';


export default function ContactForm (){
    return(
        <VStack spacing={5}>
                        
    <Formik
        initialValues={{
            name:'',
            email:'',
            message:''
        }}

        validate = {values =>{
            const errors = {};


            if (!values.email || !values.message || !values.name) {
                errors.email = 'Required';
                errors.name = 'Required';
                errors.message = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid Email';
              }
              return errors;
            }
        
        }
            onSubmit={(values, { setSubmitting }) => {
                       
                fetch('https://gicmailer.herokuapp.com/',{
                  method:'POST',
                  body: JSON.stringify({
                    email: values.email,
                    name: values.name,
                    message: values.message,
                    to:'devscraft22@gmail.com',
                    as:'contact'
                  }),
                  headers:{
                    'Content-type':'application/json'
                  }
                }).then(response => response.json())
                .then(json =>{
                  console.log('******response arrived*****')
                  console.log(json)
                  if(json.status){
                       values.email = ""
                       values.name = ""
                       values.message = ""
                    document.getElementById("sent_status_success").style.display="block"
                  }else{
                    document.getElementById("sent_status_failed").style.display="block"
                  }
                  setTimeout(()=>{
                    values.email = ""
                    document.getElementById("sent_status_success").style.display="none"
                    document.getElementById("sent_status_failed").style.display="none"

                  },15000)
                  
                }).catch(e =>{
                  // if(json.status){
                  //   document.getElementById("sent_status_success").style.display="block"
                  // }else{
                    document.getElementById("sent_status_failed").style.display="block"
                  // }
                  setTimeout(()=>{
                   
                    document.getElementById("sent_status_success").style.display="none"
                    document.getElementById("sent_status_failed").style.display="none"

                  },15000)

                })

                }}
              >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    }) => (
                      <form onSubmit={handleSubmit}>
                          <Stack direction={'column'}> 
                                <FormControl id="name">
                                    {/* <FormLabel>Your Name</FormLabel> */}
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement
                                        pointerEvents="none"
                                        children={<BsPerson color="gray.800" />}
                                        />
                                        <Input
                                        placeholder={'Your Name'}
                                        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                        type="text"
                                        name='name'
                                        size="md"
                                        onChange={handleChange}
                                        value={values.name}
                                        _focus={{
                                        bg: 'whiteAlpha.300',
                                        }}
                                    /> 

                                    </InputGroup>
                                </FormControl>

                              {errors.name && touched.name && errors.name}

                            <FormControl id="mail">
                                {/* <FormLabel>Mail</FormLabel> */}
                                <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement
                                    pointerEvents="none"
                                    children={<MdOutlineEmail color="gray.800" />}
                                    />
                            <Input
                                placeholder={'Your email address'}
                                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                type="email"
                                size="md"
                                name='email'
                                onChange={handleChange}
                                value={values.email}
                                _focus={{
                                  bg: 'whiteAlpha.300',
                                }}
                              />                                    
                                </InputGroup>
                            </FormControl>
                            {errors.email && touched.email && errors.email}
 
                        
                            <FormControl id="message">
                                {/* <FormLabel>Message</FormLabel> */}
                            <Textarea
                                placeholder={'Your Message'}
                                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                type="text"
                                name='message'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                                _focus={{
                                  bg: 'whiteAlpha.300',
                                }} />  

                            </FormControl>


                               

                          {errors.message && touched.message && errors.message}
                                <br />
                          <Button 
                           type="submit" 
                           disabled={isSubmitting}
                            bg={useColorModeValue('green.400', 'green.800')}
                            color={useColorModeValue('white', 'gray.800')}
                            _hover={{
                                bg: 'green.600',
                            }}                          
                          >
                                Submit
                            </Button>

                            <br />
                            <Text display="none" fontFamily="Roboto" id="sent_status_success" color={'green.500'} ><strong>Message Sent!</strong></Text>
                            <Text display="none" fontFamily="Roboto"  id="sent_status_failed"  color={'red.500'} ><strong>Oops, operation failed, try again</strong></Text>                                       
                          </Stack>
                          
                      </form>
                    )}
    </Formik>


      </VStack>
    )
}