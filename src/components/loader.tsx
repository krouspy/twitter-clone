import React from 'react';
import { Center, Icon } from '@chakra-ui/react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { colors } from '@/constants';

export const Loader: React.FC = () => {
  return (
    <Center h="100vh">
      <Icon as={AiOutlineTwitter} fontSize="8xl" color={colors.blue} />
    </Center>
  );
};

export default Loader;
