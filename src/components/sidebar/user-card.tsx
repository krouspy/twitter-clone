import React from 'react';
import { HStack, Stack, Avatar, Text, Icon, Spacer } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import { colors } from '@/constants';

export const UserCard = () => {
  return (
    <HStack direction="row">
      <Avatar />
      <Stack direction="column" spacing="0">
        <Text>John Doe</Text>
        <Text fontSize="sm" color={colors.gray}>
          @JohnDoe
        </Text>
      </Stack>
      <Spacer />
      <Icon as={BsThreeDots} />
    </HStack>
  );
};

export default UserCard;
