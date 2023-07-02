import { Input } from "../Inputs/Input";
import { Dropdown } from "../Inputs/Dropdown";
import { Radio } from "../Inputs/Radio";
import { FileUpload } from "../Inputs/FileUpload";
import { Button } from "../Inputs/Button";
import { ReactNode } from "react";

export const FormField = (props: any) => {

  const inputFieldMapper: {[key: string]: () => ReactNode} = {
    input: () => (
      <Input
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

    dropdown: () => (
      <Dropdown
      id={props.id}
      label={props.label}
      classes={props.classes}
      attributes={{ ...props.attributes }}
      form={props.form}
      isValid={props.isValid}
      options={props.options}
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
      options={props.options}
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
      attributes={props.attributes}
    />
    )
    
  }

  const onInputChangeHandler = (
    label: string,
    value: string,
    isValid: boolean
  ) => {
    props.onInputChange(label, value, isValid);
  };
  // object with keys directly access the value of JSX
  return <>{inputFieldMapper[props.type]()}</>;
};
