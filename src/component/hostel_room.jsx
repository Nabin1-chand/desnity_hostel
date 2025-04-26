import { Box, Text, Heading, Flex, Button } from '@chakra-ui/react';  // Ensure Button is imported
import { motion } from 'framer-motion';  // Import framer-motion for animation

// Chakra's motion component for animated elements
const MotionBox = motion(Box);

const HostelRoom = () => {
  return (
    <Box width="100%" minHeight="100vh" bg="white" py="60px" px="20px">
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
          flex="2" 
          mx="20px"
          my="40px"  // Added vertical margin for more space between the text block and surrounding elements
          initial={{ y: 70, opacity: 0 }}  // Initial position: below the page and hidden
          animate={{ y: 0, opacity: 1 }}  // Final position: normal, fully visible
          transition={{ duration: 2 }}  // Duration of the animation
          width={{ base: "100%", md: "50%" }} // Ensures text width is 50% on larger screens
        >
          <Heading color="blue.200" fontSize="4xl" mb="6">
            Rooms
          </Heading>
          <Text color="black" fontSize="md">
            Enjoy your stay in one of 280 rooms and suites, with views of either the Boudhanath Stupa or the lush gardens and surrounding mountain ranges. Every room and suite has its own distinctly Nepalese interior, including local artifacts, wooden flooring, and Tibetan handwoven carpeting.
          </Text>
        </MotionBox>

        {/* Right Side: Button */}
        <Box flex="1" textAlign="center">
          <Button
            variant="outline"
            colorScheme="teal"
            borderColor="teal.500"
            width={"300px"}  // Set a fixed width for the button
            size="lg"
            px={6}
            py={4}
            _hover={{ bg: "teal.500", color: "white" }}  // Hover effect to improve button appearance
          >
            All Rooms
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default HostelRoom;
