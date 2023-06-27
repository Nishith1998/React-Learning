import { useState } from "react";
import { InputField } from "../InputField/InputField";
import { Keypad } from "../Keypad/Keypad";

const calculateString = function (str: string): string {
  let numbers: number[] = str.split(/[+, -, /, *]/).map((ele) => +ele);
  let operators: string[] = str.replace(/[0-9]/g, "").split("");

  while (true) {
    let indexOfDivision = operators.indexOf("/");
    if (indexOfDivision === -1) break;
    numbers.splice(
      indexOfDivision,
      2,
      numbers[indexOfDivision] / numbers[indexOfDivision + 1]
    );
    operators.splice(indexOfDivision, 1);
  }

  while (true) {
    let indexOfMultiplication = operators.indexOf("*");
    if (indexOfMultiplication === -1) break;
    numbers.splice(
      indexOfMultiplication,
      2,
      numbers[indexOfMultiplication] * numbers[indexOfMultiplication + 1]
    );
    operators.splice(indexOfMultiplication, 1);
  }

  while (true) {
    let indexOfAddition = operators.indexOf("+");
    if (indexOfAddition === -1) break;
    numbers.splice(
      indexOfAddition,
      2,
      numbers[indexOfAddition] + numbers[indexOfAddition + 1]
    );
    operators.splice(indexOfAddition, 1);
  }

  while (true) {
    let indexOfSubtraction = operators.indexOf("-");
    if (indexOfSubtraction === -1) break;
    numbers.splice(
      indexOfSubtraction,
      2,
      numbers[indexOfSubtraction] - numbers[indexOfSubtraction + 1]
    );
    operators.splice(indexOfSubtraction, 1);
  }

  if (Number.isNaN(numbers[0])) {
    return "Invalid input";
  } else {
    return String(numbers[0]);
  }
};

export const Layout = () => {
  const [inputValue, setInputValue] = useState("0");
  const [clearInput, setClearInput] = useState(true);

  const onInputChange = (value: string, isKeyPressed: boolean) => {
    if (isKeyPressed === true) {
      console.log("Key is pressed ", value);
      if (value === "=") {
        setInputValue((prevState: string) => {
          return calculateString(prevState);
        });
        setClearInput(true);
      } else {
        setInputValue(value);
      }
    } else {
      if (value === "clear") {
        setInputValue("0");
        setClearInput(true);
      } else if (value === "=") {
        setInputValue((prevState: string) => {
          return calculateString(prevState);
        });
        setClearInput(true);
      } else {
        if (clearInput) setInputValue(value);
        else setInputValue((prevState: string) => prevState + value);
        setClearInput(false);
      }
    }
  };

  return (
    <>
      <InputField onInputChange={onInputChange} inputValue={inputValue} />
      <Keypad onButtonClick={onInputChange} />
    </>
  );
};
