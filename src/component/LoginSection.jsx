import { useState } from "react";
import { ChevronRightIcon} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";

 const LoginSection=()=> {
  const { isOpen, onOpen, onClose } = useDisclosure();
   const [open,setOpen]=useState(false)
  return (
    <>
      
      <FaUser boxSize={6} onClick={onOpen} className="user-icon"/>
      
        
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent
          margin="0"
          position="absolute"
          top="15"
          right="0"
          borderRadius="0"
          height="90vh"
          width="300px"
        >
          <p>To check all available pujas & offers:</p>
          <ModalHeader className="login-button">Login / Create an account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Divider mb={4} />
              <Stack spacing={4}>
                <Box className="login-details">
                  <Text fontWeight="bold" color={"grey"}>Account Details</Text>
                  <Stack spacing={2} mt={2} textAlign={"left"}>
                    <div className="email">
                    <Button variant="link" className="my">My profile </Button>
                    <ChevronRightIcon  className="right-arrow"/>
                    </div>

                    <div className="email"> 
                    <Button variant="link" className="my puja">My Puja Bookings</Button>
                      <ChevronRightIcon  className="right-arrow"/>
                    </div>
                <div className="email">
                <Button variant="link" className="my book">My Ramotsav Bookings</Button>
                <ChevronRightIcon  className="right-arrow"/>

                </div>
                    
                    <Link to="/content-2"> 
                    <Button variant="link" colorScheme="green.500" className="bookk">
                    
                         Book a Puja
                         <div className="email">
                         <Text as="span" color="green.500"  className="book-puja">
                        New
                      </Text>
                         <ChevronRightIcon color="green.500" fontWeight={"bold"} className="right-arrow"/>

                         </div>
                    
                     
                     
                    </Button>
                    </Link>
                   
                  </Stack>
                </Box>
                <Divider />
                <Box>
                  <Text  color={"grey"} pl={5}>Help & Support for Puja Booking</Text>
                  <Stack spacing={2} mt={2}>
                    <Button variant="link" color={"black"} fontSize={"18px"}>080-711-74417</Button>
                    <Text fontSize="10px" pl={16}>You can call us from 10:30 AM - 7:30 PM</Text>
                    <div className="email">
                    <Button variant="link" color={"black"} >Email us</Button>
                    <Button variant="link" color={"black"}>WhatsApp us</Button>
                    </div>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </ModalBody>
          <ModalFooter>
          
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginSection;
