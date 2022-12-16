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
export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();
  return (
    <>
      <HamburgerIcon ref={btnRef} onClick={onOpen} color="white" />
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
