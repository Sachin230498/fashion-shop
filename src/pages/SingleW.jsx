import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Kids from "./Kids"
import Womens from "./womens";
import { Select, Box, Button, Flex, Grid, GridItem, Image, Text} from "@chakra-ui/react";
// const getData = (url) => {
//   return fetch(url).then((res) => res.json());
// };
const getDataid = (id) => {
  return fetch(`http://localhost:8080/womens/${id}`).then((res) => res.json());
};
const SingleW = () => {
  const { id } = useParams();
  const [womDetails, setWomDetails] = useState({});

  useEffect(() => {
    // getData(`http://localhost:8080/kids/${id}`).then((res) =>
    //   setKidDetails(res.data)
    // );
    getDataid(id)
      .then((res) => {
        setWomDetails(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  console.log(womDetails);
  return (
    <Box w="100%">

      <Flex w="1000px" marginLeft="50">
   
        <Box marginTop="100px">
        <Box >
        <Grid templateColumns="repeat(6, 1fr)" gap={7} mx={{ base: '0', md: '10', lg: '20', xl: '28' }} >
                            <GridItem colSpan={2} placeItems='end' display={{ base: 'none', lg: 'grid' }}>
                                <Box ml='14' mr='20' mb='6 ' mt="20">
                                    <Text fontSize="md" fontWeight='semibold'>MATERIALS, CARE AND ORIGIN</Text>
                                    <Text fontSize="sm" fontWeight='semibold' my={4}>JOIN LIFE</Text>
                                    <Text fontSize="sm" my={2}>Care for fiber: at least 25% recycled polyester.</Text>
                                    <Text fontSize="sm" my={2}>We use the Join Life label on clothing that is produced using technology and raw materials that help us to reduce the environmental impact of our products.</Text>
                                    <Text fontSize="sm" fontWeight='semibold' my={4}>MATERIALS</Text>
                                    <Text fontSize="sm" my={2}>We work with monitoring programmes to ensure compliance </Text>
                                    <Text fontSize="sm" my={2} textDecoration="underline">View More</Text>
                                </Box>
                            </GridItem>

                            <GridItem colSpan={{ base: 7, sm: 7, md: 4, lg: 3 }} mx={{ base: 10, md: 0 }} >
                                <Box h='85vh' mb='6vh' w='100%' display={{ base: 'none', md: 'block' }} overflowY='scroll' overflowX='hidden' css={{
                                    '&::-webkit-scrollbar': {
                                        width: '1px',
                                    },
                                    '&::-webkit-scrollbar-track': {
                                        width: '6px',
                                    },
                                    '&::-webkit-scrollbar-thumb': {

                                        borderRadius: '24px',
                                    },
                                }} >
                                    {/* {
                                        images.map((image, index) => (
                                            <Image key={index} src={image} alt={title} />
                                        ))
                                    } */}
                                </Box>
                                {/* <Box display={{ base: 'block', md: 'none' }}>
                                    <Image src={images[0]} alt={title} />
                                </Box> */}
                            </GridItem>


                            

                            </Grid>
                            <Box p={4} ml='8' mr='2' mb='4'>
                            <Text fontSize="md" fontWeight='semibold'>OTHER YOU MIGHT LIKE</Text>
                            {/* <SimilarProduct /> */}
                        </Box>

        </Box>
        </Box>
        <Box  box-shadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" marginTop="200px" w="7900px" ml="12">
          <img src={womDetails.image} alt="prof-pic" />
        </Box>
        <Box marginTop="200px" w="900px"  mr="-20">
          <p>Name : {womDetails.name}</p>
          <p>Price : {womDetails.price}</p>
          <Text fontSize="xs" color='gray.500' mb={7}>MRP incl. of all taxes</Text>
          <Box h='1px' bg='gray.200' mt='4' mb={2}></Box>
                                        <Text fontSize="xs" >This product has a larger fit than usual.</Text>
                                        <Flex justifyContent='space-between' alignItems='center'>
                                            <Text fontSize="xs"mt='5' >FIND YOUR SIZE</Text>
                                            <Text fontSize="xs" mt='5' color='gray.500'>SIZE GUIDE</Text>
                                        </Flex>                             
          <Box w="200px">
            <Select placeholder="Select Size"mt='5' >
              <option>Small</option>
              <option>Midium</option>
              <option>Large</option>
              <option>Xtra Large</option>
            </Select>
            <Text fontSize="xs" mt='5' >This product has a larger fit than usual.</Text>
          </Box>
          <Button bg="black" color="white" mt='5'>
            ADD TO CART
          </Button>
          <br />
          <Link to="/womens">GO BACK</Link>
          <Text fontSize="xs" mt='10' mb='2'>CHECK IN-STORE AVAILABILITY</Text>
          <Text fontSize="xs" my='2'>DELIVERY, EXCHANGES AND RETURNS</Text>
        </Box>
      
      </Flex>
      <Womens></Womens>
    </Box>
  );
};

export default SingleW;
