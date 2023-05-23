import './ExpenseItem.css'

import ExpenseDetails from './ExpenseDetails.js';
function ExpenseItem(props){
    const { name, price, location } = props;
   
    return(
        <div className='expense-item'>
        <div>Expense Items</div>
        <ExpenseDetails price={props.price}  location={props.location}   name={props.name} ></ExpenseDetails>
       
       
        </div>
    ) ;
}
export default ExpenseItem;