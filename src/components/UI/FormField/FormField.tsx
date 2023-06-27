import React, { ChangeEvent } from "react";

export const FormField = (props: any) => {
  let formFieldJSX;

  const onInputChangeHandler = (label: string, value: string, isValid: boolean) => {
    props.onInputChange(label, value, isValid);
  };

  console.log("rUNNING");

  if (props.type === "input") {
    formFieldJSX = (
      <>
        <label htmlFor={props.attributes.id}>{props.label}</label>
        <input
          {...props.attributes}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onInputChangeHandler(props.id, event.target.value, props.isValid(event.target.value))
          }
          className={props.form[props.id].isValid === false ? 'bg-red-200' : 'bg-white' }
        ></input>
      </>
    );
  } else if (props.type === "dropdown") {
    formFieldJSX = (
      <>
        <label htmlFor={props.attributes.id}>{props.label}</label>
        <select
          {...props.attributes}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onInputChangeHandler(props.id, event.target.value, props.isValid(event.target.value))
          }
        >
          {props.options.map((option: { label: string; value: string }) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </>
    );
  } else if (props.type === "radio") {
    formFieldJSX = (
      <>
        <label htmlFor={props.attributes.id}>{props.label}</label>
        <div className="grid grid-cols-2 gap-2">
          {props.options.map((option: { label: string; value: string }) => {
            return (
              <div key={"input-" + option.label}>
                <input
                  key={"input-" + option.value}
                  id={option.value}
                  name={"radio-" + props.attributes.id}
                  type="radio"
                  value={option.value}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    onInputChangeHandler(props.id, event.target.value, props.isValid(event.target.value))
                  }
                ></input>
                <label
                  className="pl-2"
                  key={"label-" + option.value}
                  htmlFor={option.value}
                >
                  {option.label}
                </label>
              </div>
            );
          })}
        </div>
      </>
    );
  } else if (props.type === "button") {
    formFieldJSX = (
      <button className="col-span-2" {...props.attributes}>
        {props.label}
      </button>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-2 my-2" key={props.id}>
      {formFieldJSX}
    </div>
  );
};
