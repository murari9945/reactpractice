import React,{useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js';

import ExpenseDetails from './ExpenseDetails.js';

const ExpenseItem=(props)=>{
    const[title,setTitle]=useState(props.name);
    const [expense, setExpense] = useState(props.price);
    
    const clickHandler=()=>{
        setTitle("updated!")
        console.log(title);
    }
    const updateExpense = () => {
        setExpense(100);
      };
    
    const deleteExpenseHandler = () => {
        const expenseItem = document.querySelector('.expense-item');
        expenseItem.remove();
      };
    const { name, price, location } = props;
   
    return(
        <div className='expense-item'>
          <ExpenseDate date={props.date} />
        <ExpenseDetails price={expense}  location={props.location}   name={title} ></ExpenseDetails>
        <button onClick={clickHandler}>change Title</button>
        <button onClick={updateExpense}>Change Expense</button>
        <button onClick={deleteExpenseHandler}>Delete Expense</button>
       
       
        </div>
    ) ;
}
export default ExpenseItem;