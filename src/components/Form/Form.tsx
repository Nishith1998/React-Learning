import { useEffect, useState } from "react";
import { formField } from "../../models/types";
import { Card } from "../UI/Card/Card";
import { GenericForm } from "../UI/FormField/GenericForm";

const formFields: formField[] = [
  {
    id: "firstName",
    type: "input",
    label: "First Name",
    attributes: { id: "firstName", type: "text", placeholder: "First Name" },
    isValid: (value: string) => {
      return value ? value.trim().length > 3 : false;
    },
  },
  {
    id: "lastName",
    type: "input",
    label: "Last Name",
    attributes: { id: "lastName", type: "text", placeholder: "Last Name" },
    isValid: (value: string) => {
      return value ? value.trim().length > 3 : false;
    },
  },
  {
    id: "email",
    type: "input",
    label: "Email",
    attributes: { id: "email", type: "email", placeholder: "abc@xyz.com" },
    isValid: (value: string) => {
      return value
        ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            value.trim()
          )
        : false;
    },
  },
  {
    id: "dob",
    type: "input",
    label: "DOB",
    attributes: { id: "email", type: "date", placeholder: "dd/mm/yyyy" },
    isValid: (value: string) =>
      new Date().getFullYear() - new Date(value).getFullYear() > 18,
  },
  {
    id: "highestEducation",
    type: "dropdown",
    label: "Highest Education",
    attributes: { id: "highestEducation", placeholder: "Select one option" },
    options: [
      { label: "Graduate", value: "graduate" },
      { label: "10th", value: "10th" },
    ],
    isValid: (value: string) => value.trim().length !== 0,
  },
  {
    id: "designation",
    type: "dropdown",
    label: "Designation",
    attributes: { id: "designation" },
    options: [
      { label: "Solution Engineer", value: "solutionEngineer" },
      { label: "Sr Solution Engineer", value: "srSolutionEngineer" },
    ],
    isValid: (value: string) => value.trim().length !== 0,
  },
  {
    id: "gender",
    type: "radio",
    label: "Gender",
    attributes: { type: "radio" },
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
    isValid: (value: string) => value.trim().length !== 0,
  },
  // {
  //   id: "profilePic",
  //   type: "input",
  //   label: "Upload profile picture",
  //   attributes: { type: "file" },
  //   isValid: (value: string) => value.trim().length !== 0,
  // },
  {
    id: "submitButton",
    type: "button",
    label: "Submit",
    classes: "bg-blue-200 w-20",
    attributes: { id: "submitButton", type: "submit" },
    isValid: (value: string) => true
  },
];

export const Form = (props: any) => {
  console.log("Form: props", props);
  const onSubmit = (formValue: { [key: string]: string }) => {
    console.log(formValue);
    props.onAddUser({
      ...formValue,
      name: formValue.firstName + formValue.lastName,
    });
  };

  const [newValue, setNewValue] = useState(formFields.map(fields => {
    fields.value = props.formValue[fields.id];
    return fields;
  }));
  useEffect(() => {
    console.log();
    const newValue = formFields.map((fields) => {
      fields.value = props.formValue[fields.id];
      return fields;
    });
    setNewValue(newValue);
    console.log("newVla", newValue);
  }, [props.formValue]);

  return (
    <Card className="flex-col bg-slate-50">
      <GenericForm formFields={newValue} onSubmit={onSubmit} />
    </Card>
  );
};
