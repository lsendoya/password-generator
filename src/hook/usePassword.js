import { generateRandomPassword } from "../components/helper/randon";

export const usePassword = (useBoolean, useState) => {
  const [special, toggleSpecial] = useBoolean(false);
  const [lower, toggleLower] = useBoolean(false);
  const [numeric, toggleNumeric] = useBoolean(false);
  const [upper, toggleUpper] = useBoolean(false);
  const [click, setClick] = useBoolean(false);
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);

  const toggleOptions = {
    special: toggleSpecial?.toggle,
    upper: toggleUpper?.toggle,
    numeric: toggleNumeric?.toggle,
    lower: toggleLower?.toggle,
  };

  const passwordState = {
    special,
    upper,
    numeric,
    lower,
    password,
    length,
    setLength,
    setPassword,
    click,
    setClick,
  };

  const useToastPass = (toast) => {
    if (!lower && !upper && !numeric && !special) {
      toast({
        title: "Error",
        description: "Debes seleccionar al menos una opción",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      setClick.off();
      setPassword(generateRandomPassword(length, upper, lower, numeric, special));
      setClick.on();
    }
  };

  return { toggleOptions, passwordState, useToastPass };
};
