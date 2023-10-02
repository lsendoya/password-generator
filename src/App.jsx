import React from "react";
import { useState } from "react";
import {
  VStack,
  Text,
  Grid,
  useToast,
  useBoolean,
  Button,
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


  const toast = useToast();
  const handleToast = () => useToastPass(toast);

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
        w="30rem"
        px="3px"
        py="5px"
        spacing="10px"
        border="1px"
        borderRadius="md"
      >
        <Text textAlign="center" fontWeight="bold" fontSize="1.4rem" py="8px">
          Generador de contraseñas
        </Text>
        <Header passwordState={passwordState}/>
        <Body types={toggleOptions} items={passwordState} />
        <Footer handleToast={handleToast} />
      </VStack>
    </Grid>
  );
}

export default App;
