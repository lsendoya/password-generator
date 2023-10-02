import { VStack, Checkbox } from "@chakra-ui/react";
import { SecurityLevel } from "./Input/Security";

export function Body({ types, items }) {
  const handleCheckboxChange = (type) => () => {
    types[type]();
  };

  const checkboxes = [
    { label: "Incluye letras mayúsculas", type: "upper" },
    { label: "Incluye letras minúsculas", type: "lower" },
    { label: "Incluye números", type: "numeric" },
    { label: "Incluye símbolos", type: "special" },
  ];

  return (
    <VStack w="100%" h="auto" spacing="10px" py="1rem">
      <VStack w="90%" justify="flex-start" alignItems="flex-start">
        {checkboxes.map((checkbox) => (
          <Checkbox
            key={checkbox.type}
            onChange={handleCheckboxChange(checkbox.type)}
          >
            {checkbox.label}
          </Checkbox>
        ))}
      </VStack>
      <SecurityLevel items={items} />
    </VStack>
  );
}
