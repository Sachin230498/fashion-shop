import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
const ProductCard = ({ name, image, price }) => {
  return (
    <div>
      <Box justifyContent="center" w="350px">
        <Image
          boxSize="300px"
          display="block"
          marginLeft="25px"
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

export default ProductCard;
