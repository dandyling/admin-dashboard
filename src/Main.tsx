import {
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  theme,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import * as React from 'react'
import { CampaignStatistics } from './CampaignStatistics'
import { StatsPanel } from './StatsPanel'
import { Toolbar } from './Toolbar'

export const Main = () => {
  return (
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
        <TabPanel flexDirection="column" px="16" py="8">
          <Flex justifyContent="space-between">
            <Heading as="h1" fontSize="3xl" fontWeight="semibold">
              Dashboard
            </Heading>
            <Toolbar />
          </Flex>
          <StatsPanel />
          <CampaignStatistics />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

const TabHeaders = styled(TabList)`
  border-bottom: 1px dashed ${theme.colors.gray[200]};
  button {
    font-size: 0.9rem;
  }
`