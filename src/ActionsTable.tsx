import { Table, TableProps, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import styled from '@emotion/styled'
import * as React from 'react'

export interface Action {
  name: string
  value1: number
  value2: number
}

const actions: Action[] = [
  {
    name: 'Videos Played',
    value1: 10,
    value2: 10,
  },
  {
    name: 'Finished Watches',
    value1: 1000,
    value2: 1000,
  },
  {
    name: 'Comments Posted',
    value1: 100,
    value2: 100,
  },
  {
    name: 'Likes Gained',
    value1: 1000,
    value2: 10000,
  },
  {
    name: 'Total',
    value1: 2100,
    value2: 12210,
  },
]

export interface TableRow {
  name: string
  value1: string
  value2: string
}

export const ActionsTable = (props: TableProps) => {
  const rows = mapActionsToTableRows(actions)
  return (
    <SimpleTable size="sm" variant="simple" {...props}>
      <Thead>
        <Tr>
          <Th>Type of Action</Th>
          <Th isNumeric>Value Two</Th>
          <Th isNumeric>Value One</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, i) => {
          return (
            <Tr key={`${i} - ${row.name}`}>
              <Td>{row.name}</Td>
              <Td isNumeric>{row.value1}</Td>
              <Td isNumeric>{row.value2}</Td>
            </Tr>
          )
        })}
      </Tbody>
    </SimpleTable>
  )
}

const SimpleTable = styled(Table)`
  tr,
  td {
    line-height: 1rem;
  }
`

const mapActionsToTableRows = (actions: Action[]): TableRow[] => {
  return actions.map((action) => {
    return {
      name: action.name,
      value1: String(action.value1),
      value2: String(action.value2),
    }
  })
}
