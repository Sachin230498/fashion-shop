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
import React, { useContext, useEffect, useState } from "react";
//import { Flex, Spacer } from '@chakra-ui/react'
import "../CSS/Home.css";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
// import BtnSlider from "../Components/BtnSlider";
import BtnSlider from "../Components/BtnSlider";
import {
  datadotContainer,
  dataSlider,
  dataSliderFooter,
  imageSlider,
} from "../Data/data";
//import { HamburgerIcon } from '@chakra-ui/icons';
//import { AuthContext } from '../Context/AuthContext';
import Navbar from "./Navbar";

export const Home = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [color, setColor] = useState("white");
  const [active, setactive] = useState("dots1");

  //  const { isOpen, onOpen, onClose } = useDisclosure()
  // const btnRef = React.useRef()
  //const {state}=useContext(AuthContext)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY;
      // console.log(scrollCheck)
      if (scrollCheck < 300) {
        setactive("dots1");
        setColor("white");
      }
      if (scrollCheck > 300) {
        setactive("dots2");
        setColor("Black");
      }
      if (scrollCheck > 900) {
        setactive("dots3");
        setColor("White");
      }
      if (scrollCheck > 3000) {
        setactive("dots4");
        setColor("Black");
      }
      if (scrollCheck > 1789) {
        setactive("dots5");
        setColor("white");
      }
      if (scrollCheck > 1789) {
        setactive("dots4");
        setColor("Black");
      }
    });
  }, []);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  return (
    <div className="homeMain">
      <Navbar />

      <div className="container-sliderFooter">
        {dataSliderFooter.map((item, index) => (
          <RouterLink to={item.subTitle}>
            <div
              style={{ color: color }}
              onClick={() => setactive(item.title)}
              className={
                active === item.title ? "sliderFooter active" : "sliderFooter"
              }
            >
              {item.title}
            </div>
          </RouterLink>
        ))}
      </div>
      <div className="container-dots">
        {datadotContainer.map((item, index) => (
          <Link
            activeClass="active"
            to={item.subTitle}
            spy={true}
            smooth={true}
            duration={500}
            delay={1000}
          >
            <div
              id="dots"
              onClick={() => setactive(item.title)}
              className={active === item.title ? "dot active" : "dot"}
            ></div>
          </Link>
        ))}
      </div>
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <Box
        as="section"
        id="box1"
        className="section "
        bg="brand.900"
        color="white"
      >
        <div className="container">
          {dataSlider.map((obj, index) => {
            return (
              <div
                key={obj.id}
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <RouterLink to="/search">
                  <video className="vedio" autoPlay loop muted>
                    <source
                      src={process.env.PUBLIC_URL + obj.title}
                      type="video/mp4"
                    />
                  </video>
                </RouterLink>
              </div>
            );
          })}

          {/*  */}
        </div>
      </Box>

      <Box
        as="section"
        id="box2"
        className="section "
        bg="brand.900"
        color="white"
      >
        <div className="container">
          {imageSlider[0].map((obj, index) => {
            return (
              <div
                key={obj.id}
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <RouterLink to="/search">
                  <Image w="100vw" h="100vh" src={obj.title} />
                  <video className="vedio" autoPlay loop muted>
                    <source
                      src={process.env.PUBLIC_URL + obj.title}
                      type="video/mp4"
                    />
                  </video>
                  <Image w="100vw" h="100vh" src={obj.title} />
                </RouterLink>
              </div>
            );
          })}
        </div>
      </Box>
      <Box as="section" id="box3" className="section " bg="green" color="white">
        <div className="container">
          {imageSlider[1].map((obj, index) => {
            return (
              <div
                key={obj.id}
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <RouterLink to="/search">
                  <Image w="100vw" h="100vh" src={obj.title} />
                </RouterLink>
              </div>
            );
          })}
        </div>
      </Box>
      <Box as="section" id="box4" className="section " bg="grey" color="white">
        <div className="container">
          {imageSlider[2].map((obj, index) => {
            return (
              <div
                key={obj.id}
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <RouterLink to="/search">
                  <Image w="100vw" h="100vh" src={obj.title} />
                </RouterLink>
              </div>
            );
          })}
        </div>
      </Box>
    </div>
  );
};
