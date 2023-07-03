import { ChangeEvent } from "react";
import { FormStructure, FormValue, InputAttributes } from "../../../models/types";

type RadioProps = {
  id: string;
  label: string;
  classes?: string;
  isValid?: (radioValue: string) => boolean;
  attributes: InputAttributes;
  options: {
    label: string;
    value: string;
  }[];
  form: FormStructure<FormValue>;
  error?: string;
  onInputChangeHandler: (label: string, value: string, isValid: boolean) => void;
};

export const Radio = (props: RadioProps) => {
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
