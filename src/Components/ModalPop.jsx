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
        <ModalContent>
          <ModalHeader>Select Country And Language</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Select County</FormLabel>
              <Select
                onChange={handleChangeCountry}
                placeholder="Select Country"
              >
                {countryList.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Select Language</FormLabel>
              <Select onChange={handleChangeLang} placeholder="Select Country">
                {Lang.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalPop;
