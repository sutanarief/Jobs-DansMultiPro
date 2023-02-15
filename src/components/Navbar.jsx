import { Button, Flex, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import AuthModal from './Modal/AuthModal'

const Navbar = () => {
  const [login, isLogin] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState("")

  const toggleModal = (title = "") => {
    setIsOpen(!isOpen)
    setTitle(title)
  }

  return (
    <Flex
      bg="blue.500"
      justifyContent="space-between"
      padding="10px"
    >
      <Heading
        size="lg"
        ml={2}
        color="white"
      >
        LinkJobs
      </Heading>
      <Flex>
        <Button
          variant="outline"
          height="28px"
          display={{ base: "none", sm: "flex"}}
          width={{ base: "70px", md: "110px"}}
          mr={2}
          alignSelf="center"
          onClick={() => toggleModal("Login")}
        >
          {isLogin ? "Login" : "Logout"}
        </Button>
        <Button
          variant="signout"
          height="28px"
          display={{ base: "none", sm: "flex"}}
          width={{ base: "70px", md: "110px"}}
          mr={2}
          alignSelf="center"
          onClick={() => toggleModal("Sign Up")}
        >
          Sign Up
        </Button>
      </Flex>
      <AuthModal isOpen={isOpen} toggleModal={toggleModal} title={title}/>
    </Flex>
  )
}

export default Navbar