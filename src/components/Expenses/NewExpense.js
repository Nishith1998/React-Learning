import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = (props) => {
    const myFun = (value) => {
        console.log("values here in NewExpense.js", value);
    }
    return(
        <div className="new-expense">
        <ExpenseForm onSubmit={myFun} />
        </div>
    );
}

export default NewExpense;