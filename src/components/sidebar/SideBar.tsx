import { Flex } from '@chakra-ui/react'
import * as React from 'react'
import { BackNavigation } from './BackNavigation'
import { HomeLink } from './HomeLink'
import { SideBarItems } from './SideBarItems'

const SIDEBAR_WIDTH = 300

export const SideBar = () => {
  return (
    <Flex flexDirection="column" height="100vh" flexBasis={SIDEBAR_WIDTH}>
      <HomeLink />
      <BackNavigation />
      <SideBarItems />
    </Flex>
  )
}
