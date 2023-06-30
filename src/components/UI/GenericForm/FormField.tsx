import React, { ChangeEvent } from "react";
import { Input } from "../Inputs/Input";
import { Dropdown } from "../Inputs/Dropdown";
import { Radio } from "../Inputs/Radio";
import { FileUpload } from "../Inputs/FileUpload";
// import { FormStructureType, FormValueType } from "../../../models/types";

export const FormField = (props: any) => {
  let formFieldJSX;

  const onInputChangeHandler = (
    label: string,
    value: string,
    isValid: boolean
  ) => {
    props.onInputChange(label, value, isValid);
  };

  const isFormValid = () => {
    console.log("isFormValid: FormValue: ", props.form);
    return (
      Object.values(props.form).filter(
        (ele: any) => ele.isValid === false || ele.isValid === null
      ).length !== 0
    );
  };
  // object with keys directly access the value of JSX
  if (props.type === "input") {
    formFieldJSX = (
      <Input
        id={props.id}
        label={props.label}
        classes={props.classes}
        attributes={{ ...props.attributes }}
        form={props.form}
        isValid={props.isValid}
        onInputChangeHandler={onInputChangeHandler}
        error={props.error}
      />
    );
  } else if (props.type === "dropdown") {
    formFieldJSX = (
      <Dropdown
        id={props.id}
        label={props.label}
        classes={props.classes}
        attributes={{ ...props.attributes }}
        form={props.form}
        isValid={props.isValid}
        options={props.options}
        onInputChangeHandler={onInputChangeHandler}
        error={props.error}
      />
      // <>
      //   <label htmlFor={props.attributes.id}>{props.label}</label>
      //   <select
      //     {...props.attributes}
      //     value={
      //       props.form[props.id].value === ""
      //         ? "selectAnOption"
      //         : props.form[props.id].value
      //     }
      //     onChange={(event: ChangeEvent<HTMLInputElement>) =>
      //       onInputChangeHandler(
      //         props.id,
      //         event.target.value,
      //         props.isValid(event.target.value)
      //       )
      //     }
      //   >
      //     <option disabled value="selectAnOption">
      //       Select an option
      //     </option>
      //     {props.options.map((option: { label: string; value: string }) => (
      //       <option key={option.value} value={option.value}>
      //         {option.label}
      //       </option>
      //     ))}
      //   </select>
      // </>
    );
  } else if (props.type === "radio") {
    formFieldJSX = (
      <Radio
        id={props.id}
        label={props.label}
        classes={props.classes}
        attributes={{ ...props.attributes }}
        form={props.form}
        isValid={props.isValid}
        options={props.options}
        onInputChangeHandler={onInputChangeHandler}
        error={props.error}
      />
      // <>
      //   <label htmlFor={props.attributes.id}>{props.label}</label>
      //   <div className="grid grid-cols-2 gap-2">
      //     {props.options.map((option: { label: string; value: string }) => {
      //       return (
      //         <div key={"input-" + option.label}>
      //           <input
      //             key={"input-" + option.value}
      //             id={option.value}
      //             name={"radio-" + props.attributes.id}
      //             type="radio"
      //             value={option.value}
      //             checked={props.form[props.id].value === option.value}
      //             onChange={(event: ChangeEvent<HTMLInputElement>) => {
      //               onInputChangeHandler(
      //                 props.id,
      //                 event.target.value,
      //                 props.isValid(event.target.value)
      //               );
      //             }}
      //           ></input>
      //           <label
      //             className="pl-2"
      //             key={"label-" + option.value}
      //             htmlFor={option.value}
      //           >
      //             {option.label}
      //           </label>
      //         </div>
      //       );
      //     })}
      //   </div>
      // </>
    );
  } else if (props.type === "file") {
    formFieldJSX = (
      <FileUpload
        id={props.id}
        label={props.label}
        classes={props.classes}
        attributes={{ ...props.attributes }}
        form={props.form}
        isValid={props.isValid}
        onInputChangeHandler={onInputChangeHandler}
        error={props.error}
      />
      // <>
      //   <label htmlFor={props.attributes.id}>{props.label}</label>
      //   <div>
      //     <input
      //       {...props.attributes}
      //       onChange={(event: ChangeEvent<HTMLInputElement>) => {
      //         let url = "";
      //         let fileName = "";
      //         if (event.target.files?.[0]) {
      //           fileName = event.target.files?.[0].name;
      //           url = URL.createObjectURL(event.target.files[0]);
      //         }
      //         console.log(url);
      //         return onInputChangeHandler(
      //           props.id,
      //           fileName + "#" + url,
      //           props.isValid(event.target.value)
      //         );
      //       }}
      //       className={
      //         "opacity-0 absolute z-10 " +
      //         (props.form[props.id].isValid === false
      //           ? "bg-red-200"
      //           : "bg-white")
      //       }
      //     ></input>
      //     <div className="absolute flex flex-row z-0">
      //       <button type="button">Choose a file</button>
      //       <div className="pl-4 w-28 truncate">
      //         {props.form[props.id].value.split("#")[0]}
      //       </div>
      //     </div>
      //   </div>
      // </>
    );
  } else if (props.type === "button") {
    formFieldJSX = (
      <button
        className={`col-span-2 bg-blue-200 w-20 ${
          isFormValid() ? "bg-white opacity-70" : ""
        }`}
        {...props.attributes}
        disabled={isFormValid()}
      >
        {props.label}
      </button>
    );
  }
  return <div className="grid grid-cols-2 gap-2 my-2">{formFieldJSX}</div>;
};
