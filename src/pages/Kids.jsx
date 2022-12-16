import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import ProductCard1 from "../components/ProductCard1";
import { getKidsAPI } from "../redux/kids/kids.actions";
import Navbar from "../Routes/Navbar";
const Kids = () => {
  const kidData = useSelector((store) => store.kids.kids);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getKidsAPI());
  }, []);
  return (
    <Box
      w="90%"
      margin="auto"
      justifyContent="center"
      alignItems="center"
      bg="white"
    >
      <Navbar />
      <br />
      <SimpleGrid columns={{ sm: 2, md: 3, xl: 4 }} spacing={4}>
        {kidData.map((post) => (
          <ProductCard1
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
export default Kids;
