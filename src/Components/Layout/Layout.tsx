import { useState } from "react";
import { InputField } from "../InputField/InputField";
import { Keypad } from "../Keypad/Keypad";

const calculateString = function(str: string): string {
    let arr = Array.from(str);
    let result: number = 0;

      while (true) {
        let indexOfDivision = arr.indexOf("/");
        if (indexOfDivision === -1) break;
        result = +arr[indexOfDivision - 1] / +arr[indexOfDivision + 1];
        arr.splice(indexOfDivision - 1, 3, String(result));
      }

      while (true) {
        let indexOfDivision = arr.indexOf("*");
        if (indexOfDivision === -1) break;
        result = +arr[indexOfDivision - 1] * +arr[indexOfDivision + 1];
        arr.splice(indexOfDivision - 1, 3, String(result));
      }

      while (true) {
        let indexOfDivision = arr.indexOf("-");
        if (indexOfDivision === -1) break;
        result = +arr[indexOfDivision - 1] - +arr[indexOfDivision + 1];
        arr.splice(indexOfDivision - 1, 3, String(result));
      }

      while (true) {
        let indexOfDivision = arr.indexOf("+");
        if (indexOfDivision === -1) break;
        result = +arr[indexOfDivision - 1] + +arr[indexOfDivision + 1];
        arr.splice(indexOfDivision - 1, 3, String(result));
      }

      if(arr.includes('NaN')) {
        return "Invalid input"
      } else {
        return String(result);
      }
}

export const Layout = () => {
  const [inputValue, setInputValue] = useState("");
  const [clearInput, setClearInput] = useState(false);

  const onInputChange = (value: string) => {
    console.log("Layout comp: input changed value", value);
    if (value === "clear") {
      setInputValue("");
      setClearInput(false);
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
  };

  return (
    <>
      <InputField onInputChange={onInputChange} inputValue={inputValue} />
      <Keypad onButtonClick={onInputChange} />
    </>
  );
};
