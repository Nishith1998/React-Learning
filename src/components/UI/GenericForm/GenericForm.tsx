import { FormEvent } from "react";
import {
  FormStructure,
  GenericFormField,
  FormValue,
} from "../../../models/types";
import { FormField } from "./FormField";
import { Card } from "../Card/Card";
import {
  FROM_STRUCTURE_INITIAL,
  INITIAL_FORM_VALUE,
} from "../../../models/constants";

type GenericFormProps = {
  formFields: GenericFormField<FormValue>[];
  form: FormStructure<FormValue>;
  onFieldChange: (label: string, value: string) => void;
  onSubmit: (formValue: FormValue) => void;
  onBlur: (label: string) => void
};

export const GenericForm = (props: GenericFormProps) => {
  console.log("GenericForm: props.genericFormValue: ", props.form);

  const { form } = props;

  const isFormValid = () => {
    return (
      Object.values(form).filter(
        (ele: any) => ele.isValid === false || ele.isValid === null
      ).length !== 0
    );
  };
  const formStructureInitial: FormStructure<FormValue> = {
    ...FROM_STRUCTURE_INITIAL,
  };
  props.formFields.forEach((ele) => {
    if (ele.type !== "button")
      formStructureInitial[ele.id] = {
        value: form[ele.id].value,
        isValid:
          ele.value === "" ? null : ele.isValid?.(ele.value ?? "") ?? null,
        isTouched: true,
      };
  });

  const onInputChange = (label: string, value: string) => {
    props.onFieldChange(label, value);
  };
  const onBlur = (label: string) => {
    console.log("onBlur", label);
    props.onBlur(label);
    // props.onFieldChange(label);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValueMapped: FormValue = { ...INITIAL_FORM_VALUE };
    for (let item in form) {
      formValueMapped[item] = form[item].value;
    }
    props.onSubmit(formValueMapped);
  };

  console.log("GenericForm: Form: ", form);

  return (
    <Card className="!pb-0">
      <form onSubmit={submitHandler}>
        {props.formFields.map((field: GenericFormField<FormValue>) => (
          <FormField
            key={field.id}
            id={String(field.id)}
            type={field.type}
            value={form[field.id]?.value ?? ""}
            label={field.label}
            classes={field.classes}
            attributes={field.attributes}
            isValid={!form[field.id].isTouched || (field.isValid?.(form[field.id]?.value)?? true)}
            isTouched={form[field.id].isTouched}
            error={field.error}
            options={field.options}
            onInputChange={onInputChange}
            onBlur={onBlur}
            isFormValid={isFormValid}
          />
        ))}
      </form>
    </Card>
  );
};
