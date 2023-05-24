import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js';

import ExpenseDetails from './ExpenseDetails.js';
function ExpenseItem(props){
    const { name, price, location } = props;
   
    return(
        <div className='expense-item'>
          <ExpenseDate date={props.date} />
        <ExpenseDetails price={props.price}  location={props.location}   name={props.name} ></ExpenseDetails>
       
       
        </div>
    ) ;
}
export default ExpenseItem;