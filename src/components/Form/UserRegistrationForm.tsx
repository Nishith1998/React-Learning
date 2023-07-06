import { Card } from "../UI/Card/Card";
import { GenericForm } from "../UI/GenericForm/GenericForm";
import { FORM_FIELDS } from "../../models/constants";
import { GenericFormField, FormValue } from "../../models/types";
import { useEffect } from "react";

type UserRegistrationFormProps = {
  onAddUser: (userInfo: FormValue) => void;
  formValue: FormValue;
};

export const UserRegistrationForm = (props: UserRegistrationFormProps) => {
  console.log('Registration: formValue', props.formValue);
  console.log("UserRegistrationForm: ", )
  const onSubmit = (formValue: FormValue): void => {
    console.log(formValue);
    props.onAddUser({
      ...formValue,
      name: formValue.firstName + " " + formValue.lastName,
    });
  };

  useEffect(() => {}, [props.formValue]);
  
  // const formFields = FORM_FIELDS.map((fields: GenericFormField<FormValue>) => {
  //   fields.value = props.formValue[fields.id];
  //   return fields;
  // });

  return (
    <Card className="flex-col bg-slate-50">
      <div className="text-lg text-center w-full">Registration Form</div>
      <GenericForm formFields={FORM_FIELDS} onSubmit={onSubmit} />
    </Card>
  );
};
