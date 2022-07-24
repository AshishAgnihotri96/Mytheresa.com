import { Box, Image } from "@chakra-ui/react";

import Navbar from "../Components/Navbar";

import Exclusive from "./Exclusiv";
import Images from "./Image";

import NewArrival from "./NewArrivals";
import Product from "./Product";

function HomePage() {
  return (
    <Box>
      <Navbar />

      <Box mt="1rem" h="1px" bg="gray.300" w="100%"></Box>
      <Images />
      <NewArrival />
      <Exclusive />
      <Product />
      <Image
        cursor="pointer"
        alt="footer"
        src="https://i.im.ge/2022/07/23/Fa0bJL.png"
      />
    </Box>
  );
}

export default HomePage;
