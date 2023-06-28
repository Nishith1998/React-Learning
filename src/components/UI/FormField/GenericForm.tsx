import { FormEvent, useState } from "react";
import { formField } from "../../../models/types";
import { FormField } from "./FormField";
import { Card } from "../Card/Card";

export const GenericForm = (props: { formFields: formField[], onSubmit: any }) => {
  type FormStructureType = {
    [key: string]: { value: string; isValid: boolean | null };
  };

  const formStructure: FormStructureType = {};
  props.formFields.forEach(
    (ele: formField) => {
      formStructure[ele.id] = { value: ele.value ?? '', isValid: ele.type === 'button' ? true : null }
  }  
  );

  const [form, setForm] = useState(formStructure);
  const [newFormFields, setNewFormFields] = useState(props.formFields)

  console.log("State value: ", form);

  const onInputChange = (label: string, value: string, isValid: boolean) => {
    setForm((prevForm) => {
      return { ...prevForm, [label]: { value: value, isValid: isValid } };
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Value: ", form)
    let obj: {[key: string]: string} = {};
    for(let item in form) {
      obj[item] = form[item].value;
    }
    props.onSubmit(obj);
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        {newFormFields.map((field: formField) => (
          <FormField
            key={field.id}
            isValid={form[field.id].isValid}
            form={form}
            // value={form[field.id].value}
            {...field}
            onInputChange={onInputChange}
          />
        ))}
      </form>
    </Card>
  );
};
