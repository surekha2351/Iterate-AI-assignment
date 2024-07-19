import { Box, Button, Flex, Heading, HStack, Image, Link } from '@chakra-ui/react'
import React from 'react'
import { ChevronDownIcon } from "@chakra-ui/icons";
import LoginSection from './LoginSection';
import '../../src/App.css'


const Navbar = () => {
  return (
    <Flex as="header" align="center" justify="space-between" p={4} borderBottom="1px" borderColor="gray.200">
    <Flex align="center" spacing={2}>
      <Image src="https://res.cloudinary.com/drdjty87p/image/upload/v1721382700/Screenshot_2024-07-19_152017_blspp7.png" alt="Sri Mandir Logo" boxSize="60px" />
      <Box ml={2}>
        <Heading as="h1" size="lg" fontWeight="bold">Sri Mandir</Heading>
       
      </Box>
    </Flex>
    <HStack spacing={8}>
      <Link color="orange.600" fontWeight="bold">Home</Link>
      <Link color="gray.600" fontWeight="bold">Puja</Link>
      <Link color="gray.800" fontWeight="bold">Panchang</Link>
      <Link color="gray.800" fontWeight="bold">Temples</Link>
      <Link color="gray.800" fontWeight="bold">Library<ChevronDownIcon /> </Link>
      
     
    </HStack>
    <div display="flex" className='r'>
    <Box position="relative" className='b'>
        <Button variant="link" rightIcon={<ChevronDownIcon />}>English</Button>
      </Box>
    <Button w={10} h={10} bg="gray.200" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
      <LoginSection/>
    </Button>
    </div>
  </Flex>
  )
}

export default Navbar