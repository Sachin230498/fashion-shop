import React, { useContext, useEffect, useState } from "react"
import { Box, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent , DrawerHeader, DrawerOverlay, Grid, Icon,Image,StackDivider, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import  "../CSS/Home.css"
import { Link as RouterLink, useNavigate  } from "react-router-dom";
import { HamburgerIcon } from '@chakra-ui/icons';
import { AuthContext } from "../Context/AuthContext";
import Navbar from "./Navbar";



export const Cart=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef();
    const {state,dispatch}=useContext(AuthContext)
    const [total,setTotal]=useState(0)
    const Navigate=useNavigate()
useEffect(()=>{
    let sum=0;
    state.cartData.forEach((el)=>{
        sum=sum+(el.price*el.qty)
    })
    setTotal(sum)
},[state.cartData])
const handleQty=(el,order)=>{
    if(order==="asc"){
      let action={
        type:"addQty",
        payload:el
      }
       
        dispatch(action)
    }
}
const handleDelete=(id)=>{
  let action={
    type:"delete",
    payload:id
  }
  dispatch(action)
}
const proceed=()=>{
  if(state.cartData.length!==0){
    Navigate("/checkout")
  }
}
// {state.isAuth?state.user:"Login"}
const navigate = useNavigate();

const handleCheckout = () => {
    navigate("/checkout");
    
};

    return <>
   <Navbar />

<Text mt="25vh" ml="5em" fontSize="24px" fontWeight="600" fontFamily="Neue-Helvetica, Helvetica, Arial, sans-serif">Cart ({state.cartCount})</Text>
<Text display={["none","none","block"]}bg="#e3dede"ml="8em" fontSize="14px"p="2" width="30%">Items in the basket are not reserved until completing the purchase.</Text>

<Grid ml="6em" mb="15em" 
templateColumns={['100%','repeat(2, 1fr)',
'repeat(2, 1fr)','repeat(3, 1fr)']} mt="2em">
    {state.cartData && state.cartData.map((el)=>{
        return <Box key={el.id} p="2">
       
        <Text fontSize="14px" fontWeight="500">
          {el.title}
          </Text>
        <Box display="flex"  w="70%" h="350px">
            <Image src={el.images[0]}/>
            <Box   display="flex"
             p="2"flexDirection="column" gap="5em">
                <Box>
                    <Text mb="1em"  fontSize="12px"
                     fontWeight="300">{el.color}
                     </Text>

                    <ButtonGroup display="flex"
                     justifyContent="center"
                      alignItems="center">
                        <Button onClick={()=>
                          handleQty(el.id,"dec")} 
                          variant="ghost">-</Button>

                       <Text>{el.qty?el.qty:1}</Text>
                      
                    <Button onClick={()=>
                      handleQty(el.id,"asc")} 
                      variant="ghost">+</Button>

                      

                    </ButtonGroup>
                </Box>
                <Spacer/>
                <Text fontSize="12px"
                 fontWeight="300">&#8377; 
                 {el.price}
                 </Text>

                <Button onClick={()=>handleDelete(el.id)}
                  fontSize="12px" fontWeight="300" p="0"
                   justifyContent="flex-start"
                    variant="ghost">DELETE</Button>

            </Box>
        </Box>
    </Box>
    })}
</Grid>
<Box w="100%" display="flex" justifyContent="flex-end" alignItems="center" position="fixed" bottom="0" left="0" bg="white">
<Box>
    <Text fontSize="14px" fontWeight="500">TOTAL &#8377; {total}</Text>
    <Text fontSize="10px" fontWeight="300">INCLUDING GST</Text>
    <Text fontSize="10px" fontWeight="300">* EXCL SHIPPING COST</Text>
</Box>
<Button onClick={handleCheckout} size='md' w="20%" ml="2em" fontSize="16px" fontWeight="300" color='white' bg='black'
 borderRadius='none' >
  Continue
  </Button>
</Box>
    </>
}