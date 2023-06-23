import styles from "./Button.module.css";

export const Button = (props: {
  className?: string;
  onBtnClick: (btnValue: string) => void;
  btnValue: string;
}) => {
  let btnClickHandler = () => {
    props.onBtnClick(props.btnValue);
  };

  return (
    <div
      className={props.className + " " + styles.button}
      onClick={btnClickHandler}
    >
      {props.btnValue}
    </div>
  );
};
