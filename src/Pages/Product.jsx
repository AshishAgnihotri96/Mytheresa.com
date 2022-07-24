import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

function Product() {
  const prod = [
    {
      image:
        "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW29/FE_CW29_1_2x_20220717205654.jpg",
      title: "Bottega Veneta"
    },
    {
      image:
        "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW29/FE_CW29_2_2x_20220717205654.jpg",
      title: "Valentino Garavani"
    },
    {
      image:
        "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW29/FE_CW29_3_2x_20220717205654.jpg",
      title: "Gucci"
    },
    {
      image:
        "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW29/FE_CW29_4_2x_20220717205654.jpg",
      title: "Saint Laurent"
    }
  ];

  return (
    <Box mb="5rem" mt="5rem">
      <Text>PACKING LIGHT</Text>
      <Text>Portable styles for the road</Text>
      <Flex gap="1rem">
        {prod.map((item) => {
          return (
            <Box cursor="pointer">
              <Image src={item.image} />
              <Text>{item.title}</Text>
            </Box>
          );
        })}
      </Flex>
      <Button
        bottom="0"
        _hover={{ bg: "black" }}
        h="2rem"
        w="10rem"
        borderRadius="none"
        mt="2rem"
        fontSize="12px"
        rightIcon={<ArrowRightIcon />}
        color="white"
        bg="black"
      >
        SHOP NOW
      </Button>
    </Box>
  );
}

export default Product;
