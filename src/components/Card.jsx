import React from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';

const Card = (e) => {
    return (
        <Center py={6}>
          <Box
            maxW={'270px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}>
            <Image
              h={'120px'}
              w={'full'}
              src={
                'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
              }
              objectFit={'cover'}
            />
            <Flex justify={'center'} mt={-12}>
              <Avatar
                size={'xl'}
                src={
                  `${e.picture.medium}`
                }
                alt={'Author'}
                css={{
                  border: '2px solid white',
                }}
              />
            </Flex>
    
            <Box p={6}>
              <Stack spacing={2} align={'center'} mb={5}>
                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                 {e.name.title} {e.name.first} {e.name.last}
                </Heading>
                <Text color={'gray.500'}>{e.gender}</Text>
              </Stack>
    
             
                <Stack spacing={2
                } align={'center'}>
                  <Text fontWeight={600}>{e.location.city} {e.location.state} </Text>
                  <Text fontWeight={600} fontSize={'lg'} >
                  {e.location.country}
                  </Text>
                </Stack>
                <Stack spacing={1} align={'center'}>
                  <Text color="red.500" fontWeight={600}>{e.phone}</Text>
                  <Text fontSize={'sm'} color={'gray.500'}>
                    {e.email}
                  </Text>
                </Stack>
            
            </Box>
          </Box>
        </Center>
  )
}

export default Card