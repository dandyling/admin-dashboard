import { Flex, Text } from '@chakra-ui/react'
import * as React from 'react'
import { Logo } from '../Logo'

export const HomeLink = () => {
  return (
    <Flex mb="2" alignItems="center">
      <Logo />
      <Text mx="2" fontWeight="bold" fontSize="xl" fontStyle="italic">
        Dashboard
      </Text>
    </Flex>
  )
}
