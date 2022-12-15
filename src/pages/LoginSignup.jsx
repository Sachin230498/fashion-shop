import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import Login from '../component/Login'
import SignUp from '../component/SignUp'

function LoginSignup() {
    let [login,setLogin]=useState(true)
  return (
    <Box w={{'sm':"100%",'md':"40%"}} 
    m="auto" boxShadow='dark-lg' 
    borderRadius={"5%"} p={"2%"} >
        <Flex h={50}   gap={2} mb={3}>
            <Button w="50%" bgColor={login?"teal.100":"default"} h={"100%"} borderRadius="2%" 
            fontSize={"25px"}
            onClick={()=>setLogin(true)}>Login</Button>
            <Button w="50%" bgColor={login?"default":"teal.100"} h={"100%"} borderRadius="2%"
            fontSize={"25px"}
            onClick={()=>setLogin(false)}>SignUp</Button>
        </Flex>
        {login?<Login /> :<SignUp/> }
      
      
    </Box>
  )
}

export default LoginSignup