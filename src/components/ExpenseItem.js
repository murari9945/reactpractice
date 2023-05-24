import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js';

import ExpenseDetails from './ExpenseDetails.js';
const ExpenseItem=(props)=>{
    const clickHandler=()=>{
        console.log("clicked!!!")
    }
    const deleteExpenseHandler = () => {
        const expenseItem = document.querySelector('.expense-item');
        expenseItem.remove();
      };
    const { name, price, location } = props;
   
    return(
        <div className='expense-item'>
          <ExpenseDate date={props.date} />
        <ExpenseDetails price={props.price}  location={props.location}   name={props.name} ></ExpenseDetails>
        <button onClick={clickHandler}>change Title</button>
        <button onClick={deleteExpenseHandler}>Delete Expense</button>
       
       
        </div>
    ) ;
}
export default ExpenseItem;