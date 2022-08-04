import { Box, Center, Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';
import GetRockets from './GetRockets';

const Homepage = () => {
  return (
    <Box>
      <Box maxW="1200px" w="100%" margin="auto" p="24px">
        <Flex direction="column" align="center" p="20px">
          <Heading as="h1" size="2xl" py="20px" textAlign="center">
            Rocketeer
          </Heading>
          <Text maxW="800px">
            Rocketeer is a lite project built to show{' '}
            <Link href="https://www.spacex.com/">SpaceX</Link> rockets that have
            been launched so far. It uses the{' '}
            <Link href="https://api.spacex.land/graphql/">
              SpaceX GraphQL API
            </Link>{' '}
            to fetch data and{' '}
            <Link href="https://chakra-ui.com/">Chakra UI</Link> for styling.
          </Text>
        </Flex>
        <GetRockets />
        <Center>
          <Text>
            Bootstrapped using{' '}
            <Link href="https://chakra-ui.com/">Chakra UI</Link> and{' '}
            <Link href="https://www.apollographql.com/">Apollo</Link> by{' '}
            <Link href="https://www.bunmi.tech/">Bunmi Oye</Link>{' '}
          </Text>
        </Center>
      </Box>
    </Box>
  );
};

export default Homepage;
