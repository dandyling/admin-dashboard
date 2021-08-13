import { Table, TableProps, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import * as React from 'react'
import { TableRow } from './ActionsTable'

export interface Sale {
  name: string
  when: string
  earned: number
}

const sales: Sale[] = [
  {
    name: 'Mockups for Figma',
    when: '16 mins',
    earned: 0,
  },
  {
    name: 'Material Icons Set',
    when: '2 hours',
    earned: 14.4,
  },
  {
    name: 'Material Design System',
    when: '1 day',
    earned: 68,
  },
  {
    name: 'Material Desktop System',
    when: '1 day',
    earned: 128.5,
  },
  {
    name: 'iOS toolkit for Figma',
    when: '2 days',
    earned: 58,
  },
]

export const SalesTable = (props: TableProps) => {
  const rows = mapSalesToTableRows(sales)
  return (
    <Table variant="simple" {...props}>
      <Thead>
        <Tr>
          <Th>Last Purchased</Th>
          <Th>When</Th>
          <Th>Earned</Th>
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
    </Table>
  )
}

const mapSalesToTableRows = (sales: Sale[]): TableRow[] => {
  return sales.map((sale) => {
    return {
      name: sale.name,
      value1: sale.when,
      value2: `$ ${sale.earned.toFixed(2)}`,
    }
  })
}
