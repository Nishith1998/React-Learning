export const Button = (props: {
  isFormValid: () => boolean;
  label: string;
  attributes: any;
}) => {
  return (
    <button
      {...props.attributes}
      className={`col-span-2 bg-blue-200 w-20 ${
        props.isFormValid() ? "bg-white opacity-70" : ""
      }`}
      disabled={props.isFormValid()}
    >
      {props.label}
    </button>
  );
};
