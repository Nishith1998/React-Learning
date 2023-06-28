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
      return value ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.trim())  : false;
    },
  },
  {
    id: "dob",
    type: "input",
    label: "DOB",
    attributes: { id: "email", type: "date", placeholder: "dd/mm/yyyy" },
    isValid: (value: string) => new Date().getFullYear() - new Date(value).getFullYear() > 18,
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
  {
    id: "submitButton",
    type: "button",
    label: "Submit",
    attributes: { id: "submitButton" },
    // isValid: (value: string) => true,
  },
];

export const Form = () => {
  return (
    <Card className="flex-col bg-slate-50">
      <GenericForm formFields={formFields} />
    </Card>
  );
};
