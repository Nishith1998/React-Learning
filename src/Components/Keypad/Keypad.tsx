import { Button } from "../UI/Button/Button";
import styles from "./Keypad.module.css";

const KEYPAD = [
  [
    { label: "clear", class: "bg-white" },
    { label: "/", class: "bg-red" },
  ],
  [
    { label: "7", class: "bg-white" },
    { label: "8", class: "bg-white" },
    { label: "9", class: "bg-white" },
    { label: "-", class: "bg-red" },
  ],
  [
    { label: "4", class: "bg-white" },
    { label: "5", class: "bg-white" },
    { label: "6", class: "bg-white" },
    { label: "+", class: "bg-red" },
  ],
  [
    { label: "1", class: "bg-white" },
    { label: "2", class: "bg-white" },
    { label: "3", class: "bg-white" },
    { label: "=", class: "bg-red" },
  ],
];
export const Keypad = (props: { onButtonClick: (arg0: string) => void }) => {
  return (
    <div style={{ width: "20rem" }}>
      {KEYPAD.map(
        (item: { label: string; class?: string }[], outerIndex: number) => (
          <div
            key={outerIndex}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            }}
          >
            {item.map(
              (
                innerItem: { label: string; class?: string },
                innerIndex: number
              ) => (
                <Button
                  key={outerIndex + String(innerIndex)}
                  className={
                    innerIndex === 0 && outerIndex === 0
                      ? `${styles["cols-span-3"]} ${innerItem.class}`
                      : innerItem.class
                  }
                  btnValue={innerItem.label}
                  onBtnClick={(btnValue) => props.onButtonClick(btnValue)}
                />
              )
            )}
          </div>
        )
      )}
    </div>
  );
};
