import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

export default function Items() {
  const [itemss, setitem] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const item = res.data;
      setitem(item);
    });
  });
  console.log(itemss);
  return (
    <Box>
      <Navbar />
      <Grid
        w="80%"
        m="auto"
        templateColumns="repeat(3, 1fr)"
        templateRows="auto"
        gap={4}
      >
        {itemss.map((item) => {
          return (
            <GridItem mt="3rem" w="80%" h="450px">
              <Image w="100%" h="200px" src={item.image} />
              <Text>GUCCI</Text>
              <Text>{item.title}</Text>
              <Text>${item.price}</Text>
              <Button
                bottom="0"
                _hover={{ bg: "black" }}
                h="2rem"
                w="9rem"
                borderRadius="none"
                mt="2rem"
                fontSize="10px"
                color="white"
                bg="black"
              >
                Add To Cart
              </Button>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}
