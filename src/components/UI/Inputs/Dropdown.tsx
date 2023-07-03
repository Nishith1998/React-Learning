import { ChangeEvent } from "react";
import { FormStructureType, FormValueType } from "../../../models/types";

export const Dropdown = (props: {
  id: string;
  label: string;
  classes?: string;
  isValid?: (arg0: string) => boolean;
  attributes: React.InputHTMLAttributes<any>;
  options: { label: string; value: string }[];
  form: FormStructureType<FormValueType>;
  error?: string;
  onInputChangeHandler: (arg0: string, arg1: string, arg2: boolean) => void;
}) => {
  
  return (
    <div className={props.classes}>
      <label htmlFor={props.attributes.id}>{props.label}</label>
      <div>
        <select
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
