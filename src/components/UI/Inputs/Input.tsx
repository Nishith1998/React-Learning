import { ChangeEvent } from "react";
import { InputAttributes } from "../../../models/types";

type InputProps = {
  id: string;
  label: string;
  attributes: InputAttributes;
  value: string;
  classes?: string;
  error?: string;
  onInputChangeHandler: (
    value: string,
  ) => void;
  onInputBlurHandler: () => void;
};

export const Input = (props: InputProps) => {
  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    props.onInputChangeHandler(
      event.target.value,
    );

  return (
    <>
      <label htmlFor={props.attributes.id}>{props.label}</label>
      <div>
        <input
          id={props.attributes.id}
          type={props.attributes.type}
          placeholder={props.attributes.placeholder}
          value={props.value}
          onChange={inputChangeHandler}
          onBlur={props.onInputBlurHandler}
          className={props.classes}
        ></input>
        <div className="text-red-500 text-xs">
          {props.error !== '' && props.error}
        </div>
      </div>
    </>
  );
};
