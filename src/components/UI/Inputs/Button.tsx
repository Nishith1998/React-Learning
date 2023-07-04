type ButtonProps = {
  label: string;
  classes?: string;
  disabled?: boolean;
  attributes: {
    id?: string;
    type: "submit" | "button";
  };
  clickHandler?: () => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      id={props.attributes.id}
      type={props.attributes.type}
      className={props.classes}
      disabled={props.disabled ?? false}
      onClick={props.clickHandler}
    >
      {props.label}
    </button>
  );
};
