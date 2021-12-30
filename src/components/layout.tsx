import React from 'react';
import Head from 'next/head';
import { Stack, Flex, Box } from '@chakra-ui/react';
import { Sidebar, Suggestions } from '@/components';
import { colors } from '@/constants';

const borderWidth = '0.5px';

export const Layout: React.FC = ({ children }) => {
  return (
    <Stack as="main" w="100vw" maxW="100vw" minH="100vh" bg={colors.dark} color={colors.white}>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Twitter Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex h="100vh" mx={{ base: '5%', lg: '10%', xl: '15%' }}>
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
      </Flex>
    </Stack>
  );
};

export default Layout;
