import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard1 from "../components/ProductCard1";
import { getWomensAPI } from "../redux/womens/actions";
import Navbar from "../Routes/Navbar";
const Womens = () => {
  const womensData = useSelector((store) => store.womens.womens);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWomensAPI());
  }, []);
  return (
    <Box
      w="90%"
      margin="auto"
      justifyContent="center"
      alignItems="center"
      bg="white"
      paddingBottom="20px"
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
        {womensData.map((post) => (
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
export default Womens;
