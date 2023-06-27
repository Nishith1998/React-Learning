import { useState } from "react";
import { formField } from "../../../models/types";
import { FormField } from "./FormField";
import { Card } from "../Card/Card";

export const GenericForm = (props: { formFields: formField[] }) => {
  type FormStructureType = {
    [key: string]: string | boolean;
  };

  const formStructure: FormStructureType = {};
  props.formFields.forEach((ele: formField) => (formStructure[ele.id] = ""));

  const [form, setForm] = useState(formStructure);

  console.log("State value: ", form);

  const onInputChange = (label: string, value: string, isInValid: boolean) => {
    setForm((prevForm) => {
      return { ...prevForm, [label]: value };
    });
  };

  return (
    <Card>
      {props.formFields.map((field: formField) => (
        <FormField key={field.id} isInValid={field.isInValid} {...field} onInputChange={onInputChange} />
      ))}
    </Card>
  );
};
