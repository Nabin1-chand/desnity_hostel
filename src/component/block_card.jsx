import React from 'react';
import { Box, Button, Image, Heading, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const BlockCard = ({ title, description, imageUrl, path }) => {
  const navigate = useNavigate();
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      bg="white"
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image src={imageUrl} alt={title} height="200px" width="100%" objectFit="cover" />
      <VStack spacing={4} p={6} align="flex-start">
        <Heading as="h3" size="lg" color="teal.500">{title}</Heading>
        <Text color="gray.600">{description}</Text>
        <Button
          size={buttonSize}
          colorScheme="teal"
          onClick={() => navigate(path)}
          width="full"
        >
          Explore {title}
        </Button>
      </VStack>
    </Box>
  );
};

export default BlockCard;