import './ExpenseItem.css'
import Card from '../UI/Card';
function ExpenseDetails(props){
    const { name, price, location } = props;
    return(
        <div className='expense-item__description'>
        <h2>{name}</h2>
        <div className='expense-item__price '><h2>{price}</h2> </div>

        <div><h2>{location}</h2></div>
         
     </div>
    )
}
export default ExpenseDetails;