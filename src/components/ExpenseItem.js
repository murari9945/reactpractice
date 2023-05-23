import './ExpenseItem.css'
function ExpenseItem(){
    const expensename='food'
    const expenseprice='120'
    const expenselocation='hyderabad'
    return(
        <div className='expense-item'>
        <div>Expense Items</div>
        <div className='expense-item__description'>
           <h2>{expensename}</h2>
           <div className='expense-item__price '><h2>{expenseprice}</h2> </div>

           <div><h2>{expenselocation}</h2></div>
            
        </div>
       
        </div>
    ) ;
}
export default ExpenseItem;