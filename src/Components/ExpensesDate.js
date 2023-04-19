import './ExpensesDate.css'
function ExpensesDate(props) {

    const day = props.date.toLocaleString('en-Us', { day: '2-digit' });
    // or we can use 
    // const day =props.date.getDate();
    const month = props.date.toLocaleString('en-Us', { month: 'long' });
    const year = props.date.getFullYear();
    // console.log("day**",day,"month**",month,"year**",year)
    return (
        <div className="expense-date">
            <div className="expense-date_month">{month}</div>
            <div className="expense-date_year">{year}</div>
            <div className="expense-date_day">{day}</div>
        </div>
    )

}
export default ExpensesDate;