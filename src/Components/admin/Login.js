import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { login } from '../../redux/actios/Authactions'
let init={
    email:"",
    password:"" 
    }
function Login() {
    let [showPassword,setShowpassword]=useState(false)
    let [creads,setCreads]=useState(init)
    let navigate=useNavigate()
    let dispatch=useDispatch()
    const toast = useToast()
    function handleSignup(e){
        setCreads({...creads,[e.target.name]:e.target.value})
      }
      function handleSubmit(){
        dispatch(login({...creads,toast,navigate}))
      }
  return (
    <Box  >
        <VStack spacing={2}>
        
            <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type='email' placeholder='Enter email' 
            name='email' value={creads.email} onChange={(e)=>handleSignup(e)}
            />
            </FormControl>
            <FormControl isRequired>
            <FormLabel>password</FormLabel>
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter password'
                    name='password' value={creads.password} onChange={(e)=>handleSignup(e)}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={()=>{setShowpassword(!showPassword)}}>
                    {showPassword ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>         
            </FormControl>
            
            <Button w={"100%"} bgColor={"teal.100"} variant='solid' onClick={()=>handleSubmit()}>
                Submit
            </Button>
        </VStack>
    </Box>
  )
}

export default Login