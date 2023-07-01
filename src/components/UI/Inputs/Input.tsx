import { ChangeEvent } from "react";
import { FormValueType } from "../../../models/types";

export const Input = (props: {
  id: string;
  label: string;
  classes: string;
  isValid: (arg0: string) => boolean;
  attributes: React.InputHTMLAttributes<any>;
  form: FormValueType;
  error: string;
  onInputChangeHandler: (arg0: string, arg1: string, arg2: boolean) => void;
}) => {
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
          value={props.form[props.id].value}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onInputChangeHandler(
              props.id,
              event.target.value,
              props.isValid(event.target.value)
            )
          }
          className={
            props.form[props.id].isValid === false ? "bg-red-200" : "bg-white"
          }
        ></input>
        <div className="text-red-500 text-xs">
          {props.form[props.id].isValid === false && props.error}
        </div>
      </div>
    </div>
  );
};
