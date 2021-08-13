import {
  ChakraProvider,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  theme,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import * as React from 'react'
import { Header } from './Header'
import { SideBar } from './SideBar'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex padding="2" minWidth="100vw" minHeight="100vh">
      <SideBar />
      <Flex flexDirection="column" flex={1}>
        <Header />
        <Tabs variant="enclosed">
          <TabHeaders>
            <Tab>Analyze</Tab>
            <Tab>My campaigns</Tab>
            <Tab>Configure</Tab>
            <Tab>Customize</Tab>
            <Tab>Research</Tab>
            <Tab>Inspect</Tab>
          </TabHeaders>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  </ChakraProvider>
)

const TabHeaders = styled(TabList)`
  border-bottom: 1px dashed ${theme.colors.gray[200]};
  button {
    font-size: 0.9rem;
  }
`
