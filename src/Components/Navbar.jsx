import ModalPop from "./ModalPop";

const { Box, Flex, Button, Spacer } = require("@chakra-ui/react");
const menu = ["WOMEN", "MEN", "KIDS", "LIFE"];

const accountSection = ["Signup For Newsletter", "My Account", "My WishList"];
function Navbar() {
  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Flex gap="0.5rem">
          {menu.map((item) => {
            return (
              <Box p="1rem" as="button">
                {item}
              </Box>
            );
          })}
        </Flex>
        <Spacer />
        <Flex gap="1rem">
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
        <ModalPop />
      </Box>
    </Box>
  );
}

export default Navbar;
