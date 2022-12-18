import React, { useContext, useState } from "react"
import { Box, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent , DrawerHeader, DrawerOverlay, Heading, Icon,Input,InputGroup,InputRightElement,Stack,StackDivider, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import  "../CSS/Home.css"
import { Link as RouterLink, useNavigate  } from "react-router-dom";
import { HamburgerIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { AuthContext } from "../Context/AuthContext";


export const Login=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [show, setShow] = React.useState(false)
    const {state,dispatch}=useContext(AuthContext)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const Navigate=useNavigate()
    const handleClick = () => setShow(!show)
    const handleLogin=(event)=>{
      event.preventDefault();
      if(state.email===email && state.password===password){
        dispatch({
          type:"login"
        })
        Navigate("/")
      }
    }
    return <>


<Box p={4} ml={{ base: "2em", md: "4em",lg:"6em" }} mt="30vh"display={{ md: 'flex',lg:'flex' }} >

<Box mr={{ md: '13rem',lg:'13rem' }}>
<Heading size='lg' mb='1em'>Login</Heading>
<form onSubmit={handleLogin}>
<Input variant='flushed' onChange={(e)=>setEmail(e.target.value)} placeholder='E-MAIL' />
<InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}
        variant='flushed'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick} variant='ghost'>
          {show ? <Icon as={ViewOffIcon}/> : <Icon as={ViewIcon}/>}
        </Button>
      </InputRightElement>
    </InputGroup>
    <Input type='Submit' mt='1em' value="Login" bg="black" cursor='pointer' color='white' borderRadius='none'/>
</form>
</Box>
<Box width={{ base: "60vw", md: "40vw",lg:"30vw" }} mt={{ base: 4, md: 0 }}>
<Heading mb='1em' size='lg'>Register</Heading>
<Stack spacing={3}>
  <Text fontSize='xs'>IF YOU STILL DON'T HAVE A ZARA.COM ACCOUNT, USE THIS OPTION TO ACCESS THE REGISTRATION FORM.</Text>
  <Text fontSize='xs'>BY GIVING US YOUR DETAILS, PURCHASING IN ZARA.COM WILL BE FASTER AND AN ENJOYABLE EXPERIENCE.</Text>
</Stack>
<RouterLink to="/register"><Button size='md' mt="1em" width="50%" color='white' bg='black' borderRadius='none' >Create Account</Button></RouterLink>
</Box>
</Box>
    </>
}