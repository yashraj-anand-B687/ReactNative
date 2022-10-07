import {Box, Text} from 'native-base';
import React, {FC} from 'react';

const Headerr: FC = () => {
  return (
    <Box pt="65" h="150" w="100%">
      <Text bold fontSize="3xl" ml="2" mb="1" color="#fff" textAlign="left">
        Hello User
      </Text>
      <Text bold fontSize="lg" ml="2" mb="2" color="#fff" textAlign="left">
        What are you going to do?
      </Text>
    </Box>
  );
};

export default function Header() {
  return (
    <>
      <Headerr />
    </>
  );
}
