import { ChangeEvent } from "react";
import { InputAttributes } from "../../../models/types";

type DropDownProps = {
  id: string;
  label: string;
  classes?: string;
  value: string;
  attributes: InputAttributes;
  options: {
    label: string;
    value: string;
  }[];
  error?: string;
  onInputChangeHandler: (value: string) => void;
};

export const Dropdown = (props: DropDownProps) => {
  const dropDownChangeHandler = (event: ChangeEvent<HTMLSelectElement>) =>
    props.onInputChangeHandler(event.target.value);

  return (
    <>
      <label htmlFor={props.attributes.id}>{props.label}</label>
      <div>
        <select
          id={props.attributes.id}
          className="w-full"
          value={props.value}
          onChange={dropDownChangeHandler}
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
      </div>
    </>
  );
};
