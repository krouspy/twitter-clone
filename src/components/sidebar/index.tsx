import React from 'react';
import { Box, Stack, Button } from '@chakra-ui/react';
import { TweetButton } from '@/components';
import buttonsData from './data';

export const Sidebar: React.FC = () => {
  return (
    <Stack direction="column" spacing="5" mx="7%">
      {buttonsData.map(({ id, label, Icon }, index) => {
        const isFirstItem = index === 0;
        return (
          <Box key={id}>
            <Button
              variant="ghost"
              leftIcon={<Icon fontSize={isFirstItem ? '35' : '25'} />}
              fontSize={{ base: 'lg', xl: 'xl' }}
              fontWeight="normal"
            >
              {label}
            </Button>
          </Box>
        );
      })}
      <TweetButton size="lg" />
    </Stack>
  );
};

export default Sidebar;
