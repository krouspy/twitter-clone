import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '@/utils';
import { Stack, Text } from '@chakra-ui/react';

const Home: NextPage = () => {
  const { data } = trpc.useQuery(['users.all']);

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Twitte Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Stack>
          <Text fontSize="xl">Hello World!</Text>
        </Stack>
      </main>
    </div>
  );
};

export default Home;
