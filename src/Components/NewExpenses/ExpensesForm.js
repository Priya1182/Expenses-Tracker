import React, { useState } from "react";
import './ExpensesForm.css';
function ExpensesForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredamount, setEnteredamount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHnadler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHnadler = (event) => {
        setEnteredamount(event.target.value);
    }
    const dateChangeHnadler = (event) => {
        setEnteredDate(event.target.value);
    }
    const submitHandler=(event)=>{
        console.log("inside sumbit handler");
        event.preventDefault();
        const expenceData = {
            id:Math.random(),
            title:enteredTitle,
            amount:enteredamount,
            date:new Date(enteredDate)

        }
        console.log("formData==>",expenceData)
        props.onSaveExpenseData(expenceData);
        setEnteredTitle('');
        setEnteredamount('');
        setEnteredDate('');

        
    }

    return (

        <form onSubmit={submitHandler}> 
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label className="new-expense__control label ">Title</label>
                    <input type="text" className="new-expense__control input" value={enteredTitle} onChange={titleChangeHnadler} />

                </div>
                <div className="new-expense__controls">
                    <label className="new-expense__control label " >Amount</label>
                    <input type="number" className="new-expense__control input" value={enteredamount} onChange={amountChangeHnadler} />

                </div>
                <div className="new-expense__controls">
                    <label className="new-expense__control label ">Date</label>
                    <input type="date" className="new-expense__control input" min="2019-01-01" max="2020-01-01" value={enteredDate} onChange={dateChangeHnadler} />

                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expenses</button>

                </div>

            </div>
        </form>

    )
}
export default ExpensesForm;