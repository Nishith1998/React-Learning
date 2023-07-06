import { Card } from "../UI/Card/Card";
import { GenericForm } from "../UI/GenericForm/GenericForm";
import { FORM_FIELDS, FROM_STRUCTURE_INITIAL } from "../../models/constants";
import { GenericFormField, FormValue, FormStructure } from "../../models/types";
import { useState } from "react";

type UserRegistrationFormProps = {
  onAddUser: (userInfo: FormValue) => void;
  formValue: FormValue;
};

export const UserRegistrationForm = (props: UserRegistrationFormProps) => {
  const onSubmit = (formValue: FormValue): void => {
    console.log(formValue);
    props.onAddUser({
      ...formValue,
      name: formValue.firstName + " " + formValue.lastName,
    });
    setForm(FROM_STRUCTURE_INITIAL);
  };

  const onBlur = (label: string) => {
    setForm((prevForm) => {
      return {
        ...prevForm,
        [label]: {
        value: form[label].value,
        isValid: FORM_FIELDS.filter((ele) => label === ele.id)[0].isValid?.(
          form[label].value
        ),
        isTouched: true
        },
      };
    });
  }

  let genericFormValue: FormStructure<FormValue> = FROM_STRUCTURE_INITIAL;

  FORM_FIELDS.forEach((fields: GenericFormField<FormValue>) => {
    genericFormValue[fields.id] = {
      value: props.formValue[fields.id],
      isValid: fields.isValid?.(props.formValue[fields.id]),
      isTouched: false,
    };
  });
  const [form, setForm] = useState<FormStructure<FormValue>>(genericFormValue);

  const fieldChangeHandler = (label: string, value: string) => {
    setForm((prevForm) => {
      return {
        ...prevForm,
        [label]: {
          value: value,
          isValid: FORM_FIELDS.filter((ele) => label === ele.id)[0].isValid?.(
            value
          ),
          isTouched: true,
        },
      };
    });
  };

  return (
    <Card className="flex-col bg-slate-50">
      <div className="text-lg text-center w-full">Registration Form</div>
      <GenericForm
        formFields={[...FORM_FIELDS]}
        form={form}
        onFieldChange={fieldChangeHandler}
        onSubmit={onSubmit}
        onBlur={onBlur}
      />
    </Card>
  );
};
