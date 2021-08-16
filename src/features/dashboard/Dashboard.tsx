import { Flex, Heading } from '@chakra-ui/react'
import * as React from 'react'
import { ActionsTable } from './ActionsTable'
import { CampaignStatistics } from './CampaignStatistics'
import { SalesTable } from './SalesTable'
import { StatsPanel } from './StatsPanel'
import { Toolbar } from './Toolbar'

export const Dashboard = () => {
  return (
    <Flex flexDirection="column">
      <Flex justifyContent="space-between">
        <Heading as="h1" fontSize="3xl" fontWeight="semibold">
          Dashboard
        </Heading>
        <Toolbar />
      </Flex>
      <StatsPanel />
      <CampaignStatistics my="2" />
      <Flex my="8">
        <ActionsTable mr="8" />
        <SalesTable ml="8" />
      </Flex>
    </Flex>
  )
}
