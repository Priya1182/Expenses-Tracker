import './ExpensesItem.css';
import React,{useState} from 'react';
import ExpensesDate from "./ExpensesDate";
function ExpensesItem(props) {
    
   const[title,setTitle]=useState(props.title);
    // console.log(props)
    // const day =props.date.getDate();
    // const month =props.date.getMonth();
    // const year =props.date.getFullYear();
    // console.log("day**",day,"month**",month+1,"year**",year)

    const clickHnadler =()=>{
        setTitle('updated'); 
        console.log("user clicked")
    }
    return(
        <div className='expense-item'>
            <div>
                <ExpensesDate date={props.date}/>
               
            </div>
            <div  className='expense-item__description'>
                <h1>{title}</h1>
            </div>
            <div className='expense-item__price'>{props.amount}</div>
            <button onClick={clickHnadler}>change Title</button>
        </div>
    )
    
}
export default ExpensesItem;