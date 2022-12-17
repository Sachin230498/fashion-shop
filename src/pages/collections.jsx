import { Box, SimpleGrid, Spacer } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { getCollectionsAPI } from "../redux/collections/collection.actions";
import Navbar from "../Routes/Navbar";
const Collections = () => {
  const collectdata = useSelector((store) => store.collection.collections);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollectionsAPI());
  }, []);
  return (
    <Box w="90%" margin="auto" justifyContent="center" alignItems="center">
      <Navbar />
      <Spacer />
      <br />
      <Box
        justifyContent="center"
        gap="6"
        mx="auto"
        mt="20"
        display="flex"
        w="60%"
      >
        <div>VIEW ALL</div>
        <div>DRESSES</div>
        <div>SHIRTS</div>
        <div>TOPS|SWEATERS</div>
        <div>TROUSERS</div>
        <div>SHOES</div>
      </Box>
      <SimpleGrid columns={{ sm: 2, md: 3, xl: 4 }} spacing={10}>
        {collectdata.map((post) => (
          <ProductCard
            key={post.id}
            name={post.name}
            image={post.image}
            price={post.price}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default Collections;
