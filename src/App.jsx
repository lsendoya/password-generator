import React from "react";
import { useState } from "react";
import {
  VStack,
  Text,
  Grid,
  useToast,
  useBoolean,
  useMediaQuery,
} from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { usePassword } from "./hook/usePassword";

function App() {
  const { passwordState, toggleOptions, useToastPass } = usePassword(
    useBoolean,
    useState
  );
  const [isSmallThan430] = useMediaQuery("(max-width: 430px)");
  const [isLargeThan500] = useMediaQuery("(min-width: 500px)");
  const [isSmallThan499] = useMediaQuery("(max-width: 499px)");
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const toast = useToast();
  const handleToast = () => useToastPass(toast);

  const setWidht = () => {
    if (isLargerThan800) return "30rem";
    if (isLargeThan500) return "26rem";
    if (isSmallThan430) return "20rem";
    if (isSmallThan499) return "23rem";
   
  };

  return (
    <Grid
      w="100vw"
      h="100vh"
      bg="blue.50"
      placeContent="center"
      boxShadow="dark-lg"
    >
      <VStack
        bg="green.400"
        w={setWidht()}
        px="3px"
        py="5px"
        spacing="10px"
        border="1px"
        borderRadius="md"
      >
        <Text textAlign="center" fontWeight="bold" fontSize="1.4rem" py="8px">
          Generador de contraseñas
        </Text>
        <Header passwordState={passwordState} />
        <Body types={toggleOptions} items={passwordState} />
        <Footer handleToast={handleToast} />
      </VStack>
    </Grid>
  );
}

export default App;
