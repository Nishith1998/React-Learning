import { Card } from "../UI/Card/Card";
import { GenericForm } from "../UI/GenericForm/GenericForm";
import { FORM_FIELDS } from "../../models/constants";
import { FormFieldType, FormValueType } from "../../models/types";
import { useEffect, useState } from "react";
// change name of form
export const Form = (props: { onAddUser: (userInfo: FormValueType) => void; formValue: FormValueType; }) => {
  const onSubmit = (formValue: FormValueType ): void => {
    console.log(formValue);
    props.onAddUser({
      ...formValue,
      name: formValue.firstName + formValue.lastName,
    });
  };

  useEffect(() => {

  },[props.formValue])

  console.log("Form: formValue: ", props.formValue);

  const formFields = FORM_FIELDS.map((fields: FormFieldType<FormValueType>) => {
    if(fields.type === 'dropdown') {
      fields.value = fields.options && fields.options?.length !== 0 ? fields.options[0].value : '';
    } else 
    fields.value = props.formValue[fields.id];
    return fields;
  });

  return (
    <Card className="flex-col bg-slate-50">
      <GenericForm formFields={formFields} onSubmit={onSubmit} />
    </Card>
  );
};
