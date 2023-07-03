import { Input } from "../Inputs/Input";
import { Dropdown } from "../Inputs/Dropdown";
import { Radio } from "../Inputs/Radio";
import { FileUpload } from "../Inputs/FileUpload";
import { Button } from "../Inputs/Button";
import { ReactNode } from "react";
import { FormStructure, FormValue, InputAttributes } from "../../../models/types";

type FormFieldProps = {
  id: string;
  label: string;
  type: string;
  attributes: InputAttributes;
  form: FormStructure<FormValue>;
  isValid?: (fieldValue: string) => boolean;
  classes?: string;
  error?: string;
  options?: {
    label: string;
    value: string;
  }[];
  onInputChange: (label: string, value: string, isValid: boolean) => void;
};

const isButtonAttribute = (x: any): x is {id?: string, type: 'submit' | 'button'} => x.type === 'submit' || x.type === 'button'

export const FormField = (props: FormFieldProps) => {

  const isFormValid = () => {
    return (
      Object.values(props.form).filter(
        (ele: any) => ele.isValid === false || ele.isValid === null
      ).length !== 0
    );
  };


  const inputFieldMapper: { [key: string]: () => ReactNode } = {
    input: () => (
      <Input
        id={props.id}
        label={props.label}
        attributes={{ ...props.attributes }}
        value={props.form[props.id].value}
        onInputChangeHandler={onInputChangeHandler}
        classes={props.classes}
        checkValid={props.isValid}
        isValid={props.form[props.id].isValid}
        error={props.error}
      />
    ),

    dropdown: () => (
      <Dropdown
        id={props.id}
        label={props.label}
        classes={props.classes}
        attributes={{ ...props.attributes }}
        form={props.form}
        isValid={props.isValid?.bind(this)}
        options={props.options ?? []}
        onInputChangeHandler={onInputChangeHandler}
        error={props.error}
      />
    ),

    radio: () => (
      <Radio
        id={props.id}
        label={props.label}
        classes={props.classes}
        attributes={{ ...props.attributes }}
        form={props.form}
        isValid={props.isValid}
        options={props.options ?? []}
        onInputChangeHandler={onInputChangeHandler}
        error={props.error}
      />
    ),

    file: () => (
      <FileUpload
        id={props.id}
        label={props.label}
        classes={props.classes}
        attributes={{ ...props.attributes }}
        form={props.form}
        isValid={props.isValid}
        onInputChangeHandler={onInputChangeHandler}
        error={props.error}
      />
    ),

    button: () => (
      <Button
        form={props.form}
        classes={props.classes}
        label={props.label}
        isFormValid={isFormValid}
        attributes={ isButtonAttribute(props.attributes) ? props.attributes : {id: 'as', type: 'button'}}
      />
    ),
  };

  const onInputChangeHandler = (
    label: string,
    value: string,
    isValid: boolean
  ) => {
    props.onInputChange(label, value, isValid);
  };

  return <>{inputFieldMapper[props.type]()}</>;
};
