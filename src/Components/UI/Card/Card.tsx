import styles from "./Card.module.css";

export const Card = (props: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.div + " " + (props.className ?? "")}>
      {props.children}
    </div>
  );
};
