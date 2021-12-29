import React from 'react';
import { Stack, Grid, GridItem, Text } from '@chakra-ui/react';
import { Sidebar } from '@/components';
import { colors } from '@/constants';

export const Layout: React.FC = ({ children }) => {
  return (
    <Stack
      as="main"
      w="100vw"
      maxW="100vw"
      minH="100vh"
      px={{ base: '5%', lg: '10%', xl: '15%' }}
      py="1%"
      bg={colors.dark}
      color={colors.white}
    >
      <Grid h="100%" templateColumns="repeat(4, 1fr)">
        <GridItem colSpan={1}>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={2}>{children}</GridItem>
        <GridItem colSpan={1}>
          <Text>Hello</Text>
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default Layout;
