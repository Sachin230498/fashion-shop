import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
const ProductCard1 = ({ name, image, price }) => {
  return (
    <div>
      <Box justifyContent="center" w="350px">
        <Image
          width="250px"
          height="380px"
          display="block"
          marginLeft="50px"
          src={image}
          alt={image}
        />
        <AddIcon />
        <Text>{name}</Text>
        <Text>₹ {price}</Text>
      </Box>
    </div>
  );
};

export default ProductCard1;
