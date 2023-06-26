import { FormEvent } from "react";
import styles from "./InputField.module.css";

type InputFieldPropsType = {
  onInputChange: (value: string, isKeyPressed: boolean) => void;
  inputValue: string;
};

export const InputField = (props: InputFieldPropsType) => {
  let isKeyPressed = false;

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    props.onInputChange(event.target.value, isKeyPressed);
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    isKeyPressed = true;
    // event.preventDefault();
    // props.onInputChange(event.code);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    props.onInputChange("=", isKeyPressed);

  }

  return (
    <form onSubmit={submitHandler}>
      <input
        className={styles.input}
        type="text"
        onKeyDown={keyDownHandler}
        onChange={inputChangeHandler}
        value={props.inputValue}
      />
    </form>
  );
};
