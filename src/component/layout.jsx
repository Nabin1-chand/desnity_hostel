import React from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
// import Navbar from './Navbar';
// import SideDrawer from './SideDrawer';
import Navbar from './NavBar';
import SideDrawer from './side_bar';
import { Outlet } from 'react-router-dom'; 
const Layout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Navbar onOpen={onOpen} />
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      
      <Box mt="10" p="4">
        {/*  This renders the active route */}
        <Outlet />
      </Box>
    
    </Box>
  );
};

export default Layout;
