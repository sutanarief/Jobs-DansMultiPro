import { 
  Flex, 
  Input, 
  InputGroup, 
  InputLeftElement, 
  FormLabel,
  FormControl, 
  Checkbox, 
  Box,
  Button,
  Heading,
  VStack,
  Text,
  StackDivider
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getAllData, getPaginationData, getDetailData } from '../api/get'
import moment from "moment"
import Header from '../components/Header'
import DetailModal from '../components/Modal/DetailModal'

const Home = () => {
  const [listData, setListData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [noMore, setNoMore] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [detailData, setDetailData] = useState({})

  const handleGetData = async () => {
    await getPaginationData(currentPage)
      .then((data) => {
        console.log(data)
        setListData(data)
      })
  }

  const handleMoreJobs = async (page) => {
    setLoading(true)
    await getPaginationData(page)
      .then((data) => {
        setListData([...listData, ...data])
      })
      .catch((err) => {
        console.log(err)
        setNoMore(true)
      })
    setCurrentPage(page)
    setLoading(false)
  }

  const handleOpenModal = async (id) => {
    await getDetailData(id)
      .then((response) => {
        console.log(response)
        setDetailData(response)
      })
      setIsOpen(true)
  }

  window.onscroll = () => {
    if (Math.ceil(window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight) {
      if(!noMore) {
        handleMoreJobs(currentPage + 1);
      }
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(1)
    handleGetData()
  }, [])

  return (
    <>
    <Header setListData={setListData} setNoMore={setNoMore} setCurrentPage={setCurrentPage}/>
    <DetailModal isOpen={isOpen} onClose={setIsOpen}/>
      <Flex
        justify="center"
        width="100%"
        display="column"
        bg="white"
      >
        <Flex
          m={7}
          display="column"
          justify="flex-start"
        >
          <Heading>Job List</Heading>
          <VStack
            mt={7}
            align='stretch'
            divider={<StackDivider borderColor='gray.200' />}
          >
            {listData.length !== 0 ? 
            (listData?.map((data) => (
              data &&
                <Flex
                  align="center"
                  justify="space-between"
                  key={data.id}
                  cursor="pointer"
                  _hover={{
                    bg: "gray.200",
                  }}
                  p={2}
                  onClick={() => handleOpenModal(data.id)}
                >
                  <Box
                  >
                    <Text>{data.title}</Text>
                    <Text>{data.company} - {data.type}</Text>
                  </Box>
                  <Box
                  >
                    <Text
                      width="120px"
                    >{data.location?.split(' - ')[0]}</Text>
                    <Text>{moment(new Date(data.created_at)).fromNow()}</Text>
                  </Box>
                </Flex>
            ))) : <Text textAlign="center">Job Not Found</Text>}
          </VStack>
          {noMore || listData.length === 0 ? (
            <Text
              textAlign="center"
              mt={5}
            >No More Jobs</Text>
          ) : (
            <Button
              width="100%"
              mt={5}
              onClick={() => handleMoreJobs(currentPage + 1)}
              isLoading={loading}
              type="submit"
            >
              More Jobs
            </Button>
          )}
        </Flex>
      </Flex>
    </>
  )
}

export default Home