import { FormEvent, useEffect, useState } from "react";
import {
  FormStructure,
  GenericFormField,
  FormValue,
} from "../../../models/types";
import { FormField } from "./FormField";
import { Card } from "../Card/Card";
import {
  FROM_STRUCTURE_INITIAL,
  INITIAL_FORM_VALUE,
} from "../../../models/constants";

type GenericFormProps = {
  formFields: GenericFormField<FormValue>[];
  onSubmit: (formValue: FormValue) => void;
};

export const GenericForm = (props: GenericFormProps) => {

  // const formStructureWithValue: FormStructure<FormValue> = {...FROM_STRUCTURE_INITIAL};
  // props.formFields.forEach(ele => {
  //   formStructureWithValue[ele.id] = ele.value;
  // })

  const [form, setForm] = useState<FormStructure<FormValue>>(
    FROM_STRUCTURE_INITIAL
  );

  const isFormValid = () => {
    return (
      Object.values(form).filter(
        (ele: any) => ele.isValid === false || ele.isValid === null
      ).length !== 0
    );
  };
  const formStructureInitial: FormStructure<FormValue> = {...FROM_STRUCTURE_INITIAL};
  props.formFields.forEach((ele) => {
    if (ele.type !== "button")
      formStructureInitial[ele.id] = {
        value: form[ele.id].value,
        isValid:
          ele.value === "" ? null : ele.isValid?.(ele.value ?? "") ?? null,
        isTouched: true
      };
  });

  // useEffect(() => {
  //   const formStructureModified: FormStructure<FormValue> = {
  //     ...FROM_STRUCTURE_INITIAL,
  //   };
  //   props.formFields.forEach((ele) => {
  //     formStructureModified[ele.id] = {
  //       value: ele.value ?? "",
  //       isValid: ele.isValid?.(ele.value ?? "") ?? null,
  //       isTouched: form[ele.id]?.isTouched ?? false
  //     };
  //   });
  //   setForm(FROM_STRUCTURE_INITIAL);
  // }, [props.formFields]);

  const onInputChange = (label: string, value: string, isValid: boolean) => {
    setForm((prevForm) => {
      return { ...prevForm, [label]: { value: value, isValid: props.formFields.filter(ele => label === ele.id)[0].isValid?.(value), isTouched: true } };
    });
  };
  const onBlur = (label: string, isTouched: boolean) => {
    console.log("onBlur", label, isTouched)
    // setForm((prevForm) => {
    //   return { ...prevForm, [label]: { ...prevForm[label], isTouched: isTouched } };
    // });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    debugger;
    const formValueMapped: FormValue = { ...INITIAL_FORM_VALUE };
    for (let item in form) {
      formValueMapped[item] = form[item].value;
    }
    props.onSubmit(formValueMapped);
    setForm((prevForm) => {
      const pForm = {...prevForm};
      for(let item in pForm) {
        pForm[item].value = '';
        pForm[item].isValid = null;
        pForm[item].isTouched = true;
      }
      return pForm;
    });
  };

  console.log("GenericForm: Form: ", form);

  return (
    <Card className="!pb-0">
      <form onSubmit={submitHandler}>
        {props.formFields.map((field: GenericFormField<FormValue>) => (
          <FormField
            key={field.id}
            // form={form}
            id={String(field.id)}
            type={field.type}
            value={form[field.id]?.value ?? ''}
            label={field.label}
            classes={field.classes}
            attributes={field.attributes}
            isValid={field.isValid?.(form[field.id]?.value) ?? true}
            isTouched={form.isTouched}
            error={field.error}
            options={field.options}
            onInputChange={onInputChange}
            onBlur={onBlur}
            isFormValid={isFormValid}
          />
        ))}
      </form>
    </Card>
  );
};
