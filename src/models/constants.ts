import { FormFieldType, FormValueType, TableHeaderType } from "./types";

export const INITIAL_FORM_VALUE: FormValueType = {
  firstName: "",
  lastName: "",
  email: "",
  dob: "",
  highestEducation: "",
  designation: "",
  gender: "",
  profilePic: "",
};

export const FROM_STRUCTURE_INITIAL = {
    firstName: {value: '', isValid: null},
    lastName: {value: '', isValid: null},
    email: {value: '', isValid: null},
    dob: {value: '', isValid: null},
    highestEducation: {value: '', isValid: true},
    designation: {value: '', isValid: true},
    gender: {value: '', isValid: null},
    profilePic: {value: '', isValid: null},
    // submitButton: {value: '', isValid: true},
}

export const FORM_FIELDS: FormFieldType<FormValueType>[] = [
  {
    id: "firstName",
    type: "input",
    label: "First Name",
    attributes: { id: "firstName", type: "text", placeholder: "First Name" },
    isValid: (value: string) => {
      return value ? value.trim().length > 3 : false;
    },
    error: "First name should at least have 4 characters",
    classes: "grid grid-cols-2 w-40"
  },
  {
    id: "lastName",
    type: "input",
    label: "Last Name",
    attributes: { id: "lastName", type: "text", placeholder: "Last Name" },
    isValid: (value: string) => {
      return value ? value.trim().length > 3 : false;
    },
    error: "Last name should at least have 4 characters",
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
    error: "Email formate is not valid",
  },
  {
    id: "dob",
    type: "input",
    label: "DOB",
    attributes: { id: "email", type: "date", placeholder: "dd/mm/yyyy" },
    isValid: (value: string) =>
      new Date().getFullYear() - new Date(value).getFullYear() >= 18,
    error: "You should be 18 years old"
  },
  {
    id: "highestEducation",
    type: "dropdown",
    label: "Highest Education",
    attributes: { id: "highestEducation", placeholder: "Select one option" },
    options: [
      { label: "10th", value: "10th" },
      { label: "12th", value: "12th" },
      { label: "Graduate", value: "graduate" },
      { label: "Post Graduate", value: "postGraduate" },
    ],
    isValid: (value: string) => true,
  },
  {
    id: "designation",
    type: "dropdown",
    label: "Designation",
    attributes: { id: "designation" },
    options: [
      { label: "Solution Engineer", value: "solutionEngineer" },
      { label: "Sr Solution Engineer", value: "srSolutionEngineer" },
      { label: "Associate Team Lead", value: "associateTeamLead" },
      { label: "Team Lead", value: "teamLead" },
      { label: "Practice Head", value: "practiceHead" },
    ],
    isValid: (value: string) => true,
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
    id: "profilePic",
    type: "file",
    label: "Upload profile picture",
    attributes: { type: "file" },
    isValid: (value: string) => value.trim().length !== 0,
  },
  {
    id: "submitButton",
    type: "button",
    label: "Submit",
    classes: "bg-blue-200 w-20",
    attributes: { id: "submitButton", type: "submit" },
    isValid: (value: string) => true,
  },
];

export const tableHeader: TableHeaderType[] = [
  {
    id: "profilePic",
    colName: "Profile picture",
  },
  {
    id: "name",
    colName: "Name",
  },
  {
    id: "email",
    colName: "Email",
  },
  {
    id: "dob",
    colName: "Date of Birth",
  },
  {
    id: "highestEducation",
    colName: "Highest Education",
  },
  {
    id: "designation",
    colName: "Designation",
  },
  {
    id: "delete-action",
    colName: "Delete",
  },
];
