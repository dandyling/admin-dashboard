import { Flex, IconButton, Select } from '@chakra-ui/react'
import * as React from 'react'
import { FaDownload, FaPrint } from 'react-icons/fa'

export const Toolbar = () => {
  return (
    <Flex>
      <Select variant="filled" size="sm" borderRadius="lg" mr="2">
        <option>Past month</option>
        <option>Past year</option>
      </Select>
      <IconButton
        aria-label="print"
        color="gray.500"
        size="sm"
        icon={<FaPrint fontSize="0.7rem" />}
        mr="2"
      />
      <IconButton
        aria-label="print"
        color="gray.500"
        size="sm"
        icon={<FaDownload fontSize="0.7rem" />}
      />
    </Flex>
  )
}
