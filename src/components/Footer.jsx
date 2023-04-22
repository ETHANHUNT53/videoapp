import { Box, Button, HStack, Heading, Stack, VStack , Input ,Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend , AiFillGithub, AiFillInstagram, AiFillFacebook} from "react-icons/ai"
import {FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>

        <Stack direction={["column" , "row"]}>

            <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                <Heading size={"md"} textTransform={"uppercase"} textAlign={["center" , "left"]}>
                    Subscribe To Get Updates
                </Heading>

                <HStack borderBottom={"2px solid white"} py={"2"}>
                    <Input placeholder='Enter Email Here...' border={"none"} borderRadius={"none"} focusBorderColor='none' outline={"none"}></Input>
                    <Button p={'0'} colorScheme='purple' variant={"ghost"} borderRadius={"0 20px 20px 0"}> 
                        <AiOutlineSend size={"20"}  />
                    </Button>
                </HStack>
            </VStack>

            <VStack w="full" borderLeft={["none" , "1px solid white"]} borderRight={["none" , "1px solid white"]}>
                <Heading textTransform={"uppercase"} textAlign={"center"}>
                    VIDEO HUB
                </Heading>
                    <Text>All rights recieved</Text>
            </VStack>

            <VStack w="full" >
                <Heading size={"md"} textTransform={"uppercase"}>
                    Social Media
                </Heading>
                <Button p={"1"} colorScheme={"purple"} variant={"link"} ><a href='https://github.com/ETHANHUNT53?tab=repositories' target='_blank'><AiFillGithub size={"30px"} /></a></Button>
                <Button p={"1"} colorScheme={"purple"} variant={"link"} ><a href='https://www.instagram.com/' target='_blank'><AiFillInstagram size={"30px"} /></a></Button>
                <Button p={"1"} colorScheme={"purple"} variant={"link"} ><a href='https://www.facebook.com/shrey.jaiswal.5220/' target='_blank'><AiFillFacebook size={"30px"} /></a></Button>
            </VStack>
        </Stack>



    </Box>
  )
}

export default Footer