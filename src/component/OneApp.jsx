import React from 'react'
import {
    Avatar,
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Image,
    Link,
    Text,
    VStack,
  } from "@chakra-ui/react";
const OneApp = () => {
  return (
    
    <Flex bg="white" justify="space-between"  py={{ base: 4, md: 6 }} px={{ base: 4, md: 16 }} flexDirection={{ base: 'column', md: 'row' }} alignItems="center">
    <Box width={{ base: "100%", md: "50%" }} mt={{ base: 12, md: 24 }} px={{ base: 4, md: 16 }}>
     
      <Heading as="h2" fontWeight="bold" textAlign="left" fontSize={{ base: "2xl", md: "3xl" }} my={4}>
      Download <Box as="span" color="#f18c33">Sri Mandir</Box> app now!!
     
      </Heading>
      <Text fontWeight="bold" textAlign="left" fontSize={"18px"} color={'grey'}>Connect to your beloved God, anytime, anywhere!</Text>
      <HStack mt={4} spacing={4}>
        <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_playstore_logo.bb4d1aa2.svg&w=256&q=75" alt="Google Play" />
        <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_appstore_logo.cab7778b.svg&w=256&q=75" alt="App Store" />
      </HStack>
    </Box>
    <Box width={{ base: "90%", md: "39%"}} >
      <Image src={"https://res.cloudinary.com/drdjty87p/image/upload/v1721393728/Screenshot_2024-07-19_182511_tvxd1o.png"} alt="Image" height={{ base: "auto", md: "450px" }} width="100%" objectFit="cover" />
    </Box>
  </Flex>
  )
}

export default OneApp
