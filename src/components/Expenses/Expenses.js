import "./Expenses.css";
import { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  console.log("Expense.js props : ", props);

  const [filteredYear, setFilteredYear] = useState("2022");

  const changeFilterHandler = (value) => {
    console.log("selectionChangeHandler value: ", value);
    setFilteredYear(value);
  };
  const filterExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  // let expenseContent = <p>No data found for selected year</p>;

  // if (filterExpenses.length > 0) {
  //   expenseContent = filterExpenses.map((ele) => (
  //     <ExpenseItem
  //       key={ele.id}
  //       title={ele.title}
  //       amount={ele.amount}
  //       date={ele.date}
  //     />
  //   ));
  // }
  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeFilter={changeFilterHandler}
        />
      </div>
      <ExpensesChart expenses={filterExpenses}/>
      <ExpensesList items={filterExpenses}/>
      {/* {expenseContent} */}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
};

export default Expenses;