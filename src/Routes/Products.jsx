import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import React from "react"
import { Box, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay,Grid,Icon,Image,StackDivider, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import  "../CSS/Home.css"
import { Link as RouterLink  } from "react-router-dom";
import { HamburgerIcon } from '@chakra-ui/icons';
import { AuthContext } from "../Context/AuthContext"
import Navbar from "./Navbar"

export const Products=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const params=useParams()
    const [pdata,setpdata]=useState([])
    const [data,setdata]=useState([])
    const [mainImg,setMainImg]=useState([])
   const {state,dispatch}=useContext(AuthContext)
    let baseUrl=""
  // if(params.id.includes("w")){
   baseUrl="https://aakash.onrender.com/products/"+params.id
  // }else if(params.id.includes("m")){
  //   baseUrl="https://aakash.onrender.com/products/"+params.id
  // }else if(params.id.includes("k")){
  //   baseUrl="https://aakash.onrender.com/products/"+params.id
  // }
  
    useEffect(()=>{
        fetch(baseUrl).then((res)=>{
            return res.json()
        }).then((res)=>{
           setpdata(res.data.images)
           setdata(res.data)
           setMainImg(res.images)
           console.log(res.data.images)
        })
    },[baseUrl])
    const handleImage=(value)=>{
      setMainImg(value)
    }
    const handleCart=()=>{
      let flag=false
      state.cartData.forEach((el)=>{
        if(el._id===data._id){
          flag=true;
        }
      })
      if(flag===false){
        let action={
          type:"addCartData",
          payload:{
            data:pdata
          }
        }
       dispatch(action)
        
      }else{
        alert("Item Already Added")
      }
    }
    return <>
   
      <Navbar/>

<Grid p="2em" templateColumns={['100%','repeat(2, 1fr)','repeat(2, 1fr)',
'repeat(3, 1fr)']} mt="10vh">

  <Box  mt="15%" p={"0em 13em 0em 2em"}
   display={["none","none","none","block"]}>
    <Text mb="20px" fontFamily="Times New Roman" fontWeight="500" 
    fontSize='16px' color='#000000'>MATERIALS,CARING</Text>

    <Text mb="20px" fontFamily="Times New Roman" fontWeight="500"
     fontSize='16px' color='#000000'>JOIN LIFE</Text>

    <Text mb="20px" lineHeight="15px" fontFamily="Times New Roman"
     fontWeight="300" fontSize='14px' color='#000000'>
      Care for fiber: at least 35% <br /> recycled polyester.</Text>

    <Text  mb="20px" lineHeight="15px" fontFamily="Times New Roman" 
    fontWeight="300" fontSize='14px' color='#000000'>
      We use the Join Life label
     on clothing that is produced using
     technology and raw materials that help us to reduce the
      environmental impact of our products. </Text>

  </Box>

  <Box  display={["flex","flex","flex"]} 
       flexDirection={["column","row","row"]} gap='2'>
     <Box w="20em" h={["300px","500px","500px"]} 
        height="100%" mt={["10vh","0px","0px"]}>
         <Image src={mainImg}/>
     </Box>

    <Box gap='1' display={["flex","block","block"]} 
    mt={["10px","0px","0px"]}>

      <Image w="3em" cursor="pointer" mb="1em" mr="1em"
       src={pdata[0]} onClick={()=>handleImage(pdata[0])}/>

      <Image w="3em" cursor="pointer" mb="1em"mr="1em" 
      src={pdata[1]} onClick={()=>handleImage(pdata[1])}/>

      <Image w="3em" cursor="pointer" mb="1em"mr="1em" 
      src={pdata[2]} onClick={()=>handleImage(pdata[2])}/>

      <Image w="3em" cursor="pointer" mb="1em"mr="1em"
       src={pdata[3]} onClick={()=>handleImage(pdata[3])}/>


    </Box>
  </Box>


  <Box mt="15%" p={"0em 2em 0em 6em"}>
    
    <Text fontFamily="Times New Roman" 
    fontWeight="500" fontSize='21px' color='#000000'>
      {data.title}</Text>
   
    <Text fontFamily="Times New Roman" 
    fontWeight="300" fontSize='14px' color='#000000'>
      {data.body}</Text>
   
    <Text fontFamily="Times New Roman" m="20px 0px"
     fontWeight="300" fontSize='16px' color='#000000'>
      {data.color}</Text>
   
    <Text fontFamily="Times New Roman" mb="8px"
     fontWeight="300" fontSize='16px' color='#000000'>
      &#8377; {data.price}</Text>
   
    <Text color="#999999"fontFamily="Times New Roman"
     mb="30px" fontWeight="300" fontSize='12px'>
      MRP incl. of all taxes</Text>
   
    <Button size='md' mt="1em"
    fontFamily="Times New Roman"fontWeight="500" 
    fontSize='16px' width="100%" color='#ffffff'
     bg='black' borderRadius='none'
      onClick={handleCart} >ADD TO BAG</Button>
  </Box>
</Grid>
    </>
}