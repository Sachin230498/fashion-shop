import { Input } from '@chakra-ui/input'
import { Flex } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { Button } from 'react-scroll'

function Multipleinput({handledetails,index}) {
    let [add,setadd]=useState(false)
    let [data,setData]=useState({
        size:"",
        quantity:1,
        price:1
    })
    function handleSignup(e){
        setData({...data,[e.target.name]:e.target.value})
      }
    function  handleSubmit(){
        handledetails(data,index)
        setadd(true)
        
    }
  return (
    <div>
    <Flex >
    <Input  placeholder='Enter size' type="text" 
  name='size' value={data.size} onChange={(e)=>handleSignup(e)}
  />
  <Input  placeholder='Enter Price' type="number" 
  name='price' value={data.price} onChange={(e)=>handleSignup(e)}
  />
  <Input  placeholder='Enter quantity' type="number" 
  name='quantity' value={data.quantity} onChange={(e)=>handleSignup(e)}
  />
    </Flex>
    <Button w={"100%"} bgColor={"teal.100"} variant='solid' onClick={()=>handleSubmit()}>
           Add item     
    </Button>
    </div>
  )
}

export default Multipleinput