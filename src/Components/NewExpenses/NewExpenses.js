import React from "react";
import './NewExpenses.css'
import ExpensesForm from './ExpensesForm';
function NewExpenses(props) {
   const saveExpenseDataHandler = (enteredExpenseData)=>{
     console.log("Inside Parent New Expenses --->",enteredExpenseData);
     props.onAddExpenses(enteredExpenseData);
   }
    return (
        <div className="new-expense">
            <ExpensesForm onSaveExpenseData = {saveExpenseDataHandler} />
        </div>
    )

}
export default NewExpenses;