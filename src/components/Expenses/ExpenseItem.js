import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// import { useState } from 'react';

const ExpenseItem = (props) => {
  // console.log("date", props.date);
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //     setTitle('updated !!');
  //     console.log('props.title: '+ props.title);
  //     console.log('title: '+ title);
  // }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>change title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
