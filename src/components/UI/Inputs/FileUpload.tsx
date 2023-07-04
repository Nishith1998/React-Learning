import { ChangeEvent } from "react";
import { InputAttributes } from "../../../models/types";

type FileUploadProps = {
  id: string;
  label: string;
  classes?: string;
  value: string;
  attributes: InputAttributes;
  error?: string;
  onInputChangeHandler: (value: string) => void;
};

export const FileUpload = (props: FileUploadProps) => {
  const fileUploadChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    let url = "";
    let fileName = "";
    if (event.target.files?.[0]) {
      fileName = event.target.files?.[0].name;
      url = URL.createObjectURL(event.target.files[0]);
    }
    props.onInputChangeHandler(
      fileName + "#" + url // use ``
    );
  };
  return (
    <>
      <label htmlFor={props.attributes.id}>{props.label}</label>
      <div>
        <input
          id={props.attributes.id}
          type="file"
          onChange={fileUploadChangeHandler}
          className={props.classes} // THREE STATES, TOUCHED, UNTOUCHED
        ></input>
        <div className="absolute flex flex-row z-0">
          <button type="button">Choose a file</button>
          <div className="pl-4 w-20 truncate">{props.value.split("#")[0]}</div>
        </div>
      </div>
    </>
  );
};
