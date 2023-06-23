import styles from "./InputField.module.css";

export const InputField = (props: {
  onInputChange: (value: string) => void;
  inputValue: string | number | readonly string[] | undefined;
}) => {
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onInputChange(event.target.value);
  };

  return (
    <input
      className={styles.input}
      type="text"
      onChange={inputChangeHandler}
      value={props.inputValue}
    />
  );
};
