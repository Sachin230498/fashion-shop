import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
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
  Icon,
  Image,
  StackDivider,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Dbody from "./Menuburger";
import Sidebar from "../components/Sidebar";
import Gen from "../media/GenChoice.jpeg";
import Login from "./Login";
import Search from "../Routes/Search"


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { state } = useContext(AuthContext);
  const [color, setColor] = useState("black");
  const [active, setactive] = useState("dots1");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY;
      // console.log(scrollCheck)
      if (scrollCheck < 300) {
        setactive("dots1");
        setColor("grey");
      }
      if (scrollCheck > 300) {
        setactive("dots2");
        setColor("aqua");
      }
      if (scrollCheck > 800) {
        setactive("dots3");
        setColor("black");
      }
      if (scrollCheck > 1389) {
        setactive("dots4");
        setColor("red");
      }
      if (scrollCheck > 1689) {
        setactive("dots4");
        setColor("green");
      }
      if (scrollCheck > 1889) {
        setactive("dots4");
        setColor("black");
      }
      if (scrollCheck > 1900) {
        setactive("dots5");
        setColor("black");
      }
    });
  }, []);

  return (
    <div>
      
      <Flex className='navbarAll' w='100%' pt='10px' gap={[0,2,2]} flexDir={["column","row","row"]}>
    <Flex gap='2'>
    <Box mr="1em">  
      <Sidebar boxSize="1.5em"  mt="0.5em" />
    </Box>
  <Box p='2'  >
    {/* <Image src={zaraLogo} w='20%'/> */}
    <RouterLink to="/">
              <img src={Gen} width="80%" alt="Zaralogo" />
       
     </RouterLink>
   </Box>
    </Flex>

  <Spacer />

  <ButtonGroup className='navbtnbox'
   gap='2' ml={["0.5em",0,0]}
    pt='0.7rem' mr={[0,null,'1rem']}>

    <RouterLink to="/search">
      <Button className='navbarbtn search'
       fontWeight="500" borderBottom='1px' 
        borderColor={color} color={color}
         outline='none' p='0px' 
         justifyContent="flex-start" 
          variant='ghost'>
            Search
        </Button>
    </RouterLink>


    <RouterLink to={state.isAuth?"/account":"/login"}>
      <Button className='navbarbtn loginbtn' 
       fontWeight="400" color={color} 
       variant='link'>
        {state.isAuth?state.user:"Login"}
      </Button>
    </RouterLink>

    <RouterLink to="/help">
      <Button className='navbarbtn'
       fontWeight="400" color={color}
        variant='link'>
          Help
      </Button>
    </RouterLink>


   <RouterLink to={state.isAuth?"/cart":"/login"}>
       <Button className='navbarbtn' 
       position="relative"
         color={color} variant='link'>
          <Box as="span"  fontSize="14px"
           className="cartCounter">
            {state.cartCount}
          </Box>

          <svg  style={{fill:color,width:'2em',height:"2.2em"}}><path fillRule="evenodd" clipRule="evenodd" d="M9 5.001V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.001h5v7h-1v-6H5v13.9h10v1H4V5h5zM10 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.001h-4V4z"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M22.8 23.4v-9h-5.4v9l2.695-2.827L22.8 23.4zm-4.6-1.998l1.894-1.987L22 21.407V15.2h-3.8v6.202z"></path>
          </svg>

       </Button>
   </RouterLink>

  </ButtonGroup>
</Flex>

    </div>
  )
}

export default Navbar
