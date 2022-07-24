import { ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Spacer } from "@chakra-ui/react";

function NewArrival() {
  return (
    <Box p="3rem" h="auto" mt="2rem" bg="#f6f6f6" borderWidth="1px">
      <Box mb="1rem" as="h3">
        DON'T MISS OUT
      </Box>

      <Box mb="1rem" fontSize="30px">
        New Arrivals
      </Box>
      <Box as="h4">Valentino Garavani, Dolce&Gabbana, Marni, Gucci...</Box>
      <Button
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
    </Box>
  );
}

export default NewArrival;
