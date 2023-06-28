export type formField = {
  id: string;
  type: string;
  label: string;
  attributes: React.InputHTMLAttributes<any>;
  value?: string;
  classes?: string;
  options?: {label: string, value: string}[];
  isValid?: (value:string) => boolean;
};
