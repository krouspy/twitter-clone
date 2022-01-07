import React from 'react';
import { Stack, Icon } from '@chakra-ui/react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { colors } from '@/constants';

export const Loader: React.FC = () => {
  return (
    <Stack h="100%" w="100%" justify="center" align="center">
      <Icon as={AiOutlineTwitter} fontSize="8xl" color={colors.blue} />
    </Stack>
  );
};

export default Loader;
