import React from 'react';
import Link from 'next/link';
import { Box, Stack, Button, Spacer } from '@chakra-ui/react';
import { TweetButton } from '@/components';
import UserCard from './user-card';
import buttonsData from './data';

export const Sidebar: React.FC = () => {
  return (
    <Stack direction="column" h="100%" spacing="5" mx="12%" pt="3%" pb="6%">
      {buttonsData.map(({ id, label, Icon, href }, index) => {
        const isFirstItem = index === 0;
        return (
          <Box key={id}>
            <Link href={href} passHref>
              <Button
                variant="ghost"
                leftIcon={<Icon fontSize={isFirstItem ? '35' : '25'} />}
                fontSize={{ base: 'lg', xl: 'xl' }}
                fontWeight="normal"
              >
                {label}
              </Button>
            </Link>
          </Box>
        );
      })}
      <TweetButton size="lg" />
      <Spacer />
      <UserCard />
    </Stack>
  );
};

export default Sidebar;
