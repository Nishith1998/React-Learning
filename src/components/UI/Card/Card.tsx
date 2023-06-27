export const Card = (props: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={"flex flex-col p-4" + (props.className ?? "")}>
      {props.children}
    </div>
  );
};
