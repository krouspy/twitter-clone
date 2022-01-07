import React, { useEffect } from 'react';
import Head from 'next/head';
import { Stack, Flex, Box, useDisclosure } from '@chakra-ui/react';
import { trpc } from '@/utils';
import { Sidebar, Suggestions, CreateAccount, Loader } from '@/components';
import { colors } from '@/constants';

const borderWidth = '0.5px';

export const Layout: React.FC = ({ children }) => {
  const { data, isLoading } = trpc.useQuery(['users.getByJWT']);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!data && !isLoading) {
      onOpen();
    }
  }, [data, isLoading]);

  return (
    <Stack as="main" w="100vw" maxW="100vw" minH="100vh" bg={colors.dark} color={colors.white}>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Twitter Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex h="100vh" mx={{ base: '5%', lg: '10%', xl: '15%' }}>
        {!data || isLoading ? (
          <Loader />
        ) : (
          <>
            <Box w="25%">
              <Sidebar />
            </Box>
            <Box
              w="50%"
              borderLeftWidth={borderWidth}
              borderRightWidth={borderWidth}
              borderColor={colors.gray}
            >
              {children}
            </Box>
            <Box w="25%">
              <Suggestions />
            </Box>
          </>
        )}
        <CreateAccount isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Stack>
  );
};

export default Layout;
