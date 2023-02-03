import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const [isAddNewExpenseClicked, setAddNewExpenseFlag] = useState(false);
  const myFun = (value) => {
    console.log("values here in NewExpense.js", value);
    props.onAddExpense(value); // pass the value further to parent
  };

	const addExpenseClickHandler = () => {
		setAddNewExpenseFlag(true);
	}

	const hideFormHandler = () => {
		setAddNewExpenseFlag(false);
	}
  
  let formContent = <button onClick={addExpenseClickHandler}>Add Expense</button>
	

  if(isAddNewExpenseClicked)
		formContent = <ExpenseForm onSubmit={myFun} hideForm={hideFormHandler}/>;

  return (
    <div className="new-expense">
      {formContent}
    </div>
  );
};

export default NewExpense;