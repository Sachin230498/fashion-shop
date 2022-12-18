import React, { useEffect } from "react";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
// import ProductCard1 from "../components/ProductCard1";
import { getKidsAPI } from "../redux/kids/kids.actions";
import Navbar from "../Routes/Navbar";

const Kids = () => {
  const kidData = useSelector((store) => store.kids.kids);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getKidsAPI());
  }, []);
  return (
    <Box
      w="90%"
      marginLeft="40px"
      justifyContent="center"
      alignItems="center"
      bg="background-color: rgb(191, 212, 220);"
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
        {kidData.map((post) => (
          // <ProductCard1
          //   key={post.id}
          //   name={post.name}
          //   image={post.image}
          //   price={post.price}
          // />
          <Box justifyContent="center" w="350px">
            <Image
              width="250px"
              height="380px"
              display="block"
              marginLeft="50px"
              src={post.image}
              alt={post.name}
              onClick={() => {
                navigate(`/kids/${post.id}`);
              }}
            />
            <AddIcon />
            <Text>{post.name}</Text>
            <Text>₹ {post.price}</Text>
            <Link to={`/kids/${post.id}`}>More Details</Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default Kids;
