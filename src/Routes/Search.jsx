import React, { useContext, useEffect, useState } from "react"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay,Icon,Image,Input,Radio,RadioGroup,SimpleGrid,Skeleton,StackDivider, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure, VStack } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import  "../CSS/Home.css"
import { Link, Link as RouterLink } from "react-router-dom";
import { AddIcon, HamburgerIcon } from '@chakra-ui/icons';
import { AuthContext } from "../Context/AuthContext";


export const Search=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const { isOpen: isOpenf , onOpen: onOpenf, onClose: onClosef } = useDisclosure()
    
    const btnfRef = React.useRef()
    const [isShown, setIsShown] = useState(false);
    const [data,setData]=useState([])
    const [pdata,setpData]=useState([])
    const [srch,setsrch]=useState("")
    const [isloading,setIsLoading]=useState(false)
    const {state,dispatch}=useContext(AuthContext)
    const getData=(url)=>{
       return fetch(url).then((res)=>{
            return res.json()
        })
    }
    const handleFetch=(val)=>{
      getData(`http://localhost:8080/collections${val}`).then((res)=>{
        setIsLoading(true)
        setData(res)
        setpData(res)
        setsrch("");
    }).catch((err)=>{
      console.log(err)
    })
    }
    useEffect(()=>{
        getData("http://localhost:3000/search/woman").then((res)=>{
            setIsLoading(true)
            setData(res)
            setpData(res)
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
    if(el.id===temp.id){
    
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
}
const handleSearch=(e)=>{
  e.preventDefault()
  console.log(srch)
  let v=srch
  if(v==="t-shirt"){
    v="tshirt"
  }
let temp=pdata.filter((el)=>{

  return el.category===v
})
setData(temp)
}
     return <>
   
  <div background-color="rgb(191, 212, 220)">
<Button position="fixed"
 zIndex="100" top={["22vh", null, "10vh"]}
  right="4.5em" top="6em" className="filter" ref={btnfRef} 
  colorScheme='black' fontWeight="400" 
  borderRadius="none" 
  color="#000000"
    h="1.7em" variant='outline'
     onClick={onOpenf}>
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
<form onSubmit={(e)=>handleSearch(e)}>
  <Input color="black" w="80%" ml="10%" borderColor="black" variant="flushed" borderBottom="2px solid black" mb="3em" mt="25vh" type="text" value={srch} onChange={(e)=>{setsrch(e.target.value)}} placeholder="Search for jeans,shirt,shoe and t-shirt" />
</form>
 <Tabs >
<TabList display="flex" justifyContent="center" textAlign="center" alignItems="center">
 <Tab><RouterLink to="/womens">Womens</RouterLink></Tab>
 <Tab><RouterLink to="/mens">Mens</RouterLink></Tab>
 <Tab><RouterLink to="/kids">Kids</RouterLink></Tab>
  {/* <Tab onClick={()=>handleFetch("men")}>Men</Tab>
  <Tab onClick={()=>handleFetch("kids")}>Kids</Tab> */}
</TabList>

<TabPanels>
  <TabPanel >
    


      

<SimpleGrid p="1em" mt="4vh" columns={[2, null, 4]} spacing={["10px", null, "40px"]}>
     {data && data.map((el)=>{
      return <Box key={el.id} position="relative" onMouseOver={() => setIsShown(true)}
      onMouseOut={() => setIsShown(false)}
       maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
               <Skeleton isLoaded={isloading}>
             <RouterLink to={`/productsDetails/${el.id}`}><Image  w="100%"  src={el.image} alt={el.id} /></RouterLink>
             {isShown && (
              <Button variant="ghost" onClick={()=>addtoCart(el)} position="absolute" transform="translate(0%, -100%)"><Icon as={AddIcon} /></Button>
      )}
             <Box p="0.2em 0.7em" fontSize={{ base: '12px',lg: '14px' }} color="grey" display={{ md: 'flex',lg:'flex' }} justifyContent="space-between"><Box>{el.title}</Box> <Box>&#8377; {el.price}</Box></Box>
             </Skeleton>
        </Box>
     })} 
     </SimpleGrid>
    
  </TabPanel>
  <TabPanel>
  <SimpleGrid p="1em" mt={["25vh",null,"20vh"]} columns={[2, null, 4]} spacing={["10px", null, "40px"]}>
     {data && data.map((el)=>{
      return <Box key={el.id} position="relative" onMouseOver={() => setIsShown(true)}
      onMouseOut={() => setIsShown(false)}
       maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
               <Skeleton isLoaded={isloading}>
             <RouterLink to={`/productsDetails/${el.id}`}><Image  w="100%"  src={el.image} alt={el.id} /></RouterLink>
             {isShown && (
              <Button variant="ghost" onClick={()=>addtoCart(el)} position="absolute" transform="translate(0%, -100%)"><Icon as={AddIcon} /></Button>
      )}
             <Box p="0.2em 0.7em" fontSize={{ base: '12px',lg: '14px' }} color="grey" display={{ md: 'flex',lg:'flex' }} justifyContent="space-between"><Box>{el.title}</Box> <Box>&#8377; {el.price}</Box></Box>
             </Skeleton>
        </Box>
     })} 
     </SimpleGrid>
  </TabPanel>
  <TabPanel>
  <SimpleGrid p="1em" mt={["25vh",null,"20vh"]} columns={[2, null, 4]} spacing={["10px", null, "40px"]}>
     {data && data.map((el)=>{
      return <Box key={el.id} position="relative" onMouseOver={() => setIsShown(true)}
      onMouseOut={() => setIsShown(false)}
       maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
               <Skeleton isLoaded={isloading}>
             <RouterLink to={`/productsDetails/${el.id}`}><Image  w="100%"  src={el.image} alt={el.id} /></RouterLink>
             {isShown && (
              <Button variant="ghost" onClick={()=>addtoCart(el)} position="absolute" transform="translate(0%, -100%)"><Icon as={AddIcon} /></Button>
      )}
             <Box p="0.2em 0.7em" fontSize={{ base: '12px',lg: '14px' }} color="grey" display={{ md: 'flex',lg:'flex' }} justifyContent="space-between"><Box>{el.title}</Box> <Box>&#8377; {el.price}</Box></Box>
             </Skeleton>
        </Box>
     })} 
     </SimpleGrid>
  </TabPanel>
</TabPanels>
</Tabs>
</div>
</>
}