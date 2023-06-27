export type formField = {
  id: string;
  type: string;
  label: string;
  attributes: React.InputHTMLAttributes<any>;
  options?: {label: string, value: string}[];
  isValid?: (value:string) => boolean;
  isInValid?: boolean;
};
