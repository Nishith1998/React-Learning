import { ChangeEvent } from "react";
import { InputAttributes } from "../../../models/types";

type RadioProps = {
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

export const Radio = (props: RadioProps) => {
  const radioChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.onInputChangeHandler(event.target.value);
  };
  return (
    <>
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
                checked={props.value === option.value}
                onChange={radioChangeHandler}
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
      <div className="text-red-500 text-xs">
        {props.error !== "" && props.error}
      </div>
    </>
  );
};
