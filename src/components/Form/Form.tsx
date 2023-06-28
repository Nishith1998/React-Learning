import { useEffect, useState } from "react";
import { Card } from "../UI/Card/Card";
import { GenericForm } from "../UI/FormField/GenericForm";
import { formFields as formFieldsConstant } from "../../models/constants";
import { formField, formValueType } from "../../models/types";

export const Form = (props: { onAddUser: (userInfo: formValueType) => void; formValue: formValueType; }) => {
  const onSubmit = (formValue: formValueType ): void => {
    console.log(formValue);
    props.onAddUser({
      ...formValue,
      // name: formValue.firstName + formValue.lastName,
    });
  };

  const [formFields, setFormFields] = useState<formField<formValueType>[]>(
    formFieldsConstant.map((fields: formField<formValueType>) => {
      fields.value = props.formValue[fields.id];
      return fields;
    })
  );

  useEffect(() => {
    const newValue = formFieldsConstant.map((fields: formField<formValueType>): formField<formValueType> => {
      fields.value = props.formValue[fields.id];
      return fields;
    });
    setFormFields(newValue);
  }, [props.formValue]);

  return (
    <Card className="flex-col bg-slate-50">
      <GenericForm formFields={formFields} onSubmit={onSubmit} />
    </Card>
  );
};
