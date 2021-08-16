import { Button, Flex, Text } from '@chakra-ui/react'
import * as React from 'react'
import { ReactElement } from 'react'
import {
  FaChartBar,
  FaChartPie,
  FaCheckDouble,
  FaCog,
  FaInfoCircle,
  FaPlusCircle,
  FaPrint,
  FaQuestionCircle,
  FaUndo,
  FaWrench,
} from 'react-icons/fa'
import { Footer } from './Footer'

interface SideBarItem {
  name: string
  description: string
  icon: ReactElement
}

export const sideBarItems: SideBarItem[] = [
  {
    name: 'Metrics',
    description: 'Track your apps across devices',
    icon: <FaChartPie fontSize="1.4rem" />,
  },
  {
    name: 'Results',
    description: 'View your results as Excel file',
    icon: <FaCheckDouble fontSize="1.4rem" />,
  },
  {
    name: 'Google Analytics',
    description: 'Track visits to your sites',
    icon: <FaChartBar fontSize="1.4rem" />,
  },
  {
    name: 'Reports',
    description: 'Get insights into the big data',
    icon: <FaPrint fontSize="1.4rem" />,
  },
  {
    name: 'More Tools',
    description: 'Upgrade your plan to PRO',
    icon: <FaWrench fontSize="1.4rem" />,
  },
]

interface SideBarButton {
  name: string
  icon: ReactElement
}

const sideBarButtons: SideBarButton[] = [
  {
    name: 'Settings',
    icon: <FaCog />,
  },
  {
    name: 'Previous Version',
    icon: <FaUndo />,
  },
  {
    name: "What's new?",
    icon: <FaInfoCircle />,
  },
  {
    name: 'Customers Support',
    icon: <FaQuestionCircle />,
  },
]

export const SideBarItems = () => {
  return (
    <Flex
      height="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex flexDirection="column">
        <Button
          my="6"
          color="blue.400"
          borderRadius="24"
          variant="outline"
          shadow="lg"
          size="lg"
          leftIcon={<FaPlusCircle fontSize="0.9rem" />}
        >
          Create New
        </Button>
        <Flex
          color="blackAlpha.700"
          flexDirection="column"
          alignItems="flex-start"
        >
          {sideBarItems.map((item, i) => {
            return (
              <Button
                key={`${i} - ${item.name}`}
                size="lg"
                mb="2"
                variant="ghost"
                leftIcon={item.icon}
              >
                <Flex pl="1" flexDirection="column" alignItems="flex-start">
                  <Text mb="1" fontSize="0.9rem">
                    {item.name}
                  </Text>
                  <Text
                    fontSize="0.7rem"
                    fontWeight="normal"
                    color="blackAlpha.700"
                  >
                    {item.description}
                  </Text>
                </Flex>
              </Button>
            )
          })}
        </Flex>
      </Flex>
      <Flex color="gray.500" flexDirection="column" alignItems="center">
        <Flex flexDirection="column">
          {sideBarButtons.map((item, i) => {
            const lastItem = i < sideBarButtons.length - 1
            return (
              <Button
                key={`${i} - ${item.name}`}
                variant="ghost"
                borderColor="gray.100"
                borderRadius={0}
                borderBottomWidth={lastItem ? '1px' : '2px'}
                leftIcon={item.icon}
                size="md"
                width="12rem"
                justifyContent="flex-start"
              >
                <Text ml="2" fontSize="sm">
                  {item.name}
                </Text>
              </Button>
            )
          })}
        </Flex>
        {Footer()}
      </Flex>
    </Flex>
  )
}
