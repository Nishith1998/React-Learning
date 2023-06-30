import { FormEvent, useEffect, useState } from "react";
import { FormStructureType, FormFieldType, FormValueType } from "../../../models/types";
import { FormField } from "./FormField";
import { Card } from "../Card/Card";
import { FROM_STRUCTURE_INITIAL, INITIAL_FORM_VALUE } from "../../../models/constants";

export const GenericForm = (props: {
  formFields: FormFieldType<FormValueType>[],
  onSubmit: ((formValue: FormValueType) => void)
}) => {
  const formStructureInitial: FormStructureType<FormValueType> = FROM_STRUCTURE_INITIAL;
  props.formFields.forEach((ele) => {
    if(ele.type !== "button")
    formStructureInitial[ele.id] = {
      value: ele.value,
      isValid: ele.value === '' ? null : ele.isValid?.(ele.value ?? "") ?? null,
    };
  });
  const [form, setForm] = useState<FormStructureType<FormValueType>>(FROM_STRUCTURE_INITIAL);

  console.log("GenericForm: form: ", form)

  useEffect(() => {
    const formStructureModified: FormStructureType<FormValueType> = {...FROM_STRUCTURE_INITIAL};
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
    const formValueMapped: FormValueType = {...INITIAL_FORM_VALUE};
    for (let item in form) {
      formValueMapped[item] = form[item].value;
    }
    props.onSubmit(formValueMapped);
    setForm({...FROM_STRUCTURE_INITIAL});
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        {props.formFields.map((field: FormFieldType<FormValueType>) => (
          <FormField
            key={field.id}
            form={form}
            {...field}
            onInputChange={onInputChange}
          />
        ))}
      </form>
    </Card>
  );
};
