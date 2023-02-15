import { Flex, Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  })

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(loginForm)
  }

  const onChange = (e) => {
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Flex
      direction="column"
      align="center"
      width="100%"
      mt={2}
    >
      <form onSubmit={onSubmit} style={{width: "100%"}}>
        <Input
        required
        name="email"
        placeholder="Email"
        type="email"
        mb={2}
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "gray.500"}}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500"
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500"
        }}
        bg="gray.50"
        />
        <Input
        required
        name="password"
        placeholder="password"
        type="password"
        mb={2}
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "gray.500"}}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500"
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500"
        }}
        bg="gray.50"
        />
        <Button
        type="submit"
        width="100%"
        height="36px"
        mt={2}
        mb={2}
        // isLoading={loading}
      >
        Log In
      </Button>
      </form>
    </Flex>
  )
}

export default Login