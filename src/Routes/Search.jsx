import React, { useContext, useEffect, useState } from "react"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay,Icon,Image,Input,Radio,RadioGroup,SimpleGrid,Skeleton,StackDivider, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure, VStack } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import  "../CSS/Home.css"
import { Link as RouterLink } from "react-router-dom";
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
   
    <Flex className='navbarAll' w='100%' pt='10px' gap={[0,2,2]} flexDir={["column","row","row"]}>
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
          </DrawerHeader>

          <DrawerBody>
          <VStack
           divider={<StackDivider borderColor='gray.200' />}
           spacing={2}
           align='stretch'
           mt='2em'
            >
           <Box >
           <RouterLink to={state.isAuth?"/account":"/login"}>{state.isAuth?state.user:"Login"}</RouterLink>
            </Box>
            <Box >
            <RouterLink to="/men">Men</RouterLink>
            </Box>
            <Box >
            <RouterLink to="/women">Women</RouterLink>
            </Box>
            <Box >
            <RouterLink to="/kids">Kids</RouterLink>
            </Box>
        </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  <Box p='2'  >
    {/* <Image src={zaraLogo} w='20%'/> */}
    <RouterLink to='/'>
    <svg viewBox="0 0 132 55"  style={{fill:'Black',width:'12em',height:"5.2em"}}><path fillRule="evenodd" clipRule="evenodd" d="M105.673.035l19.557 53.338 6.77.002v.383h-21.548v-.383h6.344l-6.431-17.54H97.311v.007l.07.204c.521 1.548.78 3.17.764 4.803v6.575c0 3.382 1.494 6.81 4.347 6.81 1.675 0 3.012-.59 4.604-2.046l.227.211C105.594 54.224 103.5 55 100.36 55c-2.37 0-4.398-.57-6.03-1.693l-.309-.222c-2.148-1.624-3.542-4.278-4.142-7.89l-.096-.583-.1-.882-.01-.152-3.599 9.792h5.107v.384H80.496v-.384h5.162l3.951-10.753v-.023a34.924 34.924 0 0 1-.075-1.906v-4.693c0-5.77-4.29-9.08-11.771-9.08H70.41v26.458h6.371v.383h-24.9v-.383h6.345l-6.431-17.54H33.948l-6.371 17.346.266-.044c8.366-1.442 12.213-7.827 12.265-14.55h.388v15.171H0L30.06 2.185H17.972C7.954 2.185 3.42 9.922 3.35 17.635h-.387V1.8h36.488l-.222.385L9.396 53.373h15.695c.39 0 .778-.019 1.169-.05.26-.018.522-.044.788-.077l.095-.01L46.703 0h.387l.013.035 15.369 41.916V2.185h-6.328v-.39h21.778c10.467 0 17.774 5.372 17.774 13.068 0 5.612-5.005 10.27-12.45 11.595l-1.367.174 1.377.14c4.515.517 8.1 1.906 10.641 4.127l.017.016L105.273 0h.386l.014.035zm-8.552 35.32l.038.094h13.061l-8.773-23.928-7.221 19.67.039.037.367.364a11.876 11.876 0 0 1 2.489 3.762zM70.415 26.53V2.185h5.611c7.496 0 11.454 4.414 11.454 12.76 0 8.877-2.272 11.585-9.717 11.585h-7.348zM42.882 11.521L34.09 35.45h17.565L42.882 11.52z"></path></svg>
    </RouterLink>
   </Box>
    </Flex>
  <Spacer />
  <ButtonGroup className='navbtnbox' gap='2' ml={["2em",0,0]} pt='0.7rem' mr={[0,null,'1rem']}>
    <RouterLink to={state.isAuth?"/account":"/login"}><Button className='navbarbtn loginbtn'  fontWeight="400" color="black" variant='link'>{state.isAuth?state.user:"Login"}</Button></RouterLink>
    <RouterLink to="/help"><Button className='navbarbtn' fontWeight="400" color="#000000" variant='link'>Help</Button></RouterLink>
    <RouterLink to="/cart">
    <Button className='navbarbtn' position="relative"  color='Black' variant='link'><Box as="span"  fontSize="14px" className="cartCounter">{state.cartCount}</Box>
      <svg  style={{fill:"Black",width:'2em',height:"2.2em"}}><path fillRule="evenodd" clipRule="evenodd" d="M9 5.001V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.001h5v7h-1v-6H5v13.9h10v1H4V5h5zM10 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.001h-4V4z"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M22.8 23.4v-9h-5.4v9l2.695-2.827L22.8 23.4zm-4.6-1.998l1.894-1.987L22 21.407V15.2h-3.8v6.202z"></path>
      </svg>
    </Button>
    </RouterLink>
  </ButtonGroup>  
</Flex>

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
<form onSubmit={(e)=>handleSearch(e)}>
  <Input color="black" w="80%" ml="10%" borderColor="black" variant="flushed" borderBottom="2px solid black" mb="3em" mt="25vh" type="text" value={srch} onChange={(e)=>{setsrch(e.target.value)}} placeholder="Search for jeans,shirt,shoe and t-shirt" />
</form>
 <Tabs >
<TabList display="flex" justifyContent="center" textAlign="center" alignItems="center">
  <Tab onClick={()=>handleFetch("woman")}>Woman</Tab>
  <Tab onClick={()=>handleFetch("men")}>Men</Tab>
  <Tab onClick={()=>handleFetch("kids")}>Kids</Tab>
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
</>
}