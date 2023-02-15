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
  Text,
  Box,
  Heading
} from '@chakra-ui/react'
import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import { auth } from "../../firebase/clientApp"

const DetailModal = ({ isOpen, onClose, data }) => {
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
          // alignItems="center"
          // justifyContent="start"
          pb={6}
        >
          <Flex
            direction="column"
          >
            <Flex
              direction="column"
              borderBottom="1px solid"
              borderColor="gray.200"
              width="100%"
              pb={3}
            >
              <Text>{data.type} / {data.location}</Text>
              <Heading>{data.title}</Heading>
            </Flex>
            <Flex
              mt={3}
              direction="column"
              p={5}
            >
              <Heading>{data.company}</Heading>
              <Box dangerouslySetInnerHTML={{__html: data.description}}/>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default DetailModal