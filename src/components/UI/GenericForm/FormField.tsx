import { Input } from "../Inputs/Input";
import { Dropdown } from "../Inputs/Dropdown";
import { Radio } from "../Inputs/Radio";
import { FileUpload } from "../Inputs/FileUpload";
import { Button } from "../Inputs/Button";
import { ReactNode } from "react";
import { InputAttributes } from "../../../models/types";
import { isButtonAttribute } from "../../../models/constants";

type FormFieldProps = {
  id: string;
  label: string;
  type: string;
  attributes: InputAttributes;
  value: string;
  isFormValid: () => boolean;
  isValid: boolean;
  isTouched: boolean;
  classes?: string;
  error?: string;
  options?: {
    label: string;
    value: string;
  }[];
  onInputChange: (label: string, value: string, isValid: boolean) => void;
  onBlur: (label: string) => void;
};

export const FormField = (props: FormFieldProps) => {
  const onInputChangeHandler = (
    label: string,
    value: string,
    isValid: boolean
  ) => {
    props.onInputChange(label, value, isValid);
  };

  //const fieldValueObj ={value: props.value, isValid: props.isValid, isTouched: props.isTouched} //props.form[props.id];
  const inputFieldMapper: { [key: string]: () => ReactNode } = {
    input: () => (
      <Input
        id={props.id}
        label={props.label}
        attributes={{
          id: props.attributes.id,
          type: props.attributes.type,
          placeholder: props.attributes.placeholder,
        }}
        value={props.value}
        onInputChangeHandler={(value: string) =>
          onInputChangeHandler(props.id, value, props.isValid)
        }
        onInputBlurHandler={() => props.onBlur(props.id)}
        classes={!props.isValid ? "bg-red-200" : "bg-white w-full"}
        error={!props.isValid ? props.error : ""}
      />
    ),

    dropdown: () => (
      <Dropdown
        id={props.id}
        label={props.label}
        value={props.value === "" ? "selectAnOption" : props.value}
        attributes={{ ...props.attributes }}
        options={props.options ?? []}
        onInputChangeHandler={(value: string) =>
          onInputChangeHandler(props.id, value, props.isValid)
        }
        error={!props.isValid ? props.error : ""}
      />
    ),

    radio: () => (
      <Radio
        id={props.id}
        label={props.label}
        classes={props.classes}
        attributes={{ ...props.attributes }}
        value={props.value}
        options={props.options ?? []}
        onInputChangeHandler={(value: string) =>
          onInputChangeHandler(props.id, value, props.isValid)
        }
        error={!props.isValid ? props.error : ""}
      />
    ),

    file: () => (
      <FileUpload
        id={props.id}
        label={props.label}
        classes={
          `opacity-0 absolute z-10 ${
            props.isValid ? "bg-red-200" : "bg-white w-full"
          }` // boolean ke
        }
        attributes={{ ...props.attributes }}
        value={props.value}
        onInputChangeHandler={(value: string) =>
          onInputChangeHandler(props.id, value, props.isValid)
        }
        error={!props.isValid ? props.error : ""}
      />
    ),

    button: () => (
      <Button
        classes={`col-span-2 bg-blue-200 w-20 ${
          props.isFormValid() ? "bg-white opacity-70" : ""
        }`}
        disabled={props.isFormValid()}
        label={props.label}
        attributes={
          isButtonAttribute(props.attributes)
            ? props.attributes
            : { type: "button" }
        }
      />
    ),
  };

  return <div className={props.classes}>{inputFieldMapper[props.type]()}</div>;
};
