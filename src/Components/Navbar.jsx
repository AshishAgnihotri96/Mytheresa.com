import { Link } from "react-router-dom";

import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spacer
} from "@chakra-ui/react";
import ModalPop from "./ModalPop";

const menu = ["MEN", "KIDS", "LIFE"];
const options = [
  "DESIGNERS",
  "CLOTHING",
  "SHOES",
  "BAGS",
  "ACCESSORIES",
  "JWELLERY",
  "VACATION",
  "SALE"
];
const accountSection = ["Signup For Newsletter", "My WishList"];
function Navbar() {
  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">
          <Box p="1rem">WOMEN</Box>
        </Link>
        <Flex gap="0.5rem">
          {menu.map((item, i) => {
            return (
              <Box key={i} p="1rem" as="button">
                {item}
              </Box>
            );
          })}
        </Flex>
        <Spacer />
        <Flex gap="0.5rem">
          {accountSection.map((item) => {
            return (
              <Box
                p="0.75rem"
                color="#7783a1"
                fontWeight="semibold"
                fontSize="12px"
                as="button"
              >
                {item}
              </Box>
            );
          })}
        </Flex>
        <Box
          mr="1rem"
          color="#7783a1"
          fontWeight="semibold"
          fontSize="12px"
          as="button"
        >
          <Link to="/login">My Account</Link>
        </Box>

        <ModalPop />
      </Box>
      <Box
        width="100%"
        justifyContent="center"
        alignContent="center"
        display="flex"
        mt="-4rem"
      >
        <Image
          ml="13rem"
          w="500px"
          h="250px"
          alt="Cam-Logo"
          src="https://mms.businesswire.com/media/20210914005235/en/905258/22/MyTheresa_Logo_black.jpg"
        />

        <Box ml="11rem" as="button">
          SHOPPING BAG
        </Box>
      </Box>
      <Box>
        <Flex>
          <Flex gap="1rem">
            <Link to="/items">
              <Box
                mt="0.25rem"
                color="gray.600"
                _hover={{ color: "black" }}
                as="button"
              >
                NEW ARRIVAL
              </Box>
            </Link>

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
    </Box>
  );
}

export default Navbar;
