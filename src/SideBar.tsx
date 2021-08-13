import { Button, Flex, Text } from '@chakra-ui/react'
import * as React from 'react'
import { ReactElement } from 'react'
import {
  FaChartBar,
  FaChartPie,
  FaCheckDouble,
  FaPlusCircle,
  FaPrint,
  FaWrench,
} from 'react-icons/fa'
import { BackNavigation } from './BackNavigation'
import { HomeLink } from './HomeLink'

const SIDEBAR_WIDTH = 300

interface SideBarItem {
  name: string
  description: string
  icon: ReactElement
}

const sideBarItems: SideBarItem[] = [
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

export const SideBar = () => {
  return (
    <Flex flexDirection="column" flexBasis={SIDEBAR_WIDTH}>
      <HomeLink />
      <BackNavigation />
      <Flex flexDirection="column" alignItems="center">
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
          {sideBarItems.map((item) => {
            return (
              <Button size="lg" mb="2" variant="ghost" leftIcon={item.icon}>
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
    </Flex>
  )
}
