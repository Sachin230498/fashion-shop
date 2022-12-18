import React, { useContext, useState } from "react"
import { Box, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent , DrawerHeader, DrawerOverlay, Heading, Icon,Stack,StackDivider, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import  "../CSS/Navbar.css"
import { Link as RouterLink, useNavigate  } from "react-router-dom";
import { HamburgerIcon} from '@chakra-ui/icons';
import { AuthContext } from "../Context/AuthContext";


export const Account=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [show, setShow] = React.useState(false)
    const {state,dispatch}=useContext(AuthContext)
    
    const Navigate=useNavigate()
    const handleLogout=()=>{
        let action ={
            type:"logout"
        }
        dispatch(action)
        Navigate("/")
    }
    return <>
   <Box p={4} ml={{ base: "2em", md: "4em",lg:"6em" }} mt="30vh"display={{ md: 'flex',lg:'flex' }} >

<Box mr={{ md: '13rem',lg:'13rem' }}>
<Heading size='lg' mb='1em'>Your Account Information</Heading>
<Box>
    <Text>User : {state.user}</Text>
    <Text>User Email : {state.email}</Text>
    <Button onClick={handleLogout} size='md' mt="1em" width="50%" color='white' bg='black' borderRadius='none' >Logout</Button>
</Box>
</Box>
<Box width={{ base: "60vw", md: "40vw",lg:"30vw" }} mt={{ base: 4, md: 0 }}>
<Heading mb='1em' size='lg'>Company</Heading>
<Stack spacing={3}>
  <Text fontSize='xs'>Zara is one of the largest international fashion companies. It belongs to Inditex, one of the world’s largest distribution groups.    </Text>
  <Text fontSize='xs'>The customer is at the heart of our unique business model, which includes design, production, distribution and sales through our extensive retail network.</Text>
</Stack>

</Box>
</Box>
    </>
}