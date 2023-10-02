import { Flex, Button } from "@chakra-ui/react";


export function Footer( {handleToast}) {
 
  return (
    <Flex justifyContent="center" w="100%" py="10px">
      <Button onClick={handleToast} w="90%" colorScheme="blue" variant="solid">
        Generar contraseña
      </Button>
    </Flex>
  );
}
