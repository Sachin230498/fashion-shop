import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  StackDivider,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import "../CSS/Home.css";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { HamburgerIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { AuthContext } from "../Context/AuthContext";
import Navbar from "./Navbar";

export const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [show, setShow] = React.useState(false);
  const { state, dispatch } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const handleClick = () => setShow(!show);
  const handleLogin = (event) => {
    event.preventDefault();
    const action = {
      type: "empty",
    };
    if (password !== 0) {
      dispatch(action);
      Navigate("/");
      alert("Order Succesfully Completed");
    }
  };
  // const handeleorder=()=>{
  //   alert("Order Succesfully Completed")
  //   Navigate("/")
  // }
  return (
    <>
      <Navbar />

      <Box
        p={4}
        ml={{ base: "2em", md: "4em", lg: "6em" }}
        mt="30vh"
        display={{ md: "flex", lg: "flex" }}
      >
        <Box mr={{ md: "13rem", lg: "13rem" }}>
          <Heading size="lg" mb="1em">
            Payment Details
          </Heading>
          <form onSubmit={handleLogin}>
            <Input variant="flushed" placeholder="Full Name" />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter Card Details"
                onChange={(e) => setPassword(e.target.value)}
                variant="flushed"
                required
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                  variant="ghost"
                >
                  {show ? <Icon as={ViewOffIcon} /> : <Icon as={ViewIcon} />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Box display="flex">
              <Input
                type="Number"
                variant="flushed"
                placeholder="Exp-Date/Year"
              />
              <Input type="Number" variant="flushed" placeholder="CVV" />
            </Box>
            <Input
              type="Submit"
              mt="1em"
              value="Pay Now"
              bg="black"
              cursor="pointer"
              color="white"
              borderRadius="none"
            />
          </form>
        </Box>
      </Box>
    </>
  );
};
