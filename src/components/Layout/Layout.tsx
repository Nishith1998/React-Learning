import { useState } from "react";
import { Form } from "../Form/Form";
import { UserInfo } from "../User/UserInfo";

export const Layout = () => {
  const userDetailsInitialState: { [key: string]: string }[] = [
    // {
    //     "firstName": "adfs",
    //     "lastName": "asadf",
    //     "name": "asfs asadf",
    //     "email": "ngoswami@deqode.com",
    //     "dob": "1998-12-16",
    //     "highestEducation": "graduate",
    //     "designation": "solutionEngineer",
    //     "gender": "male",
    //     "profilePic": "C:\\fakepath\\Screenshot from 2023-06-05 16-30-00.png",
    //     "submitButton": ""
    // }
  ];
  const currentUserFormValueInitialState: {[key: string]: string} = {}
  const [userDetails, setUserDetails] = useState(userDetailsInitialState);
  const [currentUserFormValue, setCurrentUserFormValue] = useState(currentUserFormValueInitialState);

  const addUserHandler = (userInfo: { [key: string]: string }) => {
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

  const onDeleteHandler = (item: { [key: string]: string }) => {
    setUserDetails((prevState) => {
      let indexOfItem = prevState.findIndex((ele) => ele.email === item.email);
      prevState.splice(indexOfItem, 1);
      return [...prevState];
    });
  };
  
  const onEditHandler = (item: { [key: string]: string }) => {
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
