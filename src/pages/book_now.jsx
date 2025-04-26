import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Heading,
} from '@chakra-ui/react';

const InquiryForm = () => {
  const [inquiry, setInquiry] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInquiry((prevInquiry) => ({
      ...prevInquiry,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inquiry);
    // You can handle form submission here, e.g., sending data to a server
  };

  return (
    <Box maxW="lg" mx="auto" mt={8} p={4} boxShadow="md" borderRadius="md">
      <Heading as="h3" size="lg" mb={6}>
        Fill up the form below to book a room
      </Heading>
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <FormLabel htmlFor="name">Full Name</FormLabel>
          <Input
            id="name"
            name="name"
            type="text"
            value={inquiry.name}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            value={inquiry.email}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="message">Your Message</FormLabel>
          <Textarea
            id="message"
            name="message"
            value={inquiry.message}
            onChange={handleInputChange}
          />
        </FormControl>

        <Button colorScheme="blue" onClick={handleSubmit} size="lg">
          Book Now
        </Button>
      </VStack>
    </Box>
  );
};

export default InquiryForm;
