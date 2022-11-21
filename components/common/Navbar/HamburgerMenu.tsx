import { Box } from '@chakra-ui/react'
import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import type { NextPage } from 'next'
import type { MouseEvent } from 'react'
interface HamburgerMenuProps {
  toggleAction: ()=> void
}
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({toggleAction}) => {
  
  const isOpen = false
  return (
    <Box ms="-4" minW={{ base: '12', lg: '76px' }}>
      <Box as="button" p="2" fontSize="24px" onClick={toggleAction}>
        <HamburgerIcon />
        <Box srOnly>{isOpen ? 'Close menu' : 'Open menu'}</Box>
      </Box>
    </Box>
  )
}
export default HamburgerMenu