import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";

function Exclusive() {
  const dataDetails = [
    {
      title1: "EXCLUSIVELY AT MYTHERESA",
      title2: "Disney x Givenchy",
      image:
        "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW29/ActboxTall_CW29_2_2x_20220718110623.jpg?imwidth=600&imdensity=1",
      area: "nav"
    },
    {
      title1: "PERIPHERAL VISION",
      title2: "New sunglasses to have on your radar",

      image:
        "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW29/ActboxSmall_CW29_1_2x_20220717205626.jpg?imwidth=600&imdensity=1",
      area: "header"
    },
    {
      title1: "ITALIAN FOOTNOTES",
      title2: "Gucci keeps you one step ahead",
      image:
        "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW29/ActboxSmall_CW29_2_2x_20220717205626.jpg?imwidth=600&imdensity=1",
      area: "footer"
    }
  ];

  const dataDetails2 = [
    {
      title1: "SEEKING THE PERFECT BAG?",
      title2: "Pieces from Loewe solve the puzzle",
      image:
        "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW29/ActboxSmall_CW29_3_2x_20220717205627.jpg?imwidth=600&imdensity=1",
      area: "nav"
    },
    {
      title1: "DECKED OUT IN FINERY",
      title2: "Jewelry to style your event look",
      image:
        "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW29/ActboxSmall_CW29_4_2x_20220717205627.jpg?imwidth=600&imdensity=1",
      area: "header"
    },
    {
      title1: "ON THIS WEEK'S AGENDA",
      title2: "Blazers for the office and beyond",
      image:
        "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW29/ActboxTall_CW29_2x_20220717205636.jpg?imwidth=600&imdensity=1",
      area: "footer"
    }
  ];
  return (
    <Box>
      <Grid
        mt="-3rem"
        templateAreas={`"nav header "  
                  "nav footer"`}
        gridTemplateRows={"50% "}
        gridTemplateColumns={"50% "}
        h="auto"
        gap="1rem"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        {dataDetails.map((item) => {
          return (
            <GridItem area={item.area}>
              <Text color="blackAlpha.900" fontWeight="thin" mt="4.75rem">
                {item.title1}
              </Text>
              <Text
                color="blackAlpha.900"
                fontWeight="medium"
                mb="5rem"
                fontSize="3xl"
              >
                {item.title2}
              </Text>

              <Image alr={item.area} src={item.image} />
              <Button
                bottom="0"
                _hover={{ bg: "black" }}
                h="2rem"
                w="9rem"
                borderRadius="none"
                mt="2rem"
                fontSize="10px"
                rightIcon={<ArrowRightIcon />}
                color="white"
                bg="black"
              >
                SHOP NOW
              </Button>
            </GridItem>
          );
        })}
      </Grid>
      <Grid
        templateAreas={`"nav footer "  
                  " header footer"`}
        gridTemplateRows={"50% "}
        gridTemplateColumns={"50% "}
        h="auto"
        gap="1rem"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        {dataDetails2.map((item) => {
          return (
            <GridItem area={item.area}>
              <Text color="blackAlpha.900" fontWeight="thin" mt="5rem">
                {item.title1}
              </Text>
              <Text
                color="blackAlpha.900"
                fontWeight="medium"
                mb="5rem"
                fontSize="3xl"
              >
                {item.title2}
              </Text>

              <Image alr={item.area} src={item.image} />
              <Button
                bottom="0"
                _hover={{ bg: "black" }}
                h="2rem"
                w="9rem"
                borderRadius="none"
                mt="2rem"
                fontSize="10px"
                rightIcon={<ArrowRightIcon />}
                color="white"
                bg="black"
              >
                SHOP NOW
              </Button>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Exclusive;
