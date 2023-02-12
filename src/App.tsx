import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './User/AddUser';
import Users from './User/Users';


function App() {
  const [userList, setUserList] = useState([]);
  const formSubmitHandler = (formValue: {username: string, age: number}) => {
    console.log("formValue: ", formValue);
    setUserList((prevState): any => [...prevState, formValue]);
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <AddUser onFormSubmit={formSubmitHandler}/>
      <Users userList={userList} />
    </div>
  );
}

export default App;
