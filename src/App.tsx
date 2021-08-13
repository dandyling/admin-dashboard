import { ChakraProvider, Flex, theme } from '@chakra-ui/react'
import * as React from 'react'
import { Header } from './Header'
import { Main } from './Main'
import { SideBar } from './SideBar'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex padding="2" minWidth="100vw" minHeight="100vh">
      <SideBar />
      <Flex flexDirection="column" flex={1}>
        <Header />
        <Main />
      </Flex>
    </Flex>
  </ChakraProvider>
)
