import { 
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalHeader, 
  ModalOverlay,
  Flex,
  Button,
  Image
} from '@chakra-ui/react'
import React from 'react'
import Login from './Login'
import SignUp from './SignUp'

const AuthModal = ({ isOpen, toggleModal, title }) => {
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
              width="90%"
              // isLoading={loading}
              // onClick={() => signInWithGoogle()}
            >
              <Image src="src/assets/googlelogo.png" height="20px" mr={2}/>
              Continue with Google
            </Button>
            {title === "Login" && <Login />}
            {title === "Sign Up" && <SignUp />}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AuthModal