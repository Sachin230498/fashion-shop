import React from 'react'
import {Box, Button,  FormControl,  FormLabel,  Input, InputGroup, InputRightElement,  useToast, VStack} from "@chakra-ui/react"
import { useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { addshop } from '../../redux/actios/shopAction'
import { useNavigate } from 'react-router'

let init={

  name:"" ,
  address:"",
  jstNo:"" ,
  category:""
  }
function AddShop() {
     const toast = useToast()
    let [showPassword,setShowpassword]=useState(false)
    let [creads,setCreads]=useState(init)
    let nevigate=useNavigate()
    let dispatch=useDispatch()
    function handleSignup(e){
      setCreads({...creads,[e.target.name]:e.target.value})
    }
    function handleSubmit(){
      dispatch(addshop({...creads,toast,nevigate}))
      console.log(creads)
      
    }
    

  return (
    <Box w="60%" m={"auto"} p={10} mt={50}>
        <VStack spacing={2}>
        <FormControl isRequired>
            <FormLabel>Shop Name</FormLabel>
            <Input type='text' placeholder='Enter Shop Name' 
            name='name' value={creads.name} onChange={(e)=>handleSignup(e)}/>
            </FormControl>
            <FormControl isRequired>
            <FormLabel>Shop address</FormLabel>
            <Input  placeholder='Enter Shop address' 
            name='address' value={creads.address} onChange={(e)=>handleSignup(e)}
            />
            </FormControl>
            <FormControl isRequired>
            <FormLabel>JST Number</FormLabel>
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter jstNo'
                    name='jstNo' value={creads.jstNo} onChange={(e)=>handleSignup(e)}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={()=>{setShowpassword(!showPassword)}}>
                    {showPassword ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>         
            </FormControl>
            <FormControl isRequired>
            <FormLabel>Category</FormLabel>
            <Input  placeholder='Enter Category' 
            name='category' value={creads.category} onChange={(e)=>handleSignup(e)}
            />
            </FormControl>
            
            <Button w={"100%"} bgColor={"teal.100"} variant='solid' onClick={()=>handleSubmit()}>
                Submit
            </Button>
        </VStack>
    </Box>
  )
}

export default AddShop
