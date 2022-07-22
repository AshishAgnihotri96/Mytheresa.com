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
  Input,
  FormLabel,
  Box,
  Select
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function ModalPop() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [county, setcountry] = useState("");
  function getCountry() {
    fetch("https://countriesnow.space/api/v0.1/countries/")
      .then((res) => {
        res.json();
      })
      .then((res) => {
        const count = res.data.country;
        console.log(count);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <>
      <Box
        color="#7783a1"
        fontWeight="semibold"
        fontSize="12px"
        as="button"
        onClick={onOpen}
      >
        India|English
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
              <Select placeholder="Select Country">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Select Language</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalPop;
