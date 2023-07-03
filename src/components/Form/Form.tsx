import { Card } from "../UI/Card/Card";
import { GenericForm } from "../UI/GenericForm/GenericForm";
import { FORM_FIELDS } from "../../models/constants";
import { GenericFormField, FormValue } from "../../models/types";
import { useEffect } from "react";
// change name of form
export const Form = (props: {
  onAddUser: (userInfo: FormValue) => void;
  formValue: FormValue;
}) => {
  const onSubmit = (formValue: FormValue): void => {
    console.log(formValue);
    props.onAddUser({
      ...formValue,
      name: formValue.firstName + " " + formValue.lastName,
    });
  };

  useEffect(() => {}, [props.formValue]);

  console.log("Form: formValue: ", props.formValue);

  const formFields = FORM_FIELDS.map((fields: GenericFormField<FormValue>) => {
    fields.value = props.formValue[fields.id];
    return fields;
  });

  return (
    <Card className="flex-col bg-slate-50">
      <GenericForm formFields={formFields} onSubmit={onSubmit} />
    </Card>
  );
};
