import type { NextPage } from 'next';
import { Stack, Text, Divider } from '@chakra-ui/react';
import { TweetInput } from '@/components';
import { colors } from '@/constants';

const Home: NextPage = () => {
  return (
    <Stack w="100%" spacing={4} direction="column" pt="2%">
      <Stack direction="column" px="2%" spacing={4}>
        <Text fontSize="xl" fontWeight="bold">
          Home
        </Text>
        <TweetInput />
      </Stack>
      <Divider bgColor={colors.gray} />
    </Stack>
  );
};

export default Home;
