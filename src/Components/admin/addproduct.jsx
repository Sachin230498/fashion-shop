import React from 'react'
import {Box, Button,  Flex,  FormControl,  FormLabel,  Input, InputGroup, InputRightElement,  Select,  Spinner,  useToast, VStack} from "@chakra-ui/react"
import { useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { addProduct } from '../../redux/actios/shopAction'
import { useNavigate } from 'react-router'
import { UplodeFile } from './functions'

let init={

    title:"" ,
    category:"",
    gender:"men" ,
    description:"",
    image:"",
    price:"",
    color:"",
    details:[],
  }
function AddProduct() {
let shop=useSelector((store)=>store.shop)



let nevigate=useNavigate()
let dispatch=useDispatch()
const toast = useToast()
    let [pic,setPic]=useState("https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png")
    const [inputFields, setInputFields] = useState([
      {size:"",
      quantity:"",
      price:""}
  ])
    let [creads,setCreads]=useState(init)
    function addDetail(){
      let newfield = {size:"",
      quantity:"",
      price:""}
    setInputFields([...inputFields, newfield])
    }
    
    function handleSignup(e){
      setCreads({...creads,[e.target.name]:e.target.value})
    }
    function handleSubmit(){
      
      
      dispatch(addProduct ({...creads,images:pic,details:inputFields,toast,nevigate,id:shop.shopdata._id}))
      setCreads(init)
      setInputFields([{size:"",
      quantity:"",
      price:""}])
      setPic("")

      
    }
    const handleFormChange = (index, event) => {
      let data = [...inputFields];
      data[index][event.target.name] = event.target.value;
      setInputFields(data);
  }

  if(shop.islodding){
    return(<Spinner size={"xl"} />)
  }
    
  return (
    <Box w="60%" m={"auto"} p={10} mt={50}>
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
            <FormLabel>Image</FormLabel>
            <Input type='text' placeholder='Enter image url' 
            name='pic' value={pic} onChange={(e)=>setPic(e.target.value)}/>
            </FormControl>
            <FormControl isRequired>
            <FormLabel>Category</FormLabel>
            <Input type='text' placeholder='Enter Category' 
            name='category' value={creads.category} onChange={(e)=>handleSignup(e)}/>
            </FormControl>
            <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input type='text' placeholder='Enter Title' 
            name='title' value={creads.title} onChange={(e)=>handleSignup(e)}/>
            </FormControl>
            <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Input  placeholder='Enter Description' type="text" 
            name='description' value={creads.description} onChange={(e)=>handleSignup(e)}
            />
            </FormControl>
           <Flex w="100%">
           <Input  placeholder='Enter Price' type="number" 
          name='price' value={creads.price} onChange={(e)=>handleSignup(e)}
          />
          <Input  placeholder='Enter Color' type="text" 
          name='color' value={creads.color} onChange={(e)=>handleSignup(e)}
          />
           </Flex>
            <Flex w="100%" gap={3}>
            <Select variant='filled'    onChange={(e)=>handleSignup(e)}
            name='gender' value={creads.gender} >
            <option value='men<'>Men</option>
            <option value='women'>Women</option>
            <option value='kids'>Kids</option>
            </Select>
            <Button w={"100%"} bgColor={"teal.100"} variant='solid' onClick={()=>addDetail()}>
                Add product details
            </Button>
            </Flex>
            {inputFields.map((input, index) => {
          return (
            <Flex key={index}>
            <Input  placeholder='Enter size' type="text" 
          name='size' value={input.size} onChange={event => handleFormChange(index, event)}
          />
          <Input  placeholder='Enter Price' type="number" 
          name='price' value={input.price} onChange={event => handleFormChange(index, event)}
          />
          <Input  placeholder='Enter quantity' type="number" 
          name='quantity' value={input.quantity} onChange={event => handleFormChange(index, event)}
          />
            </Flex>
          )
        })}  
            <Button w={"100%"} bgColor={"teal.100"} variant='solid' onClick={()=>handleSubmit()}>
                Submit
            </Button>
        </VStack>
    </Box>
  )
}

export default AddProduct
