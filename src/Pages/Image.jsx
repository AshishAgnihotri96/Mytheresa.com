import { Box, Image, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";

export default function Images() {
  const [newName, setnewName] = useState("");
  const names = [
    "Free Returns Within 30 Days",
    "FREE Shipping On Order Above $800"
  ];

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 2000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <Box as="button">
      <Text fontSize="sm" color="#c27888" mt="1rem">
        {newName}
      </Text>
      <Image
        mt="2rem"
        src="https://i.im.ge/2022/07/22/Fde79F.png"
        alt="First_Image"
      />
    </Box>
  );
}
