import { Box, IconButton, Image, HStack } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

import logo from '../assets/hoste1.jpg'; 
import logo2 from '../assets/hostel2.jpg'; 
import logo3 from '../assets/hostel3.jpg'; 

const GalleryPage = () => {
  const images = [logo, logo2, logo3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const getLeftIndex = () => (currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  const getRightIndex = () => (currentIndex === images.length - 1 ? 0 : currentIndex + 1);

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%" bg="white" py="60px" px="20px" p={4}>
      
      {/* Carousel */}
      <Box position="relative" width="100%" maxWidth="1200px" height="80vh" overflow="hidden" mb={8}>
        <HStack spacing={8} justify="center" align="center" position="absolute" width="100%" top="50%" transform="translateY(-50%)">
          
          {/* Left small image */}
          <Image
            src={images[getLeftIndex()]}
            alt="Previous"
            objectFit="cover"
            // width="150px"
            // height="250px"
            width="800px"
            height="600px"
            opacity="0.6"
            // borderRadius="md"
            // transform="scale(0.8)"
            // boxShadow="md"
          />

          {/* Main big center image */}
          <Image
            src={images[currentIndex]}
            alt="Current"
            objectFit="cover"
            width="600px"
            height="600px"
            // borderRadius="xl"
            // boxShadow="2xl"
          />

          {/* Right small image */}
          <Image
            src={images[getRightIndex()]}
            alt="Next"
            objectFit="cover"
            // width="150px"
            // height="250px"
            width="800px"
            height="600px"
            opacity="0.6"
            // borderRadius="md"
            // transform="scale(0.8)"
            // boxShadow="md"
          />
        </HStack>
      </Box>

      {/* Controls */}
      <HStack spacing={6}>
        <IconButton
          icon={<FaArrowLeft />}
          onClick={prevImage}
          colorScheme="teal"
          aria-label="Previous Image"
          size="lg"
        />
        <IconButton
          icon={<FaArrowRight />}
          onClick={nextImage}
          colorScheme="teal"
          aria-label="Next Image"
          size="lg"
        />
      </HStack>

    </Box>
  );
};

export default GalleryPage;
