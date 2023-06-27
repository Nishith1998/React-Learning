import { Button } from "../UI/Button/Button";
import styles from "./Keypad.module.css";

const KEYPAD = [
  [
    { label: "C", value: "clear", class: "bg-white" },
    { label: "0", value: "0", class: "bg-white"},
    { label: "*", value: "*", class: "bg-red" },
    { label: "÷", value: "/", class: "bg-red" },
  ],
  [
    { label: "7", value: "7", class: "bg-white" },
    { label: "8", value: "8", class: "bg-white" },
    { label: "9", value: "9", class: "bg-white" },
    { label: "-", value: "-", class: "bg-red" },
  ],
  [
    { label: "4", value: "4", class: "bg-white" },
    { label: "5", value: "5", class: "bg-white" },
    { label: "6", value: "6", class: "bg-white" },
    { label: "+", value: "+", class: "bg-red" },
  ],
  [
    { label: "1", value: "1", class: "bg-white" },
    { label: "2", value: "2", class: "bg-white" },
    { label: "3", value: "3", class: "bg-white" },
    { label: "=", value: "=", class: "bg-red" },
  ],
];
export const Keypad = (props: { onButtonClick: (value: string, isKeyPressed: boolean) => void }) => {
  return (
    <div className={styles['keypad-width']}>
      {KEYPAD.map(
        (item: { label: string, value: string, class?: string }[], outerIndex: number) => (
          <div
            key={outerIndex}
            className={styles['grid-cols-4']}
          >
            {item.map(
              (
                innerItem: { label: string, value: string, class?: string },
                innerIndex: number
              ) => (
                <Button
                  key={outerIndex + String(innerIndex)}
                  className={
                    innerItem.class
                  }
                  btnLabel={innerItem.label}
                  btnValue={innerItem.value}
                  onBtnClick={(btnValue) => props.onButtonClick(btnValue, false)}
                />
              )
            )}
          </div>
        )
      )}
    </div>
  );
};
