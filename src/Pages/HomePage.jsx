import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Tooltip
} from "@chakra-ui/react";
import Exclusive from "./Exclusiv";
import Images from "./Image";
import NewArrival from "./NewArrivals";

const options = [
  "NEW ARRIVAL",
  "DESIGNERS",
  "CLOTHING",
  "SHOES",
  "BAGS",
  "ACCESSORIES",
  "JWELLERY",
  "VACATION",
  "SALE"
];
function HomePage() {
  return (
    <Box>
      <Box justifyContent="center" display="flex" alignItems="center">
        <Image
          w="500px"
          h="250px"
          alt="Cam-Logo"
          src="https://mms.businesswire.com/media/20210914005235/en/905258/22/MyTheresa_Logo_black.jpg"
        />

        <Box as="button">SHOPPING BAG</Box>
      </Box>
      <Box>
        <Flex>
          <Flex gap="1rem">
            {options.map((item) => {
              return (
                <Box color="gray.600" _hover={{ color: "black" }} as="button">
                  {item}
                </Box>
              );
            })}
          </Flex>
          <Spacer />
          <InputGroup w="250px">
            <InputRightElement
              pointerEvents="none"
              children={<SearchIcon color="black" />}
            />
            <Input
              p="1rem"
              h="25px"
              borderColor="gray.100"
              focusBorderColor="gray.100"
              type="text"
              placeholder="Search For..."
              borderRadius="none"
            />
          </InputGroup>
        </Flex>
      </Box>
      <Box mt="1rem" h="1px" bg="gray.300" w="100%"></Box>
      <Images />
      <NewArrival />
      <Exclusive />
    </Box>
  );
}

export default HomePage;
