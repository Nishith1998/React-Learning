import { useState } from "react";
import { Form } from "../Form/Form";
import { UserInfo } from "../User/UserInfo";
import { FormValue } from "../../models/types";
import { INITIAL_FORM_VALUE } from "../../models/constants";

export const Dashboard = () => {
  const [userDetails, setUserDetails] = useState<FormValue[]>([]);
  const [currentUserFormValue, setCurrentUserFormValue] =
    useState<FormValue>(INITIAL_FORM_VALUE);

  const addUserHandler = (userInfo: FormValue) => {
    setUserDetails((prevState) => {
      const indexOfItem = userDetails.findIndex(
        (ele) => ele.email === userInfo.email
      );
      if (indexOfItem === -1) {
        return prevState.concat([userInfo]);
      } else {
        prevState[indexOfItem] = userInfo;
        return [...prevState];
      }
    });
    setCurrentUserFormValue(INITIAL_FORM_VALUE);
  };

  const onDeleteHandler = (item: FormValue) => {
    setUserDetails((prevState) => {
      let indexOfItem = prevState.findIndex((ele) => ele.email === item.email);
      prevState.splice(indexOfItem, 1);
      return [...prevState];
    });
  };

  const onEditHandler = (item: FormValue) => {
    console.log("edit", item);
    setCurrentUserFormValue(item);
  };

  return (
    <>
      <Form formValue={currentUserFormValue} onAddUser={addUserHandler} />
      {userDetails.length !== 0 && (
        <UserInfo
          userDetails={userDetails}
          onDelete={onDeleteHandler}
          onEdit={onEditHandler}
        />
      )}
    </>
  );
};
