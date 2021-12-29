import React from 'react';
import { HStack, Box, Text, Button, Avatar } from '@chakra-ui/react';
import { colors } from '@/constants';

export const FollowSuggestion: React.FC<{ name: string; username: string }> = ({
  name,
  username,
}) => {
  return (
    <HStack justify="space-between">
      <HStack>
        <Avatar />
        <Box>
          <Text>{name}</Text>
          <Text fontSize="sm" color={colors.gray}>
            @{username}
          </Text>
        </Box>
      </HStack>
      <Button variant="outline" color={colors.dark} bg={colors.white} size="sm" borderRadius="20">
        Follow
      </Button>
    </HStack>
  );
};

export default FollowSuggestion;
