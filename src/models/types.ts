export type formField<T> = {
  id: keyof T;
  type: string;
  label: string;
  attributes: React.InputHTMLAttributes<any>;
  value?: string;
  classes?: string;
  options?: { label: string; value: string }[];
  isValid?: (value: string) => boolean;
};

export type formValueType = {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  highestEducation: string;
  designation: string;
  gender: string;
  profilePic: string;
  submitButton: string;
} & { [key: string]: any };

export type FormStructureType<T> = {
  [k in keyof T]: {value: T[k], isValid: boolean | null}
} & { [key: string]: any }
