import { ChangeEvent } from "react";
import { FormStructure, FormValue } from "../../../models/types";

export const Radio = (props: {
  id: string;
  label: string;
  classes?: string;
  isValid?: (arg0: string) => boolean;
  attributes: React.InputHTMLAttributes<any>;
  options: { label: string; value: string }[];
  form: FormStructure<FormValue>;
  error?: string;
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
      <div className="grid grid-cols-2 gap-2">
        {props.options.map((option: { label: string; value: string }) => {
          return (
            <div key={"input-" + option.label}>
              <input
                key={"input-" + option.value}
                id={option.value}
                name={"radio-" + props.attributes.id}
                type="radio"
                value={option.value}
                checked={props.form[props.id].value === option.value}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  onInputChangeHandler(
                    props.id,
                    event.target.value,
                    props.isValid?.(event.target.value) ?? true
                  );
                }}
              ></input>
              <label
                className="pl-2"
                key={"label-" + option.value}
                htmlFor={option.value}
              >
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
