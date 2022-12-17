import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Box, Select, Flex } from "@chakra-ui/react";
// const getData = (url) => {
//   return fetch(url).then((res) => res.json());
// };
const getDataid = (id) => {
  return fetch(`http://localhost:8080/kids/${id}`).then((res) => res.json());
};
const SingleK = () => {
  const { id } = useParams();
  const [kidDetails, setKidDetails] = useState({});

  useEffect(() => {
    // getData(`http://localhost:8080/kids/${id}`).then((res) =>
    //   setKidDetails(res.data)
    // );
    getDataid(id)
      .then((res) => {
        setKidDetails(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  console.log(kidDetails);
  return (
    <Box justifyContent="center" w="1000px">
      <Flex>
        <Box>
          <img src={kidDetails.image} alt="prof-pic" />
        </Box>
        <Box>
          <img src={kidDetails.image} alt="prof-pic" />
        </Box>
        <Box>
          <p>Name : {kidDetails.name}</p>
          <p>Price : {kidDetails.price}</p>
          <Box w="200px">
            <Select placeholder="Select Size">
              <option>Small</option>
              <option>Midium</option>
              <option>Large</option>
              <option>Xtra Large</option>
            </Select>
          </Box>
          <Button bg="black" color="white">
            ADD TO CART
          </Button>
          <br />
          <Link to="/kids">GO BACK</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default SingleK;
