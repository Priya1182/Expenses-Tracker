
import ExpensesItem from "./ExpensesItem";
import './Expenses.css'


function expense(props) {
    return (
        <div className="expenses">
            {
                props.items.map((expense)=>
                <ExpensesItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />
                )
            }

            

        </div>
    )

}
export default expense; 