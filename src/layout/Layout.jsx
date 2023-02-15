import { Heading, Flex } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import Home from '../pages/Home'

const Layout = () => {
  return (
    <Flex
      m={4}
      direction="column"
    >
      <Home />
    </Flex>
  )
}

export default Layout