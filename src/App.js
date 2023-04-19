import NewExpenses from './Components/NewExpenses/NewExpenses';
import React ,{useState} from 'react';
import './Components/ExpensesItem.css';
import './Components/Expenses';
import Expenses from './Components/Expenses';
const dummyData = [
  {
    id: 1,
    title: "T V",
    amount: "$ 20.35",
    date: new Date(2022, 4, 15)
  },
  {
    id: 2,
    title: "Bike",
    amount: "$ 120.35",
    date: new Date(2022, 8, 20)
  },
  {
    id: 3,
    title: "car insurance",
    amount: "$ 220.35",
    date: new Date(2022, 9, 27)
  }
]
function App() {
  const [expenses,setExpenses]=useState(dummyData)
  const addExpensesHandler =(expense)=>{
    console.log("inside app --->",expense);
    setExpenses((prevExpense)=>[expense, ...prevExpense]);
  }
  return (
    <div className="App">
      <NewExpenses  onAddExpenses={addExpensesHandler}/>
      <Expenses items={expenses} />

    </div>
  );
}

export default App;
