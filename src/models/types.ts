export type TableHeaderType = {
  id: string;
  colName: string;
};

export type InputAttributes = {
  id?: string;
  type?: string;
  placeholder?: string;
};

export type GenericFormField<T> = {
  id: keyof T;
  type: string;
  label: string;
  attributes: InputAttributes;
  value?: string;
  classes?: string;
  options?: { label: string; value: string }[];
  isValid?: (value: string) => boolean;
  error?: string;
};

export type FormValue = {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  highestEducation: string;
  designation: string;
  gender: string;
  profilePic: string;
} & { [key: string]: any };

export type FormStructure<T> = {
  [k in keyof T]: { value: T[k]; isValid: boolean | null };
} & { [key: string]: any };
