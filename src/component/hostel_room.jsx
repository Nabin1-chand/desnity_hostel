import { Box, Text, Heading, Flex, Button, IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import singleSitterRoom from '../assets/single_room.jpg';
import doubleSitterRoom from '../assets/doble_room.jpg';
import tripleSitterRoom from '../assets/triple_room.jpg';

// Motion wrapper
const MotionBox = motion(Box);

const images = [
  {
    url: singleSitterRoom,
    description: 'Single Sitter Room',
  },
  {
    url: doubleSitterRoom,
    description: 'Double Sitter Room',
  },
  {
    url: tripleSitterRoom,
    description: 'Three Sitter Room',
  },
];

const HostelRoom = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box width="100%" minHeight="100vh" bg="white" py="60px" px="20px">
      <Flex 
        direction={{ base: 'column', md: 'row' }} 
        align="flex-start" 
        justify="space-between"
        gap={{ base: "40px", md: "100px" }}
      >
        {/* Left Side: Text + Button + Image Gallery */}
        <MotionBox 
          flex="2" 
          mx="20px"
          my="40px"
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          width={{ base: "100%", md: "50%" }}
        >
          {/* Text and Button Row */}
          <Flex 
            direction={{ base: 'column', md: 'row' }} 
            align={{ base: 'flex-start', md: 'center' }} 
            justify="space-between"
            gap={{ base: "30px", md: "80px" }}
          >
            <Box flex="1">
              <Heading color="blue.200" fontSize="4xl" mb="4">
                Rooms
              </Heading>
              <Text color="black" fontSize="md">
                Enjoy your stay in one of 280 rooms and suites, with views of either the Boudhanath Stupa or the lush gardens and surrounding mountain ranges. Every room and suite has its own distinctly Nepalese interior, including local artifacts, wooden flooring, and Tibetan handwoven carpeting.
              </Text>
            </Box>

            {/* Button */}
            <Box mt={{ base: "20px", md: "0" }}>
              <Button
                variant="outline"
                colorScheme="teal"
                borderColor="teal.500"
                width="200px"
                size="lg"
                px={6}
                py={4}
                _hover={{ bg: "teal.500", color: "white" }}
              >
                All Rooms
              </Button>
            </Box>
          </Flex>

          {/* Image Gallery (with fixed height for images) */}
          <Box mt="50px" position="relative" overflow="hidden">
            <Box width="100%" overflow="hidden">
              <Flex
                transform={`translateX(-${currentImageIndex * 50}%)`} // Move by 50% to show half next image
                transition="transform 0.5s ease"
                width={`${images.length * 50}%`} // Flex width depends on number of images
              >
                {images.map((image, index) => (
                  <Box 
                    key={index} 
                    flex="0 0 50%" // Each image takes 50% of width
                    px="10px" 
                    style={{
                      width: index === images.length - 1 ? '100%' : '100%', // Full width for the last image
                      height: '400px', // Fixed height for all images to prevent resizing issues
                      objectFit: 'cover', // Ensure image covers the area without distorting aspect ratio
                    }}
                  >
                    <Box 
                      borderRadius="lg" 
                      overflow="hidden" 
                      boxShadow="lg"
                      width="100%" 
                      height="100%" // Ensure it fills the container
                    >
                      <img 
                        src={image.url} 
                        alt={`Room ${index}`} 
                        style={{
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover', // Maintain aspect ratio and fill the container
                          borderRadius: '8px'
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Flex>
            </Box>

            {/* Description + Controls */}
            <Flex align="center" justify="space-between" mt="4">
              <Heading color="blue.200" fontSize="2xl">
                {images[currentImageIndex].description}
              </Heading>
              <Flex gap="15px">
                <IconButton 
                  aria-label="Previous Image" 
                  icon={<ArrowBackIcon />} 
                  onClick={handlePrev}
                  colorScheme="teal"
                  variant="outline"
                />
                <IconButton 
                  aria-label="Next Image" 
                  icon={<ArrowForwardIcon />} 
                  onClick={handleNext}
                  colorScheme="teal"
                  variant="outline"
                />
              </Flex>
            </Flex>
          </Box>
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default HostelRoom;
