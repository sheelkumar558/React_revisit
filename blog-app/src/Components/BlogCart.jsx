import { Box, Center, useColorModeValue, Image } from "@chakra-ui/react";
import React from "react";

export const BlogCart = () => {
  return (
    <Center my={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box>
          <Image />
        </Box>
      </Box>
    </Center>
  );
};
