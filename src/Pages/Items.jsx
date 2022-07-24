import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Select,
  Text
} from "@chakra-ui/react";
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
  }, []);

  const [sortType, setSortType] = useState(itemss);

  useEffect(() => {
    const sortArray = () => {
      const sorted = [...itemss].sort((a, b) => a.price - b.price);
      setitem(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <Box>
      <Navbar />
      <Select
        onChange={(e) => setSortType(e.target.value)}
        w="150px"
        placeholder="Sort By"
      >
        <option value="asc">Low To High</option>
        <option value="des">High To Low</option>
      </Select>
      <Grid
        w="80%"
        m="auto"
        templateColumns="repeat(3, 1fr)"
        templateRows="auto"
        gap={4}
      >
        {itemss.map((item) => {
          return (
            <GridItem mt="5rem" w="80%" h="450px">
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
