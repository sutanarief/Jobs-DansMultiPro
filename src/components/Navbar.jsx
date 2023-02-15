import { Button, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/clientApp';
import { signOut } from "firebase/auth"
import AuthModal from './Modal/AuthModal'

const Navbar = () => {
  const [login, isLogin] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [user, loading, error] = useAuthState(auth)
  const [title, setTitle] = useState("")

  const logout = async () => {
    await signOut(auth)
  }

  const toggleModal = (title = "") => {
    setIsOpen(!isOpen)
    setTitle(title)
  }

  useEffect(() => {
    if(user) setIsOpen(false)
  }, [user])

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
        {user && (
          <Button
            variant="outline"
            height="28px"
            display={{ base: "none", sm: "flex"}}
            width={{ base: "70px", md: "110px"}}
            mr={2}
            alignSelf="center"
            onClick={logout}
          >
            Logout
          </Button>
        )}
        {user ? null : (
          <>
          <Button
            variant="outline"
            height="28px"
            display={{ base: "none", sm: "flex"}}
            width={{ base: "70px", md: "110px"}}
            mr={2}
            alignSelf="center"
            onClick={() => toggleModal("Login")}
          >
            Login
          </Button>
            <Button
              variant="signup"
              height="28px"
              display={{ base: "none", sm: "flex"}}
              width={{ base: "70px", md: "110px"}}
              mr={2}
              alignSelf="center"
              onClick={() => toggleModal("Sign Up")}
            >
              Sign Up
            </Button>
          </>
        )}
      </Flex>
      <AuthModal isOpen={isOpen} toggleModal={toggleModal} title={title}/>
    </Flex>
  )
}

export default Navbar