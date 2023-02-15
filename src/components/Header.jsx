import { 
  Flex, 
  Input, 
  InputGroup, 
  InputLeftElement, 
  FormLabel,
  FormControl, 
  Checkbox, 
  Box,
  Button
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { getFilterData, getPaginationData } from '../api/get'

const Header = ({ setListData, setNoMore, setCurrentPage }) => {
  const [params, setParams] = useState({
    description: "",
    location: ""
  })

  const [isChecked, setIsChecked] = useState(false)

  const handleSearch = async () => {
    if(!params.description && !params.location && !isChecked) {
      setCurrentPage(1)
      await getPaginationData(1)
        .then((response) => {
          setListData(response)
        })
      setNoMore(false)
    } else {
      await getFilterData(params.description, params.location, isChecked)
        .then((response) => {
          setListData(response)
        })
    }
  }

  const onChange = (e) => {
    setParams((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const onChangeCheckBox = (e) => {
    setIsChecked(e.target.checked)
  }

  return (
    <Flex
      justify="center"
      display="column"
      bg="white"
      p={7}
    >
      <Flex
      width="100%"
      justify="space-between"
      align="center"
      >
        <Box
          width="30%"
        >
          <FormLabel>Job Description</FormLabel>
          <Input 
            placeholder='Filter by title, benefits, companies, expertise' 
            fontSize='10pt'
            name='description'
            onChange={onChange}
            width='100%'
            _placeholder={{ color: 'gray.500'}}
            _hover={{
              bg: "white",
              border: "1px solid",
              borderColor: "blue.500"
            }}
            _focus={{
              outline: 'none',
              border: "1px solid",
              borderColor: "blue.500"
            }}
            bg="gray.50"
          />
        </Box>
        <Box
          width="30%"
        >
          <FormLabel>Location</FormLabel>
          <Input 
            placeholder='Filter by city, state, zip code or country' 
            name="location"
            onChange={onChange}
            fontSize='10pt'
            _placeholder={{ color: 'gray.500'}}
            _hover={{
              bg: "white",
              border: "1px solid",
              borderColor: "blue.500"
            }}
            _focus={{
              outline: 'none',
              border: "1px solid",
              borderColor: "blue.500"
            }}
            bg="gray.50"
          />
        </Box>
        <Checkbox 
          mt={8}
          onChange={onChangeCheckBox}
        >Full Time Only</Checkbox>
        <Button
          width={{ base: "70px", md: "110px"}}
          mt={8}
          mr={8}
          onClick={handleSearch}
        >Search</Button>
      </Flex>
    </Flex>
  )
}

export default Header