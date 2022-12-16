import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard1 from "../components/ProductCard1";
import { getMensAPI } from "../redux/mens/actions";
import Navbar from "../Routes/Navbar";
const Mens = () => {
  const menData = useSelector((store) => store.mens.mens);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMensAPI());
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
      <Box
        w="100px"
        marginTop="100px"
        justifyContent="left"
        marginLeft="1000px"
      >
        <Select placeholder="Sortby">
          <option value="lowtohigh">Low to high</option>
          <option value="hightolow">High to low</option>
        </Select>
      </Box>
      <br />
      <SimpleGrid columns={{ sm: 2, md: 3, xl: 4 }} spacing={4}>
        {menData.map((post) => (
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
export default Mens;
