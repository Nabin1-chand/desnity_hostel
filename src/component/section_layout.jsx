import { Box, Text, VStack, Heading, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';  // Import framer-motion for animation
import logo from '../assets/logo.jpg'; // Adjust the path to your logo image
import GalleryPage from './gallery';
import HostelRoom from './hostel_room';

// Chakra's motion component for animated elements
const MotionBox = motion(Box);

const SectionLayout = () => {
  return (
    <Box width="100%" minHeight="100vh" bg="white" py="60px" px="20px" >
      <Flex 
        direction={{ base: 'column', md: 'row' }} 
        align="center" 
        justify="space-between"
        height="100%"
        gap={{ base: "40px", md: "80px" }}  // Dynamic gap based on screen size
      >
        {/* Left Side: Text with Animation */}
        <MotionBox 
          textAlign={{ base: 'center', md: 'left' }} 
          flex="1" 
          mx="20px"
          my="40px"  // Added vertical margin for more space between the text block and surrounding elements
          initial={{ y: 70, opacity: 0 }}  // Initial position: below the page and hidden
          animate={{ y: 0, opacity: 1 }}  // Final position: normal, fully visible
          transition={{ duration: 2 }}  // Duration of the animation
          width={{ base: "100%", md: "50%" }} // Ensures text width is 50% on larger screens
        >
          <Heading color="blue.200" fontSize="4xl" mb="6">
            Welcome to Destiny Hostel
          </Heading>
          <Text color="black" fontSize="md">
            Set on 37 acres of landscaped grounds, ideally located only 4 kilometres away from the international airport. Situated in a city with a plethora of ancient sites and fascinating architecture, our hotel is a gateway to the city’s top attractions like Boudhanath, Pashupatinath, Basantapur, Thamel, Bhaktapur Durbar Square, Patan Durbar Square and much more. You not only experience luxurious hospitality, but you also get a cultural fest while at Hyatt Regency Kathmandu.
          </Text>
        </MotionBox>

        {/* Right Side: Diamond Box */}
        <Box 
          flex="0 0 auto" 
          display="flex" 
          alignItems="center" 
          justifyContent="flex-end" 
          width={{ base: "100%", md: "50%" }} // Ensure box also takes 50% width on larger screens
          mr="40px"  // Margin right for the box (optional)
        >
          <Box 
            w="350px"  // Set a fixed width
            h="350px"  // Set a fixed height
            bg="black" 
            transform="rotate(45deg)"  // Rotate to create diamond shape
            display="flex" 
            alignItems="center" 
            justifyContent="center"
            position="relative" // Allow absolute positioning within this box
          >
            <VStack transform="rotate(-45deg)" spacing={1}>
              <Image
                src={logo}
                alt="Logo"
                boxSize="300px" // Increased size of the logo to match the larger box
                borderRadius="full"
                objectFit="cover" // Ensure the image doesn't stretch or distort
              />
            </VStack>
          </Box>
        </Box>
      </Flex>
      <Box mt="150px">
             <Box mb={8}>
               <Text fontSize="3xl" fontWeight="bold" color="teal.500" mb={6} textAlign="center">
                Our Gallery
              </Text>
          </Box>
  <GalleryPage />
  <HostelRoom/>
</Box>
    </Box>
  );
};

export default SectionLayout;
