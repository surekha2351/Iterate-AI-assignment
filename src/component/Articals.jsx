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
const Articals = () => {
  return (
    <div>
      {/* Puja Categories Section */}
<Box bg="slate.50" display="flex" flexDirection="column" justifyContent="center" alignItems="center" pt={{ base: 8, md: 16 }} px={{ base: 4, md: 16 }}>
  <Box textAlign="center" mb={{ base: 8, md: 16 }}>
    <Heading fontSize={{ base: "2xl", md: "4xl" }} mb={4}>Read interesting articles about upcoming fasts, festivals, and everything around Sanatan Dharma.</Heading>
    <Text fontSize="lg" color="gray.600">Read interesting articles about upcoming fasts, festivals, and everything around Sanatan Dharma.</Text>
    <Button variant="link" fontSize="lg" fontWeight="bold" color="#F18912" mt={4} _hover={{ textDecoration: 'underline' }}>Read All →</Button>
  </Box>

  <Flex  justify="center" gap={8}>
    <Box textAlign="center" mx="4">
      <Image src="https://res.cloudinary.com/drdjty87p/image/upload/v1721395132/Screenshot_2024-07-19_184348_o0eqvx.png" alt="Puja Category 1" width={"850px"} mx="auto" />
      <Text mt={4} fontWeight="semibold" color="black">Aarti </Text>
      <Text mt={4} fontWeight="semibold" color="gray.600">Find complete lyrics of all the famous Aartis and easily worship your beloved God</Text>
      <Text mt={4} fontWeight="semibold"  color="orange.600">Read All</Text>
    </Box>
    <Box textAlign="center" mx="4">
      <Image src="https://res.cloudinary.com/drdjty87p/image/upload/v1721395789/Screenshot_2024-07-19_185842_gpx9ff.png" alt="Puja Category 1" width={"300px"} mx="auto" />
    <Text mt={4} fontWeight="semibold" color="black">Chalisa </Text>
      <Text mt={4} fontWeight="semibold" color="gray.600">You will get complete Chalisa of all the deities. Read Chalisa during the Pooja of your beloved deities and seek their grace.</Text>
      <Text mt={4} fontWeight="semibold"  color="orange.600">Read All</Text>
    </Box>
    <Box textAlign="center" mx="2">
      <Image src="https://res.cloudinary.com/drdjty87p/image/upload/v1721395133/Screenshot_2024-07-19_184505_zjmoba.png" alt="Puja Category 1" width={"400px"} mx="auto" />
      <Text mt={4} fontWeight="semibold" color="black" text-align={"left"}>Mantra </Text>
      <Text mt={4} fontWeight="semibold" color="gray.600"  textalign={"left"}>Here you will find all the powerful mantras for peace of mind. Chant these mantras and remove all the obstacles from life.</Text>
      <Text mt={4} fontWeight="semibold"  color="orange.600"  text={"left"}>Read All</Text> 
    </Box>
    <Box textAlign="center" mx="4">
      <Image src="https://res.cloudinary.com/drdjty87p/image/upload/v1721395133/Screenshot_2024-07-19_184536_vek3tz.png" alt="Puja Category 1" width={"800px"} mx="auto" />
    <Text mt={4} fontWeight="semibold" color="black">Ayurvedic & Home Remedies </Text>
      <Text mt={4} fontWeight="semibold" color="gray.600">We have brought the precious knowledge of Ayurveda for you, these remedies will help you lead a healthy life.</Text>
      <Text mt={4} fontWeight="semibold"  color="orange.600">Read All</Text>
        </Box>
   
  </Flex>
</Box>
    </div>
  )
}

export default Articals
