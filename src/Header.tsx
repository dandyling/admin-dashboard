import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  theme,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import * as React from 'react'
import { FaQuestionCircle, FaWindows } from 'react-icons/fa'

export const Header = () => {
  return (
    <Flex
      pl="16"
      minWidth="100%"
      alignItems="center"
      justifyContent="space-between"
      pb="2"
    >
      <Flex flex={1} justifyContent="space-between" alignItems="center">
        <BreadNavigation separator=">" flex={2}>
          <BreadcrumbItem>
            <Button
              backgroundColor="white"
              borderRadius="lg"
              leftIcon={<FaWindows size="1.4rem" />}
              borderWidth="0.5px"
              borderColor="gray.200"
            >
              13
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">My workspace</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Drafts</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Analytica_dashboard_kit</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadNavigation>
        <Flex alignItems="center">
          <Button
            mx="2"
            color="gray.400"
            backgroundColor="gray.100"
            borderRadius="lg"
            fontSize="0.9rem"
            rightIcon={<FaQuestionCircle size="1.4rem" />}
          >
            Help
          </Button>
          <Button
            mx="2"
            color="blue.400"
            borderRadius="lg"
            textTransform="uppercase"
            variant="outline"
            shadow="lg"
            fontSize="0.9rem"
          >
            Upgrade
          </Button>
          <Avatar
            mx="2"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            size="sm"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

const BreadNavigation = styled(Breadcrumb)`
  ol {
    display: flex;
    align-items: center;
  }
  svg {
    fill: ${theme.colors.blue[400]};
  }
`
