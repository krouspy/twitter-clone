import React, { useState } from 'react';
import { Stack, Box, Avatar, Input } from '@chakra-ui/react';
import Utilitaries from './utilitaries';

// TODO: check if text is not only spaces
export const TweetInput: React.FC = () => {
  const [text, setText] = useState('');
  return (
    <Stack direction="row">
      <Avatar />
      <Box w="100%">
        <Input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="What's happening?"
          border="none"
        />
        <Utilitaries isTweetEmpty={text === ''} />
      </Box>
    </Stack>
  );
};

export default TweetInput;
