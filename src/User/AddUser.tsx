import React from "react";
import { SetStateAction, useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Error from "../UI/Error";

export default (props: any) => {
  // let errorMsg;
  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const userInput: any = useRef();
  const ageInput: any = useRef();
  // const nameChangeHandler = (event: {
  //   target: { value: SetStateAction<string> };
  // }) => {
  //   setUsername(event.target.value);
  // };
  // const ageChangeHandler = (event: {
  //   target: { value: SetStateAction<string> };
  // }) => {
  //   setAge(event.target.value);
  // };
  const closeErrorHandler = () => {
    setErrorMsg("");
  };
  const submitHandler = (event: any) => {
    console.log("Ref value: ", userInput);
    event.preventDefault();
    if (userInput.current.value == "" || ageInput.current.value == "") {
      setErrorMsg("username or age can not be empty");
    } else if (Number(ageInput.current.value) <= 0) {
      setErrorMsg("Age should be greater than 0");
    } else {
      props.onFormSubmit({ username: userInput.current.value, age: ageInput.current.value });
      // setUsername("");
      // setAge("");
    }
  };
  return (
    <Card>
      <form
        onSubmit={submitHandler}
        className="flex flex-col"
      >
        <div className="flex flex-row p-4 gap-2">
          <label className="text-green-300">Username</label>
          <input ref={userInput} type="text"  />
        </div>
        <div className="flex flex-row p-4 gap-2">
          <label className="text-green-300">Age(Years)</label>
          <input ref={ageInput} type="number"  />
        </div>
        <Button type="submit">Add User</Button>
      </form>
      {errorMsg != "" && <Error msg={errorMsg} clickedOk={closeErrorHandler} />}
    </Card>
  );
};
