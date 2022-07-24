import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Box,
  Select
} from "@chakra-ui/react";

import React, { useState } from "react";
import { countryList } from "../../Country";
import { Lang } from "../../Language";

function ModalPop() {
  const initialcountry = "India";
  const initiallang = "English";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [country, setcountry] = useState(initialcountry);
  const [lang, setlang] = useState(initiallang);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleChangeCountry = (e) => {
    setcountry(e.target.value);
  };
  const handleChangeLang = (e) => {
    setlang(e.target.value);
  };

  return (
    <>
      <Box
        color="#7783a1"
        fontWeight="semibold"
        fontSize="12px"
        as="button"
        onClick={onOpen}
      >
        {country}|{lang}
      </Box>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent maxWidth="3xl">
          <ModalCloseButton />
          <ModalBody bg="#f2f2f2" pb={6}>
            <ModalHeader fontSize="15px" fontWeight="thin" textAlign="center">
              PLEASE CHOOSE THE DESTINATION OF DELIVERY.
            </ModalHeader>
            <Box display="flex">
              <FormControl mr="1rem">
                <FormLabel>YOUR REGION</FormLabel>
                <Select
                  onChange={handleChangeCountry}
                  placeholder="Select Country"
                >
                  {countryList.map((item) => {
                    return <option value={item}>{item}</option>;
                  })}
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>YOUR LANGUAGE</FormLabel>
                <Select
                  onChange={handleChangeLang}
                  placeholder="Select Country"
                >
                  {Lang.map((item) => {
                    return <option value={item}>{item}</option>;
                  })}
                </Select>
              </FormControl>
            </Box>
            <ModalFooter justifyContent="center">
              <Button
                bottom="0"
                _hover={{ bg: "black" }}
                h="2rem"
                w="9rem"
                p="1rem"
                borderRadius="none"
                mt="2rem"
                fontSize="12px"
                color="white"
                bg="black"
                fontWeight="thin"
                onClick={onClose}
              >
                CONTINUE SHOPPING
              </Button>
            </ModalFooter>
          </ModalBody>

          <Box p="3rem">
            Please note: the items in your shopping bag may be deleted if you
            change your region or your delivery destination.
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalPop;
