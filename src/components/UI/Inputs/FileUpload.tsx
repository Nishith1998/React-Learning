import { ChangeEvent } from "react";
import { FormStructure, FormValue } from "../../../models/types";

export const FileUpload = (props: {
  id: string;
  label: string;
  classes?: string;
  isValid?: (arg0: string) => boolean;
  attributes: React.InputHTMLAttributes<any>;
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
      <div>
        <input
          {...props.attributes}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            let url = "";
            let fileName = "";
            if (event.target.files?.[0]) {
              fileName = event.target.files?.[0].name;
              url = URL.createObjectURL(event.target.files[0]);
            }
            console.log(url);
            return onInputChangeHandler(
              props.id,
              fileName + "#" + url,
              props.isValid?.(event.target.value) ?? true
            );
          }}
          className={
            "opacity-0 absolute z-10 " +
            (props.form[props.id].isValid === false ? "bg-red-200" : "bg-white")
          }
        ></input>
        <div className="absolute flex flex-row z-0">
          <button type="button">Choose a file</button>
          <div className="pl-4 w-20 truncate">
            {props.form[props.id].value.split("#")[0]}
          </div>
        </div>
      </div>
    </div>
  );
};
