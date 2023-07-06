type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export const Card = (props: CardProps) => {
  return (
    <div className={"flex flex-col p-4 " + (props.className ?? "")}>
      {props.children}
    </div>
  );
};
