import { FormStructure, FormValue } from "../../../models/types";

type ButtonProps = {
  form: FormStructure<FormValue>;
  label: string;
  classes?: string;
  isFormValid: () => boolean;
  attributes: {
    id?: string;
    type: "submit" | "button";
  };
};

export const Button = (props: ButtonProps) => {
  return (
    <div className={props.classes}>
      <button
        id={props.attributes.id}
        type={props.attributes.type}
        className={`col-span-2 bg-blue-200 w-20 ${
          props.isFormValid() ? "bg-white opacity-70" : ""
        }`}
        disabled={props.isFormValid()}
      >
        {props.label}
      </button>
    </div>
  );
};
