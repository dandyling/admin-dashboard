import { TableProps, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import * as React from 'react'
import { SimpleTable } from '../../components/SimpleTable'

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
]

export interface TableRow {
  name: string
  value1: string
  value2: string
}

export const ActionsTable = (props: TableProps) => {
  const total = getTotal(actions)
  const rows = mapActionsToTableRows([...actions, total])
  return (
    <SimpleTable highlightLastRow size="sm" variant="simple" {...props}>
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

const getTotal = (actions: Action[]): Action => {
  return actions.reduce(
    (total, action) => {
      total.value1 += action.value1
      total.value2 += action.value2
      return total
    },
    {
      name: 'Total',
      value1: 0,
      value2: 0,
    }
  )
}

const mapActionsToTableRows = (actions: Action[]): TableRow[] => {
  return actions.map((action) => {
    return {
      name: action.name,
      value1: String(action.value1),
      value2: String(action.value2),
    }
  })
}
