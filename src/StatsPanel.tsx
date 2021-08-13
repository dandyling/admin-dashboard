import { Flex, Heading, Text, theme } from '@chakra-ui/react'
import styled from '@emotion/styled'
import * as React from 'react'

interface Card {
  name: string
  count: number
  color: string
}

const stats: Card[] = [
  {
    name: 'Played',
    count: 1254,
    color: theme.colors.red[500],
  },
  {
    name: 'Finished',
    count: 809,
    color: theme.colors.blue[300],
  },
  {
    name: 'Likes',
    count: 114,
    color: theme.colors.green[500],
  },
  {
    name: 'Comments',
    count: 27,
    color: theme.colors.orange[300],
  },
]

export const StatsPanel = () => {
  return (
    <Panel>
      {stats.map((stat, i) => {
        return (
          <Flex
            key={`${i} - ${stat.name}`}
            flex={1}
            flexDirection="column"
            backgroundColor="gray.100"
            borderRadius="2xl"
            padding="4"
            mr="4"
            my="4"
          >
            <Heading as="h2" fontSize="large" fontWeight="medium" my="1">
              {stat.name}
            </Heading>
            <Text
              fontSize="4xl"
              fontWeight="semibold"
              my="2"
              color={stat.color}
            >
              {stat.count.toLocaleString('en', { useGrouping: true })}
            </Text>
          </Flex>
        )
      })}
    </Panel>
  )
}

const Panel = styled(Flex)`
  div:last-child {
    margin-right: 0;
  }
`
