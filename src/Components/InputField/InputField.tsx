import styles from "./InputField.module.css";

export const InputField = (props: {
  onInputChange: (value: string) => void;
  inputValue: string | number | readonly string[] | undefined;
  }) => {
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    props.onInputChange(event.target.value);
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // event.preventDefault();
    // props.onInputChange(event.code);
  };

  return (
    <input
      className={styles.input}
      type="text"
      onKeyDown={keyDownHandler}
      onChange={inputChangeHandler}
      value={props.inputValue}
    />
  );
};
