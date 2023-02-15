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

const DetailModal = ({ isOpen, onClose }) => {
  // const
  return (
    <Modal 
      isOpen={isOpen}
      size='6xl'
      onClose={() => onClose(false)}
    >
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>
          Detail
        </ModalHeader>
        <ModalCloseButton/>
        <ModalBody
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pb={6}
        >
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default DetailModal