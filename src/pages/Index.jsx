import React from "react";
import { Box, Container, Flex, Heading, Text, Stack, Image, UnorderedList, ListItem, Link, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaLinkedinIn, FaGithub, FaCamera } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Speaker Bio Section */}
      <Stack spacing={10} as={Box} textAlign="center" marginTop="5">
        <Heading fontSize="4xl">John Doe</Heading>
        <Text color={useColorModeValue("gray.700", "gray.200")}>Tech Speaker, Innovator, and Photographer</Text>
        <Flex justifyContent="center" alignItems="center">
          <IconButton as={Link} href="#" aria-label="Twitter" icon={<FaTwitter />} margin={2} />
          <IconButton as={Link} href="#" aria-label="LinkedIn" icon={<FaLinkedinIn />} margin={2} />
          <IconButton as={Link} href="#" aria-label="GitHub" icon={<FaGithub />} margin={2} />
        </Flex>
      </Stack>

      {/* Publications Section */}
      <Box as={Stack} spacing={10} marginTop="10">
        <Heading fontSize="3xl">Publications</Heading>
        <UnorderedList>
          <ListItem>Article on Modern Web Technologies - 2023</ListItem>
          <ListItem>Research Paper on AI and Machine Learning - 2022</ListItem>
          <ListItem>Case Study on IoT Innovations - 2021</ListItem>
        </UnorderedList>
      </Box>

      {/* Photography Section */}
      <Box as={Stack} spacing={10} marginTop="10">
        <Heading fontSize="3xl">Photography</Heading>
        <Flex wrap="wrap" justifyContent="center" gap={6}>
          <Image borderRadius="lg" src="https://images.unsplash.com/photo-1532598187460-98fe8826d1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3MDkwOTcxMjF8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="250px" objectFit="cover" />
          <Image borderRadius="lg" src="https://images.unsplash.com/photo-1579976327048-ee8afcadda27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTcwOTA5NzEyMXww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="250px" objectFit="cover" />
          <Image borderRadius="lg" src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTcwOTA5NzEyMnww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="250px" objectFit="cover" />
        </Flex>
      </Box>

      {/* Innovation Projects Section */}
      <Box as={Stack} spacing={10} marginTop="10">
        <Heading fontSize="3xl">Innovation Projects</Heading>
        <UnorderedList>
          <ListItem>Smart City Integration Platform - A framework for IoT devices in urban environments.</ListItem>
          <ListItem>AI Driven Analytics Tool - A tool that leverages machine learning for business insights.</ListItem>
          <ListItem>Virtual Reality Educational Experiences - Immersive VR content for learning and development.</ListItem>
        </UnorderedList>
      </Box>

      {/* Footer */}
      <Flex as="footer" py={10} justifyContent="center" marginTop="10">
        <Text fontSize="sm">© 2023 John Doe. All rights reserved.</Text>
      </Flex>
    </Container>
  );
};

export default Index;
