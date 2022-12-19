import React from 'react'
import {Box, Button, Flex, FormControl,  FormLabel,  Input, InputGroup, InputLeftAddon, InputRightElement, Select, useToast, VStack} from "@chakra-ui/react"
import { useState } from 'react'
import {UplodeFile} from "./functions"
import { useDispatch, useSelector, useStore } from 'react-redux'
import { signup } from '../../redux/actios/Authactions'

let init={

  name:"" ,
  email:"",
  password:"" ,
  DOB: "",
  gender:"Male" ,
  role:"seller",
  mobile:""
  }
function SignUp() {
     const toast = useToast()
    let [showPassword,setShowpassword]=useState(false)
    let [creads,setCreads]=useState(init)
    let [pic,setPic]=useState("https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png")
    let dispatch=useDispatch()
    function handleSignup(e){
      setCreads({...creads,[e.target.name]:e.target.value})
    }
    function handleSubmit(){
      dispatch(signup({pic,...creads,toast}))
      console.log(creads)
      
    }

  return (
    <Box  >
        <VStack spacing={2}>
        <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => UplodeFile(e.target.files[0],setPic)}
        />
      </FormControl>
        <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input type='text' placeholder='Enter Name' 
            name='name' value={creads.name} onChange={(e)=>handleSignup(e)}/>
            </FormControl>
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
            <InputGroup>
                <InputLeftAddon children='+91' />
                <Input type='tel'  placeholder='phone number'
                 name='mobile' value={creads.mobile} onChange={(e)=>handleSignup(e)}
                />
            </InputGroup>
            <Flex w="100%" gap={3}>
            <Select variant='filled'    onChange={(e)=>handleSignup(e)}
            name='gender' value={creads.gender} >
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            </Select>
            <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                name='DOB' value={creads.DOB} onChange={(e)=>handleSignup(e)}
                />
            </Flex>
            <Button w={"100%"} bgColor={"teal.100"} variant='solid' onClick={()=>handleSubmit()}>
                Submit
            </Button>
        </VStack>
    </Box>
  )
}

export default SignUp