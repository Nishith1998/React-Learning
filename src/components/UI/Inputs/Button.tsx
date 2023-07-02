import { ButtonHTMLAttributes } from "react";
import { FormStructureType, FormValueType } from "../../../models/types";

export const Button = (props: {
  form: FormStructureType<FormValueType>;
  label: string;
  classes: string;
  attributes: ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
  const isFormValid = () => {
    console.log("isFormValid: FormValue: ", props.form);
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
