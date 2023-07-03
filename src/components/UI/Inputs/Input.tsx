import { ChangeEvent } from "react";
import { InputAttributes } from "../../../models/types";

type InputProps = {
  id: string;
  label: string;
  isValid: boolean;
  attributes: InputAttributes;
  value: string;
  classes?: string;
  error?: string;
  checkValid?: (inputValue: string) => boolean;
  onInputChangeHandler: (label: string, value: string, isValid: boolean) => void;
};

export const Input = (props: InputProps) => {
  const onInputChangeHandler = (
    label: string,
    value: string,
    isValid: boolean
  ) => {
    props.onInputChangeHandler(label, value, isValid);
  };
  return (
    <div className={props.classes}>
      <label htmlFor={props.attributes.id}>{props.label}</label>
      <div>
        <input
          {...props.attributes}
          value={props.value}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onInputChangeHandler(
              props.id,
              event.target.value,
              props.checkValid?.(event.target.value) ?? true
            )
          }
          className={
            props.isValid === false ? "bg-red-200" : "bg-white w-full"
          }
        ></input>
        <div className="text-red-500 text-xs">
          {props.isValid === false && props.error}
        </div>
      </div>
    </div>
  );
};
