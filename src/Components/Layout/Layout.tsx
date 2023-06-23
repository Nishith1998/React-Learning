import { useState } from "react";
import { InputField } from "../InputField/InputField";
import { Keypad } from "../Keypad/Keypad";

const calculateString = function(str: string) {
    let arr = Array.from(str);
    arr.indexOf('/');
}

export const Layout = () => {
  const [inputValue, setInputValue] = useState("");
  const [clearInput, setClearInput] = useState(false);
  //   let clearInput = false;
  const onInputChange = (value: string) => {
    console.log("Layout comp: input changed value", value);
    if (value === "clear") {
      setInputValue("");
      setClearInput(false);
    } else if (value === "=") {
      setInputValue((prevState: string) => {
        try { 
            return Function(`return ${prevState}`)();
        } catch {
            return "Error: Invalid input"
        }
      });
      setClearInput(true);
    } else {
      if (clearInput) setInputValue(value);
      else setInputValue((prevState: string) => prevState + value);
      setClearInput(false);
    }
  };
  // const onButtonClick = (btnValue: string) => {
  //     console.log("Layout comp: button click value", btnValue)
  // }
  return (
    <>
      <InputField onInputChange={onInputChange} inputValue={inputValue} />
      {/* <Button btnValue="1" onBtnClick={onButtonClick}/> */}
      <Keypad onButtonClick={onInputChange} />
    </>
  );
};
