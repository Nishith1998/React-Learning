import { FormEvent, useEffect, useState } from "react";
import { FormStructure, GenericFormField, FormValue } from "../../../models/types";
import { FormField } from "./FormField";
import { Card } from "../Card/Card";
import { FROM_STRUCTURE_INITIAL, INITIAL_FORM_VALUE } from "../../../models/constants";

export const GenericForm = (props: {
  formFields: GenericFormField<FormValue>[],
  onSubmit: ((formValue: FormValue) => void)
}) => {
  const formStructureInitial: FormStructure<FormValue> = FROM_STRUCTURE_INITIAL;
  props.formFields.forEach((ele) => {
    if(ele.type !== "button")
    formStructureInitial[ele.id] = {
      value: ele.value,
      isValid: ele.value === '' ? null : ele.isValid?.(ele.value ?? "") ?? null,
    };
  });
  const [form, setForm] = useState<FormStructure<FormValue>>(FROM_STRUCTURE_INITIAL);

  console.log("GenericForm: form: ", form)

  useEffect(() => {
    const formStructureModified: FormStructure<FormValue> = {...FROM_STRUCTURE_INITIAL};
    props.formFields.forEach((ele) => {
      // if(ele.type !== "button")
      formStructureModified[ele.id] = {
        value: ele.value ?? "",
        isValid: ele.isValid?.(ele.value ?? "") ?? null,
      };
    });
    setForm(FROM_STRUCTURE_INITIAL);
  }, [props.formFields]);

  const onInputChange = (label: string, value: string, isValid: boolean) => {
    setForm((prevForm) => {
      return { ...prevForm, [label]: { value: value, isValid: isValid } };
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValueMapped: FormValue = {...INITIAL_FORM_VALUE};
    for (let item in form) {
      formValueMapped[item] = form[item].value;
    }
    props.onSubmit(formValueMapped);
    setForm({...FROM_STRUCTURE_INITIAL});
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        {props.formFields.map((field: GenericFormField<FormValue>) => (
          <FormField
            key={field.id}
            form={form}
            id={String(field.id)}
            type={field.type}
            label={field.label}
            classes={field.classes}
            attributes={field.attributes}
            isValid={field.isValid}
            error={field.error}
            options={field.options}
            onInputChange={onInputChange}
          />
        ))}
      </form>
    </Card>
  );
};
