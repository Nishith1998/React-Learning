import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (hopes) => {

  const [formValue, setForm] = useState({title: '', amount: '', date: ''});

//   const [titleValue, setTitle] = useState("");
//   const [amountValue, setAmount] = useState("");
//   const [dateValue, setDate] = useState("");

  const titleHandler = (event) => {
    console.log("value", event.target.value);
    // setTitle(event.target.value);
    // setForm({...formValue, title: event.target.value});
    setForm((prevState)=> {
      return { ...prevState, title: event.target.value };
    })
  };
  const amountHandler = (event) => {
    console.log("value", event.target.value);
    // setAmount(event.target.value);
    // setForm({...formValue, amount: event.target.value});
    setForm((prevState)=> {
      return { ...prevState, amount: event.target.value };
    })
  };
  const dateHandler = (event) => {
    console.log("value", event.target.value);
    // setDate(event.target.value);
    // setForm({...formValue, date: event.target.value});
    setForm((prevState)=> {
      return { ...prevState, date: event.target.value };
    })
  };

  const onSubmit = (event) => {
    event.preventDefault(); // to prevent page refresh on click of submit button 
    // console.log("values:", titleValue, amountValue, dateValue);
    // hopes.onSubmit({title: titleValue, amount: amountValue, date: dateValue});
    hopes.onSubmit(formValue);

    // setTitle("");
    // setAmount("");
    // setDate("");
    setForm({title: '', amount: '', date: ''});
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* <input type="text" onChange={titleHandler} value={titleValue} /> */}
          <input type="text" onChange={titleHandler} value={formValue.title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          {/* <input type="number" onChange={amountHandler} value={amountValue} /> */}
          <input type="number" onChange={amountHandler} value={formValue.amount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          {/* <input type="date" onChange={dateHandler} value={dateValue} /> */}
          <input type="date" onChange={dateHandler} value={formValue.date} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
