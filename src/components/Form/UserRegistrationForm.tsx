import { Card } from "../UI/Card/Card";
import { GenericForm } from "../UI/GenericForm/GenericForm";
import { FORM_FIELDS, FROM_STRUCTURE_INITIAL } from "../../models/constants";
import { GenericFormField, FormValue, FormStructure } from "../../models/types";
import { useEffect } from "react";

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
  };

  let genericFormValue: FormStructure<FormValue> = FROM_STRUCTURE_INITIAL; 
  useEffect(() => {
    FORM_FIELDS.forEach((fields: GenericFormField<FormValue>) => {
      genericFormValue[fields.id] = { value: props.formValue[fields.id], isValid: true, isTouched: true }
    });
  
  }, [props.formValue, genericFormValue]);
  console.log("Form: formValue: ",props.formValue)

  return (
    <Card className="flex-col bg-slate-50">
      <div className="text-lg text-center w-full">Registration Form</div>
      <GenericForm formFields={[...FORM_FIELDS]} genericFormValue={genericFormValue} onSubmit={onSubmit} />
    </Card>
  );
};
