import { ChangeEvent } from "react";
import { FormStructure, FormValue, InputAttributes } from "../../../models/types";

type DropDownProps = {
  id: string;
  label: string;
  classes?: string;
  isValid?: (dropDownValue: string) => boolean;
  attributes: InputAttributes;
  options: {
    label: string;
    value: string;
  }[];
  form: FormStructure<FormValue>;
  error?: string;
  onInputChangeHandler: (label: string, value: string, isValid: boolean) => void;
};

export const Dropdown = (props: DropDownProps) => {
  
  return (
    <div className={props.classes}>
      <label htmlFor={props.attributes.id}>{props.label}</label>
      <div>
        <select
        className="w-full"
          {...props.attributes}
          value={
            props.form[props.id].value === ""
              ? "selectAnOption"
              : props.form[props.id].value
          }
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            props.onInputChangeHandler(
              props.id,
              event.target.value,
              props.isValid?.(event.target.value) ?? true
            )
          }
        >
          <option disabled value="selectAnOption">
            Select an option
          </option>
          {props.options.map((option: { label: string; value: string }) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div className="text-red-500 text-xs">
          {props.form[props.id].isValid === false && props.error}
        </div>
      </div>
    </div>
  );
};
