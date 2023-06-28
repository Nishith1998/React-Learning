import { useState } from "react";
import { formField } from "../../../models/types";
import { FormField } from "./FormField";
import { Card } from "../Card/Card";

export const GenericForm = (props: { formFields: formField[] }) => {
  type FormStructureType = {
    [key: string]: { value: string; isValid: boolean | null };
  };

  const formStructure: FormStructureType = {};
  props.formFields.forEach(
    (ele: formField) => (formStructure[ele.id] = { value: "", isValid: null })
  );

  const [form, setForm] = useState(formStructure);

  console.log("State value: ", form);

  const onInputChange = (label: string, value: string, isValid: boolean) => {
    setForm((prevForm) => {
      return { ...prevForm, [label]: { value: value, isValid: isValid } };
    });
  };

  return (
    <Card>
      {props.formFields.map((field: formField) => (
        <FormField
          key={field.id}
          isValid={form[field.id].isValid}
          form={form}
          {...field}
          onInputChange={onInputChange}
        />
      ))}
    </Card>
  );
};
