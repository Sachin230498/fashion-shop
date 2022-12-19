import React, { useContext } from "react";
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

export const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [user, setUser] = React.useState("");
  const handleClick = () => setShow(!show);
  const { dispatch } = useContext(AuthContext);
  const Navigate = useNavigate();
  const handleSignup = (event) => {
    event.preventDefault();
    let action = {
      type: "signup",
      payload: {
        email: email,
        password: password,
        user: user,
      },
    };
    if (email !== "" && password !== "" && user !== "") {
      dispatch(action);
      Navigate("/login");
    } else {
      alert("Please Enter Your Details");
    }
  };
  const signup = () => {
    alert("User Created Successfully");
  };
  return (
    <>
      <Navbar />

      <Box
        p={4}
        ml={{ base: "2em", md: "4em", lg: "6em" }}
        mt="30vh"
        display={{ md: "flex", lg: "flex" }}
      >
        <Box mr={{ md: "13rem", lg: "8rem" }}>
          <Heading size="lg" mb="1em">
            Create Account
          </Heading>
          <form onSubmit={handleSignup}>
            <Input
              variant="flushed"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              placeholder="Full Name"
            />
            <Input
              variant="flushed"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="E-MAIL"
            />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create password"
                variant="flushed"
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
            <Input
              onClick={signup}
              type="Submit"
              mt="1em"
              value="Signup"
              bg="black"
              cursor="pointer"
              color="white"
              borderRadius="none"
            />
          </form>
        </Box>
        <Box
          width={{ base: "60vw", md: "40vw", lg: "30vw" }}
          mt={{ base: 4, md: "4em" }}
        >
          <Input variant="flushed" placeholder="Address" />
          <Input variant="flushed" placeholder="Pincode" />
          <Input variant="flushed" placeholder="Phone Number" />
        </Box>
      </Box>
    </>
  );
};
