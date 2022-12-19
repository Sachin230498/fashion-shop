import React, { useContext, useEffect, useState } from "react"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay,Icon,Image,Radio,RadioGroup,SimpleGrid,Skeleton,StackDivider, useDisclosure, VStack } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import  "../CSS/Home.css"
import { Link as RouterLink } from "react-router-dom";
import { AddIcon, HamburgerIcon } from '@chakra-ui/icons';
import { AuthContext } from "../Context/AuthContext";
import Navbar from "./Navbar";


export const Women=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const { isOpen: isOpenf , onOpen: onOpenf, onClose: onClosef } = useDisclosure()
    
    const btnfRef = React.useRef()
    const [isShown, setIsShown] = useState(false);
    const [data,setData]=useState([])
    const [pdata,setpData]=useState([])
    const [isloading,setIsLoading]=useState(false)
    const {state,dispatch}=useContext(AuthContext)
    const getData=(url)=>{
       return fetch(url).then((res)=>{
            return res.json()
        })
    }
    useEffect(()=>{
        getData("https://aakash.onrender.com/products?category=Womens").then((res)=>{
            setIsLoading(true)
            setData(res.data)
            setpData(res.data)
        }).catch((err)=>{
          console.log(err)
        })
    },[])

 const handleSort=(value)=>{
  setIsLoading(false)
if(value==="lth"){
  let newdata=data.sort((a,b)=>{
    return a.price-b.price
  })
  setData(newdata)
  setIsLoading(true)
}
else if(value==="htl"){
  let newdata=data.sort((a,b)=>{
    return b.price-a.price
  })
  
  setData(newdata)
  setIsLoading(true)
}
 }


 const handleClose=()=>{
 setData(pdata)
  onClosef()
 }

 const handleCategory=(value)=>{
  setIsLoading(false)
  
  if(value==="jeans"){
    
    let newdata=pdata.filter((el)=>{
      return el.category==="jeans"
    })
    setData(newdata)
    setIsLoading(true)
  }
  else if(value==="shirt"){
    let newdata=pdata.filter((el)=>{
      return el.category==="shirt"
    })
    setData(newdata)
    setIsLoading(true)
  }else if(value==="tshirt"){
    let newdata=pdata.filter((el)=>{
      return el.category==="tshirt"
    })
    setData(newdata)
    setIsLoading(true)
  }
  else if(value==="shoe"){
    let newdata=pdata.filter((el)=>{
      return el.category==="shoe"
    })
    setData(newdata)
    setIsLoading(true)
  }
 }

 const addtoCart=(temp)=>{
  let flag=false
  state.cartData.forEach((el)=>{
    if(el._id===temp.id){
    
      flag=true;
    }
  })
  if(flag===false){
    let action={
      type:"addCartData",
      payload:{
        data:temp
      }
    }
   dispatch(action)
    
  }else{
    alert("Item Already Added")
  }
  console.log(state.cartData)
}
    return <>
   
  <Navbar />

{/* filter drawer begins */}

<Button position="fixed" zIndex="100" top={["22vh", null, "10vh"]} right="1.5em" className="filter" ref={btnfRef} colorScheme='black' fontWeight="400" borderRadius="none" color="#000000"  h="1.7em" variant='outline' onClick={onOpenf}>
        Filter
      </Button>
      <Drawer
        isOpen={isOpenf}
        placement='right'
        onClose={onClosef}
        finalFocusRef={btnfRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter</DrawerHeader>

          <DrawerBody>
          <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' fontWeight={500} textAlign='left'>
         Filter by category
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <RadioGroup defaultValue='1' onChange={(e)=>handleCategory(e)}>
<VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
>
    <Radio value='jeans'>Jeans</Radio>
    <Radio value='shirt'>Shirt</Radio>
    <Radio value='tshirt'>T-Shirt</Radio>
    <Radio value='shoe'>Shoe</Radio>
  </VStack>
</RadioGroup>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' fontWeight={500} textAlign='left'>
          Sort by price
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
   
<RadioGroup defaultValue='1' onChange={(e)=>handleSort(e)}>
<VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
>
    <Radio value='lth'>Price Low to High</Radio>
    <Radio value='htl'>Price High to Low</Radio>
  </VStack>
</RadioGroup>

    </AccordionPanel>
  </AccordionItem>
</Accordion>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={handleClose}>
              Reset
            </Button>
            <Button colorScheme='blue' onClick={onClosef}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      

   <SimpleGrid p="1em" mt={["25vh",null,"20vh"]} columns={[2, null, 4]} spacing={["10px", null, "40px"]}>
     {data && data.map((el)=>{
      return <Box key={el._id} position="relative"
       onMouseOver={() => setIsShown(true)}
        onMouseOut={() => setIsShown(false)}
         maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            
               <Skeleton isLoaded={isloading}>
             
             <RouterLink to={`/products/${el._id}`}>
              <Image  w="100%"  src={el.images[0]} alt={el._id} />
              </RouterLink>

             {isShown && (
              <Button variant="ghost" onClick={()=>addtoCart(el)}
               position="absolute" transform="translate(0%, -100%)">
                <Icon as={AddIcon} /></Button>
              )}
             
             <Box p="0.2em 0.7em" fontSize={{ base: '12px',lg: '14px' }} 
             color="grey" display={{ md: 'flex',lg:'flex' }} 
             justifyContent="space-between"><Box>{el.title}</Box>
              <Box>&#8377; {el.price}</Box></Box>
             </Skeleton>
        </Box>
     })} 
     </SimpleGrid>
    </>
}