import { formField } from "../../models/types";
import { Card } from "../UI/Card/Card";
import { GenericForm } from "../UI/FormField/GenericForm";



const formFields: formField[] = [
  {
    id: "firstName",
    type: "input",
    label: "First Name",
    attributes: { id: "firstName", type: "text", placeholder: "First Name" },
    isValid: (value: string) => { console.log("valueHa:", value); return value ? value.trim().length > 3 : false}
  },
  {
    id: "lastName",
    type: "input",
    label: "Last Name",
    attributes: { id: "lastName", type: "text", placeholder: "Last Name" },
    isValid: (value: string) => true

  },
  {
    id: "email",
    type: "input",
    label: "Email",
    attributes: { id: "email", type: "email", placeholder: "abc@xyz.com" },
    isValid: (value: string) => true

  },
  {
    id: "dob",
    type: "input",
    label: "DOB",
    attributes: { id: "email", type: "date", placeholder: "dd/mm/yyyy" },
    isValid: (value: string) => true

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
    isValid: (value: string) => true

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
    isValid: (value: string) => true

  },
  {
    id: "gender",
    type: "radio",
    label: "Gender",
    attributes: { type: "radio" },
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" }
    ],
    isValid: (value: string) => true

  },
  {
    id: "submitButton",
    type: "button",
    label: "Submit",
    attributes: { id: "submitButton" },
    isValid: (value: string) => true

  },
];

export const Form = () => {

  return (
    <Card className="flex-col">
        <GenericForm formFields={formFields}/>
    </Card>
  );
};
