import { Table } from '@chakra-ui/react'
import styled from '@emotion/styled'

interface SimpleTableProps {
  highlightLastRow?: boolean
  highlightLastColumn?: boolean
}

export const SimpleTable = styled(Table)<SimpleTableProps>`
  ${(props) =>
    props.highlightLastRow
      ? `tr:last-child {
          font-weight: 700;
      }`
      : ''}
  ${(props) =>
    props.highlightLastColumn
      ? `td:last-child {
        font-weight: 700;
      }`
      : ''}
`
