import React, { ChangeEvent } from "react";

export const FormField = (props: any) => {
  let formFieldJSX;
  
  const onInputChangeHandler = (
    label: string,
    value: string,
    isValid: boolean,
    type?: string
  ) => {
    props.onInputChange(label, value, isValid, type);
  };

  const isFormValid = () => {
    return Object.values(props.form).filter((ele: any) => ele.isValid === false || ele.isValid === null).length !== 0;
  }

  if (props.type === "input") {
    formFieldJSX = (
      <>
        <label htmlFor={props.attributes.id}>{props.label}</label>
        <input
          {...props.attributes}
          value={props.attributes.type === 'file' ? '' : props.form[props.id].value}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            if(props.attributes.type === 'file') {
              let url = event.target.files?.[0] ? URL.createObjectURL(event.target.files[0]) : '';
              console.log(url);
            }
            onInputChangeHandler(
              props.id,
              event.target.value,
              props.isValid(event.target.value),
              props.attributes.type
            )}
          }
          className={
            props.form[props.id].isValid === false ? "bg-red-200" : "bg-white"
          }
        ></input>
      </>
    );
  } else if (props.type === "dropdown") {
    formFieldJSX = (
      <>
        <label htmlFor={props.attributes.id}>{props.label}</label>
        <select
          {...props.attributes}
          value={ props.value}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onInputChangeHandler(
              props.id,
              event.target.value,
              props.isValid(event.target.value)
            )
          }
        >
          <option disabled selected>
            Select an option
          </option>
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
                  // checked={props === option.value}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    onInputChangeHandler(
                      props.id,
                      event.target.value,
                      props.isValid(event.target.value)
                    )
                  }
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
      <button 
        className={`col-span-2 bg-blue-200 w-20 ${isFormValid() ? 'bg-white opacity-70' : '' }`} 
        {...props.attributes}
        disabled={isFormValid()}
      >
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
