import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect,useState } from "react";
import { Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard1 from "../components/ProductCard1";
import { getMensAPI } from "../redux/mens/actions";
import Navbar from "../Routes/Navbar";
const Mens = () => {
  const menData = useSelector((store) => store.mens.mens);
  const dispatch = useDispatch();

  // const [color, setColor] = useState("white");
  // const [active, setactive] = useState("dots1");

  //  const { isOpen, onOpen, onClose } = useDisclosure()
  // const btnRef = React.useRef()
  //const {state}=useContext(AuthContext)

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     const scrollCheck = window.scrollY;
  //     if (scrollCheck < 300) {
  //       setactive("dots1");
  //       setColor("while");
  //     }
  //     if (scrollCheck > 300) {
  //       setactive("dots2");
  //       setColor("aqua");
  //     }
  //     if (scrollCheck > 800) {
  //       setactive("dots3");
  //       setColor("White");
  //     }
  //     if (scrollCheck > 1389) {
  //       setactive("dots4");
  //       setColor("red");
  //     }
  //     if (scrollCheck > 1689) {
  //       setactive("dots4");
  //       setColor("green");
  //     }
  //     if (scrollCheck > 1900) {
  //       setactive("dots4");
  //       setColor("black");
  //     }
  //     if (scrollCheck > 2180) {
  //       setactive("dots5");
  //       setColor("yellow");
  //     }
  //   });
  // }, []);
   
  useEffect(() => {
    dispatch(getMensAPI());
  }, []);
  return (

    <Box
      w="90%"
      margin="auto"
      justifyContent="center"
      alignItems="center"
      bg="white"
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
        {menData.map((post) => (
          <ProductCard1
            key={post.id}
            name={post.name}
            image={post.image}
            price={post.price}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default Mens;
