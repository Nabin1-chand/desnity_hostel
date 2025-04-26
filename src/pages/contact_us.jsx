import React, { useEffect } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Stack,
  Heading,
  useToast,
  VStack,
} from '@chakra-ui/react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  const toast = useToast(); // Used for showing success/error messages

  const handleSubmit = (e) => {
    e.preventDefault();

    // Normally, you would submit the form data to a server here
    toast({
      title: "Message sent.",
      description: "We have received your message and will get back to you soon.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box
      maxW="lg"
      mx="auto"
      mt={10}
      p={6}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <VStack spacing={6} align="flex-start">
        <Heading as="h2" size="xl" textAlign="center" color="teal.600">
          Contact Us
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" type="text" placeholder="Your name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" placeholder="Your email" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                id="message"
                placeholder="Your message"
                rows={6}
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              width="full"
              mt={4}
            >
              Send Message
            </Button>
          </Stack>
        </form>
      </VStack>
    </Box>
  );
};

export default Contact;
