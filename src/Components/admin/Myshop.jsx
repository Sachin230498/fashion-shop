import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import ShopCard from './ShopCard'

export default function Myshop() {
    let shop=useSelector((store)=>store.shop)
  console.log(shop.shopdata.name)
  return (
    <Box textAlign={"center"} mt={50}>
        <Text fontSize={"40px"} >{shop.shopdata.name}</Text>
    <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap={6}>
        {
            shop.shopdata.products.map((el)=><GridItem><ShopCard {...el} brand={shop.shopdata.name} /></GridItem>)
        }
    </Grid>
    </Box>
  )
}
