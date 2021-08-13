import { Flex } from '@chakra-ui/react'
import * as React from 'react'

export const Logo = () => {
  return (
    <Flex
      minWidth={10}
      minHeight={10}
      borderRadius="lg"
      color="blue.300"
      shadow="lg"
      justifyContent="center"
      alignItems="center"
      fontWeight="bold"
      fontSize="xl"
      fontStyle="italic"
      borderWidth="1px"
      borderColor="gray.200"
      mx="2"
    >
      D
    </Flex>
  )
}
