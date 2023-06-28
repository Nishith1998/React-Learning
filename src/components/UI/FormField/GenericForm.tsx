import { FormEvent, useEffect, useState } from "react";
import { formField } from "../../../models/types";
import { FormField } from "./FormField";
import { Card } from "../Card/Card";

export const GenericForm = (props: { formFields: formField[], onSubmit: any }) => {
  type FormStructureType = {
    [key: string]: { value: string; isValid: boolean | null };
  };

  const formStructureInitial: FormStructureType = {};
  props.formFields.forEach(ele => {
    formStructureInitial[ele.id] = {value: ele.value ?? '', isValid: ele.type === 'button' ? true : ele.isValid?.(ele.value ?? '') ?? null}
  });
  const [form, setForm] = useState(formStructureInitial);

  useEffect(() => {
    const formStructureModified: FormStructureType = {}
    props.formFields.forEach(ele => {
      formStructureModified[ele.id] = {value: ele.value ?? '', isValid: ele.isValid?.(ele.value ?? '') ?? null}
    });
    console.log("GenericForm: useEffect", formStructureModified)
    setForm(formStructureModified);
  },[props.formFields])

  const onInputChange = (label: string, value: string, isValid: boolean) => {
    setForm((prevForm) => {
      console.log("GenericForm: setForm",{ ...prevForm, [label]: { value: value, isValid: isValid } })
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
        {props.formFields.map((field: formField) => (
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
