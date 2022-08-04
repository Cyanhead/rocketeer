import React, { useEffect, useState } from 'react';
import {
  useQuery,
  //  gql
} from '@apollo/client';
import { LOAD_ROCKETS } from '../graphQL/queries';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

const GetRockets = () => {
  const {
    //  error,
    //  loading,
    data,
  } = useQuery(LOAD_ROCKETS);
  const [rockets, setRockets] = useState([]);
  useEffect(() => {
    if (data) {
      setRockets(data.launchesPast);
    }
  }, [data]);

  return (
    <Box>
      {rockets.map((item, i) => {
        return (
          <Flex
            key={i}
            direction={['column', 'column', 'row']}
            justify="space-between"
            align="flex-start"
            my="32px"
            p={['8px', '20px']}
            bg={i % 2 === 0 ? '#f5f5f5' : '#ffffff'}
          >
            <Flex direction="column" justify="space-between" h="100%" mr="16px">
              <Flex direction="column">
                <Heading size="lg">
                  {item.rocket.rocket_name} ({item.rocket.rocket_type})
                </Heading>
                <Flex align="center" wrap="wrap">
                  <Heading size="sm"> Mission: </Heading> &nbsp;
                  <Text> {item.mission_name} </Text>
                </Flex>
                <Flex align="center" wrap="wrap">
                  <Heading size="sm"> Date: </Heading> &nbsp;
                  <Text> {item.launch_date_local} </Text>
                </Flex>
                <Flex align="center" wrap="wrap">
                  <Heading size="sm"> Location: </Heading> &nbsp;
                  <Text> {item.launch_site.site_name_long} </Text>
                </Flex>
              </Flex>
              <Text my="16px">{item.details}</Text>
            </Flex>
            <Image
              boxSize={['full', 'full', '400px']}
              minW={['full', 'full', '400px']}
              objectFit="cover"
              src={item.links['flickr_images'][0]}
              alt={item.rocket['rocket_name']}
            />
          </Flex>
        );
      })}
    </Box>
  );
};

export default GetRockets;
