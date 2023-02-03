import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length > 0)
    return (
      <ul className="expenses-list">
        {props.items.map((ele) => (
          <ExpenseItem
            key={ele.id}
            title={ele.title}
            amount={ele.amount}
            date={ele.date}
          />
        ))}
      </ul>
    );
  else
    return (
      <h2 className="expenses-list__fallback">No data for selected year</h2>
    );
};

export default ExpensesList;
