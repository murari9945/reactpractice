import './ExpenseItem.css'
function ExpenseItem(props){
    const { name, price, location } = props;
   
    return(
        <div className='expense-item'>
        <div>Expense Items</div>
        <div className='expense-item__description'>
           <h2>{name}</h2>
           <div className='expense-item__price '><h2>{price}</h2> </div>

           <div><h2>{location}</h2></div>
            
        </div>
       
        </div>
    ) ;
}
export default ExpenseItem;