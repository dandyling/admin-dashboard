import { Button, Flex, theme } from '@chakra-ui/react'
import * as React from 'react'

export const Footer = () => {
  return (
    <Flex mt="4" mb="8">
      <Button
        textTransform="uppercase"
        backgroundImage={`linear-gradient(to right, ${theme.colors.teal[100]},${theme.colors.orange[100]})`}
        mx="1"
        px="4"
        size="xs"
      >
        Status
      </Button>
      <Button textTransform="uppercase" mx="1" px="4" size="xs">
        Privacy
      </Button>
      <Button textTransform="uppercase" mx="1" px="4" size="xs">
        Terms
      </Button>
    </Flex>
  )
}
