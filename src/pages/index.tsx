import type { NextPage } from 'next';
import Head from 'next/head';
import { Stack, Text } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Twitter Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack w="100%" bg="blue.500">
        <Text fontSize="xl">Hello World!</Text>
      </Stack>
    </div>
  );
};

export default Home;
