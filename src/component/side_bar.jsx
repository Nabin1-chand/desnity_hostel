import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  
  Button,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const SideDrawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate(); 
  const handleNavigate = (path) => {
    navigate(path);
    onClose(); // close the drawer after navigation
  };
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}  color="blue" bg="red.300"> 
      <DrawerOverlay />
      <DrawerContent w="100vw" maxW="100vw">
        <DrawerCloseButton  left="1rem" top="1rem" right="auto"  bg="transparent"   _hover={{ bg: 'transparent' }}
  _focus={{ boxShadow: 'none' }}/>
        <DrawerBody display="flex" mt={10} p={5}>
        <VStack spacing={6} align="center">
                      <Button variant="ghost" color="blue"  _hover={{ bg: 'whiteAlpha.300' }}  onClick={() => handleNavigate('/block-a')}>
                        Block A
                      </Button>
                      <Button variant="ghost" color="blue" _hover={{ bg: 'whiteAlpha.300' }} onClick={() => handleNavigate('/block-b')}>
                        Block B
                      </Button>
                      <Button variant="ghost" color="blue" _hover={{ bg: 'whiteAlpha.300' }} onClick={() => handleNavigate('/block-c')}>
                        Block C
                      </Button>
                    
                      </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
