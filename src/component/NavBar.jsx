import React from 'react';
import {
  Flex,
  Text,
  IconButton,
  HStack,
Button,
Image ,
useBreakpointValue,
Menu,
MenuButton,
MenuList,
MenuItem,
MenuDivider,
} from '@chakra-ui/react';
import { HamburgerIcon , ChevronDownIcon} from '@chakra-ui/icons';
import logo from '../assets/logo.jpg'; // Adjust the path to your logo image
import { useNavigate,useLocation  } from 'react-router-dom';
const Navbar = ({ onOpen }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const showTextOnMobile = useBreakpointValue({ base: true, md: false });
  const navigate = useNavigate();
  const location = useLocation();
  const isInquiryPage = location.pathname === '/inquiry';
  return (
    <Flex
    as="nav"
    align="center"
    justify="space-between"
    padding="0.5rem 1rem"
    color="white"
    // bg="blue.500"
    bg={isInquiryPage ? 'transparent' : 'blue.500'}
    position="fixed"
    top="0"
    left="0"
    width="100%"
    zIndex="1000"
    // boxShadow="sm"
  >
    {/* Conditionally render the Hamburger icon and "Destiny Hostel" text */}
    {!isInquiryPage && (
      <Flex align="center" gap={2}>
        <IconButton
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="ghost"
          aria-label="Open menu"
          color="white"
        />
        <Text fontWeight="bold" fontSize="lg">
          Destiny Hostel
        </Text>
      </Flex>
    )}

    {/* Conditionally render the logo and hostel name */}
    {!isInquiryPage && (
      <Flex align="center" gap={2}>
        <Image
          src={logo}
          alt="Logo"
          boxSize="60px"
          borderRadius="full"
        />
        <Text fontWeight="bold" fontSize="lg">
          Destiny Girl Hostel
        </Text>
      </Flex>
    )}

    {/* Conditionally render the "Book Now" button */}
    {!isInquiryPage && (
      <Button
        variant="outline"
        colorScheme="white"
        borderColor="white"
        onClick={() => navigate('/inquiry')} // Navigate to the inquiry form page
        size="sm"
        px={5}
      >
        Book Now
      </Button>
    )}
  </Flex>


  );
};

export default Navbar;


// <Image
// src={logo}
// alt="Logo"
// boxSize="180px"
// borderRadius="full"
// position="absolute"
// right="1rem"
// display="block" // Ensure the image is visible on all screen sizes
// />