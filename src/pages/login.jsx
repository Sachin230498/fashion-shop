import React, { useContext, useState } from "react"
import { Box, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent , DrawerHeader, DrawerOverlay, Heading, Icon,Input,InputGroup,InputRightElement,Stack,StackDivider, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
// import  "../CSS/Navbar.css"
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
   {/* <Flex className='navbarAll' w='100%' pt='10px' gap={[0,2,2]} flexDir={["column","row","row"]}>
    <Flex gap='2'>
    <Box>
    <Button size='lg' ref={btnRef} mr='1.5em' ml='2em' color='Black' variant='link' onClick={onOpen}>
        <Icon as={HamburgerIcon}  boxSize='1.5em' mt='0.5em' />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
          <svg viewBox="0 0 132 55"  style={{fill:"Black",width:'10em',height:"4em"}}><path fillRule="evenodd" clipRule="evenodd" d="M105.673.035l19.557 53.338 6.77.002v.383h-21.548v-.383h6.344l-6.431-17.54H97.311v.007l.07.204c.521 1.548.78 3.17.764 4.803v6.575c0 3.382 1.494 6.81 4.347 6.81 1.675 0 3.012-.59 4.604-2.046l.227.211C105.594 54.224 103.5 55 100.36 55c-2.37 0-4.398-.57-6.03-1.693l-.309-.222c-2.148-1.624-3.542-4.278-4.142-7.89l-.096-.583-.1-.882-.01-.152-3.599 9.792h5.107v.384H80.496v-.384h5.162l3.951-10.753v-.023a34.924 34.924 0 0 1-.075-1.906v-4.693c0-5.77-4.29-9.08-11.771-9.08H70.41v26.458h6.371v.383h-24.9v-.383h6.345l-6.431-17.54H33.948l-6.371 17.346.266-.044c8.366-1.442 12.213-7.827 12.265-14.55h.388v15.171H0L30.06 2.185H17.972C7.954 2.185 3.42 9.922 3.35 17.635h-.387V1.8h36.488l-.222.385L9.396 53.373h15.695c.39 0 .778-.019 1.169-.05.26-.018.522-.044.788-.077l.095-.01L46.703 0h.387l.013.035 15.369 41.916V2.185h-6.328v-.39h21.778c10.467 0 17.774 5.372 17.774 13.068 0 5.612-5.005 10.27-12.45 11.595l-1.367.174 1.377.14c4.515.517 8.1 1.906 10.641 4.127l.017.016L105.273 0h.386l.014.035zm-8.552 35.32l.038.094h13.061l-8.773-23.928-7.221 19.67.039.037.367.364a11.876 11.876 0 0 1 2.489 3.762zM70.415 26.53V2.185h5.611c7.496 0 11.454 4.414 11.454 12.76 0 8.877-2.272 11.585-9.717 11.585h-7.348zM42.882 11.521L34.09 35.45h17.565L42.882 11.52z"></path></svg>
          </DrawerHeader> */}

          {/* <DrawerBody>
          <VStack
           divider={<StackDivider borderColor='gray.200' />}
           spacing={2}
           align='stretch'
           mt='2em'
            >
           <Box >
           <RouterLink to={state.isAuth?"/account":"/login"}>{state.isAuth?"My Account":"Login"}</RouterLink>
            </Box> */}
            {/* <Box >
            <RouterLink to="/men">Men</RouterLink>
            </Box>
            <Box >
            <RouterLink to="/women">Women</RouterLink>
            </Box>
            <Box >
            <RouterLink to="/kids">Kids</RouterLink>
            </Box> */}
        {/* </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  <Box p='2'  > */}
    {/* <Image src={zaraLogo} w='20%'/> */}
    {/* <RouterLink to='/'>
    <svg viewBox="0 0 132 55"  style={{fill:'Black',width:'12em',height:"5.2em"}}><path fillRule="evenodd" clipRule="evenodd" d="M105.673.035l19.557 53.338 6.77.002v.383h-21.548v-.383h6.344l-6.431-17.54H97.311v.007l.07.204c.521 1.548.78 3.17.764 4.803v6.575c0 3.382 1.494 6.81 4.347 6.81 1.675 0 3.012-.59 4.604-2.046l.227.211C105.594 54.224 103.5 55 100.36 55c-2.37 0-4.398-.57-6.03-1.693l-.309-.222c-2.148-1.624-3.542-4.278-4.142-7.89l-.096-.583-.1-.882-.01-.152-3.599 9.792h5.107v.384H80.496v-.384h5.162l3.951-10.753v-.023a34.924 34.924 0 0 1-.075-1.906v-4.693c0-5.77-4.29-9.08-11.771-9.08H70.41v26.458h6.371v.383h-24.9v-.383h6.345l-6.431-17.54H33.948l-6.371 17.346.266-.044c8.366-1.442 12.213-7.827 12.265-14.55h.388v15.171H0L30.06 2.185H17.972C7.954 2.185 3.42 9.922 3.35 17.635h-.387V1.8h36.488l-.222.385L9.396 53.373h15.695c.39 0 .778-.019 1.169-.05.26-.018.522-.044.788-.077l.095-.01L46.703 0h.387l.013.035 15.369 41.916V2.185h-6.328v-.39h21.778c10.467 0 17.774 5.372 17.774 13.068 0 5.612-5.005 10.27-12.45 11.595l-1.367.174 1.377.14c4.515.517 8.1 1.906 10.641 4.127l.017.016L105.273 0h.386l.014.035zm-8.552 35.32l.038.094h13.061l-8.773-23.928-7.221 19.67.039.037.367.364a11.876 11.876 0 0 1 2.489 3.762zM70.415 26.53V2.185h5.611c7.496 0 11.454 4.414 11.454 12.76 0 8.877-2.272 11.585-9.717 11.585h-7.348zM42.882 11.521L34.09 35.45h17.565L42.882 11.52z"></path></svg>
    </RouterLink>
   </Box>
    </Flex>
  <Spacer /> */}
  {/* <ButtonGroup className='navbtnbox' gap='2' ml={["2em",0,0]} pt='0.7rem' mr={[0,null,'1rem']}>
  <RouterLink to="/search"><Button className='navbarbtn search' fontWeight="500" borderBottom='1px'  borderColor='Black' color='Black' outline='none' p='0px' justifyContent="flex-start"  variant='ghost'>Search</Button></RouterLink>
    <RouterLink to="/help"><Button className='navbarbtn' fontWeight="400" color="#000000" variant='link'>Help</Button></RouterLink>
   
  </ButtonGroup>
</Flex> */}

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