import { ButtonHTMLAttributes } from "react";
import { FormStructure, FormValue } from "../../../models/types";

export const Button = (props: {
  form: FormStructure<FormValue>;
  label: string;
  classes?: string;
  attributes: ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
  const isFormValid = () => {
    return (
      Object.values(props.form).filter(
        (ele: any) => ele.isValid === false || ele.isValid === null
      ).length !== 0
    );
  };

  return (
    <div className={props.classes}>
      <button
        {...props.attributes}
        className={`col-span-2 bg-blue-200 w-20 ${
          isFormValid() ? "bg-white opacity-70" : ""
        }`}
        disabled={isFormValid()}
      >
        {props.label}
      </button>
    </div>
  );
};
