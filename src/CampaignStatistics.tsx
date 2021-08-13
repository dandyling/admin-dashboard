import {
  Flex,
  Table,
  TableProps,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  theme,
  Tr,
} from '@chakra-ui/react'
import * as React from 'react'

interface Action {
  name: string
  color?: string
}

interface CampaignStat {
  name: string
  actions: Action[]
  efficiency: number
  plays: number
  finished: number
  likes: number
  comments: number
}

const campaignStats: CampaignStat[] = [
  {
    name: 'Intagram stories marketing',
    actions: [
      {
        name: 'Draft',
        color: theme.colors.green[500],
      },
      { name: 'Customize' },
      { name: 'Edit' },
      { name: 'Referrers' },
    ],
    efficiency: 186,
    plays: 186,
    finished: 92,
    likes: 8,
    comments: 1,
  },
  {
    name: 'Social networks traffic',
    actions: [
      {
        name: 'Paused',
        color: theme.colors.orange[300],
      },
      { name: 'Customize' },
      { name: 'Settings' },
    ],
    efficiency: 95,
    plays: 95,
    finished: 31,
    likes: 11,
    comments: 0,
  },
  {
    name: 'Intagram stories marketing',
    actions: [
      {
        name: 'Active',
        color: theme.colors.blue[300],
      },
      { name: 'Customize' },
      { name: 'Settings' },
    ],
    efficiency: 329,
    plays: 329,
    finished: 256,
    likes: 32,
    comments: 4,
  },
  {
    name: 'Intagram stories marketing',
    actions: [
      {
        name: 'Active',
        color: theme.colors.blue[300],
      },
      { name: 'Customize' },
      { name: 'Settings' },
    ],
    efficiency: 804,
    plays: 804,
    finished: 697,
    likes: 40,
    comments: 22,
  },
]

export const CampaignStatistics = (props: TableProps) => {
  return (
    <Table variant="simple" {...props}>
      <Thead>
        <Tr>
          <Th>Campaigns</Th>
          <Th isNumeric>Efficiency</Th>
          <Th isNumeric>Plays</Th>
          <Th isNumeric>Finished</Th>
          <Th isNumeric>Likes</Th>
          <Th isNumeric>Comments</Th>
        </Tr>
      </Thead>
      <Tbody>
        {campaignStats.map((campaign, i) => {
          return (
            <Tr key={`${i} - ${campaign.name}`}>
              <Td>
                <Flex flexDirection="column">
                  <Text fontSize="xl" fontWeight="semibold">
                    {campaign.name}
                  </Text>
                  <Flex fontSize="smaller">
                    {campaign.actions.map((action, j) => {
                      return (
                        <Flex key={`${j} - ${action.name}`}>
                          <Text color={action.color}>{action.name}</Text>
                          {i < campaign.actions.length - 1 && (
                            <Text mx="1">&#183;</Text>
                          )}
                        </Flex>
                      )
                    })}
                  </Flex>
                </Flex>
              </Td>
              <Td isNumeric>{campaign.efficiency}</Td>
              <Td isNumeric>{campaign.plays}</Td>
              <Td isNumeric>{campaign.finished}</Td>
              <Td isNumeric>{campaign.likes}</Td>
              <Td isNumeric>{campaign.comments}</Td>
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}
