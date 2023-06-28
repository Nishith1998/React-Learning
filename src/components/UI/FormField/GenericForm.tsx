import { FormEvent, useEffect, useState } from "react";
import { FormStructureType, formField, formValueType } from "../../../models/types";
import { FormField } from "./FormField";
import { Card } from "../Card/Card";
import { FROM_STRUCTURE_INITIAL, INITIAL_FORM_VALUE } from "../../../models/constants";

// type FormStructureType = {
//   [key: string]: { value: string; isValid: boolean | null };
// };

export const GenericForm = (props: {
  formFields: formField<formValueType>[],
  onSubmit: ((formValue: formValueType) => void)
}) => {
  const formStructureInitial: FormStructureType<formValueType> = FROM_STRUCTURE_INITIAL;
  props.formFields.forEach((ele) => {
    formStructureInitial[ele.id] = {
      value: ele.value ?? "",
      isValid:
        ele.type === "button" ? true : ele.isValid?.(ele.value ?? "") ?? null,
    };
  });
  const [form, setForm] = useState<FormStructureType<formValueType>>(formStructureInitial);

  useEffect(() => {
    const formStructureModified: FormStructureType<formValueType> = FROM_STRUCTURE_INITIAL;
    props.formFields.forEach((ele) => {
      formStructureModified[ele.id] = {
        value: ele.value ?? "",
        isValid: ele.isValid?.(ele.value ?? "") ?? null,
      };
    });
    console.log("GenericForm: useEffect", formStructureModified);
    setForm(formStructureModified);
  }, [props.formFields]);

  const onInputChange = (label: string, value: string, isValid: boolean) => {
    setForm((prevForm) => {
      console.log("GenericForm: setForm", {
        ...prevForm,
        [label]: { value: value, isValid: isValid },
      });
      return { ...prevForm, [label]: { value: value, isValid: isValid } };
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let obj: formValueType = INITIAL_FORM_VALUE;
    for (let item in form) {
      console.log(form[item]);
      obj[item] = form[item].value;
    }
    props.onSubmit(obj);
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        {props.formFields.map((field: formField<formValueType>) => (
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
