import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import FollowSuggestion from './follow-suggestion';
import { colors } from '@/constants';

export const Suggestions: React.FC = () => {
  return (
    <Stack direction="column" p="4" spacing="5" bg={colors.darkGray} borderRadius="20">
      <Text fontSize="lg" fontWeight="bold" pb="3">
        Who to follow
      </Text>
      {follow_suggestions.map(({ id, name, username }) => (
        <FollowSuggestion key={id} name={name} username={username} />
      ))}
    </Stack>
  );
};

export default Suggestions;

// TODO: replace later by random users from db
const follow_suggestions = [
  {
    id: 0,
    name: 'John Doe',
    username: 'JohnDoe',
  },
  {
    id: 1,
    name: 'Alice',
    username: 'alice',
  },
  {
    id: 2,
    name: 'Bob',
    username: 'bob',
  },
];
