import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '@/utils';

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
        <h1 className="text-3xl font-bold underline">Hello World!</h1>
      </main>
    </div>
  );
};

export default Home;
