import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Home = () => {
  const [enteredName, setEnteredName] = useState<string>("");
  const [nameInputTouched, setNameInputTouched] = useState<boolean>(false);

  const isNameValid = enteredName.trim() !== "";
  let nameError: boolean = false;
  let isFormValid = false;
  if (isNameValid) {
    isFormValid = true;
  }
  if (!isNameValid && nameInputTouched) {
    nameError = true;
  }
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNameInputTouched(true);
    if (!isNameValid) {
      return;
    }
    console.log("entered name: ", enteredName);
    setEnteredName("");
    setNameInputTouched(false);
  };

  const nameInputBlurHandler = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    setNameInputTouched(true);
  };

  const nameInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEnteredName(event.target.value);
    // setNameInputTouched(true);
  };
  return (
    <Box
      component="form"
      onSubmit={submitHandler}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          required
          error={nameError}
          id="outlined-required"
          label="Name"
          value={enteredName}
        />
        {nameError && <Typography>Name is required !</Typography>}
      </div>
      <Button type="submit" disabled={!isFormValid}>
        Submit
      </Button>
    </Box>
  );
};

export default Home;
