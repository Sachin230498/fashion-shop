import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  Flex,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Gen from "../media/GenChoice.jpeg";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();

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
      if (scrollCheck > 1289) {
        setactive("dots4");
        setColor("purple");
      }
      if (scrollCheck > 1689) {
        setactive("dots4");
        setColor("green");
      }
      if (scrollCheck > 1889) {
        setactive("dots4");
        setColor("black");
      }
    });
  }, []);

  return (
    <>
      <HamburgerIcon  ref={btnRef} onClick={onOpen} position="relative" left="20px" boxSize="1.5em" mt="0.5em"color={color} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image src={Gen} />
          </DrawerHeader>
          <DrawerBody>
            <Flex>
              <Menu>
                <MenuButton>Mens</MenuButton>
                <MenuList>
                  <Text
                    onClick={() => {
                      navigate("/mens");
                    }}
                  >
                    New/BestSeller
                  </Text>
                </MenuList>
              </Menu>
              <Spacer />
              <Menu>
                <MenuButton>Womens</MenuButton>
                <MenuList>
                  <Text
                    onClick={() => {
                      navigate("/womens");
                    }}
                  >
                    Latest/BestSeller
                  </Text>
                </MenuList>
              </Menu>
              <Spacer />
              <Menu>
                <MenuButton>Kids</MenuButton>
                <MenuList>
                  <Text
                    onClick={() => {
                      navigate("/kids");
                    }}
                  >
                    BestSeller
                  </Text>
                </MenuList>
              </Menu>
              <Spacer />
              <Menu>
                <MenuButton>Collections</MenuButton>
                <MenuList>
                  <Text
                    onClick={() => {
                      navigate("/collections");
                    }}
                  >
                    Origin/BestSeller
                  </Text>
                </MenuList>
              </Menu>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
