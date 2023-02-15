import { 
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalHeader, 
  ModalOverlay,
  Flex,
  Button,
  Image,
  Text
} from '@chakra-ui/react'
import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import { auth } from "../../firebase/clientApp"

const AuthModal = ({ isOpen, toggleModal, title }) => {
  const [signInWithGoogle, userCred, loading, error] = useSignInWithGoogle(auth)

  return (
    <Modal isOpen={isOpen} onClose={toggleModal}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>
          {title}
        </ModalHeader>
        <ModalCloseButton/>
        <ModalBody
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pb={6}
        >
          <Flex
            width="70%"
            direction="column"
            justify="center"
            align="center"
          >
            <Button
              variant="oauth"
              mb={2}
              width="100%"
              isLoading={loading}
              onClick={() => signInWithGoogle()}
            >
              <Image src="src/assets/googlelogo.png" height="20px" mr={2}/>
              Continue with Google
            </Button>
            <Text color="gray.500" fontWeight={700}>OR</Text>

            {title === "Login" && <Login />}
            {title === "Sign Up" && <SignUp />}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AuthModal