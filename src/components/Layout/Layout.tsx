import { useState } from "react";
import { Form } from "../Form/Form";
import { UserInfo } from "../User/UserInfo";
import { formValueType } from "../../models/types";
import { INITIAL_FORM_VALUE } from "../../models/constants";

export const Layout = () => {
  const userDetailsInitialState: formValueType[] = [];
  const currentUserFormValueInitialState: formValueType = INITIAL_FORM_VALUE;
  
  const [userDetails, setUserDetails] = useState<formValueType[]>(userDetailsInitialState);
  const [currentUserFormValue, setCurrentUserFormValue] = useState<formValueType>(currentUserFormValueInitialState);

  const addUserHandler = (userInfo: formValueType ) => {
    setUserDetails((prevState) => {
      const indexOfItem = userDetails.findIndex(ele => ele.email === userInfo.email)
      if( indexOfItem === -1) {
        return prevState.concat([userInfo]);
      } else {
        prevState[indexOfItem] = userInfo;
        return [...prevState];
      }
    });
  };

  const onDeleteHandler = (item: formValueType) => {
    setUserDetails((prevState) => {
      let indexOfItem = prevState.findIndex((ele) => ele.email === item.email);
      prevState.splice(indexOfItem, 1);
      return [...prevState];
    });
  };
  
  const onEditHandler = (item: formValueType) => {
    console.log("edit" , item)
      setCurrentUserFormValue(item);
  };

  return (
    <>
      <Form formValue={currentUserFormValue} onAddUser={addUserHandler} />
      {userDetails.length !== 0 && (
        <UserInfo userDetails={userDetails} onDelete={onDeleteHandler} onEdit={onEditHandler} />
      )}
    </>
  );
};
