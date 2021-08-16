import { Flex, IconButton, Text, theme } from '@chakra-ui/react'
import * as React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

export const BackNavigation = () => {
  return (
    <Flex
      alignItems="center"
      borderBottom={`1px dashed ${theme.colors.gray[200]}`}
    >
      <IconButton
        ml="4"
        color={theme.colors.blue[400]}
        variant="ghost"
        aria-label="Back"
        icon={<FaArrowLeft />}
      />
      <Text color="blackAlpha.700" fontSize="0.9rem">
        Back to previous
      </Text>
    </Flex>
  )
}
