import './ExpenseForm.css';
const ExpenseForm=()=>{
    const nameChangerHandler=(event)=>{
        console.log(event.target.value);
    };
    return <form>
        <div className='new-expense'>
            <div className='new-expense__control'>
                <label>name</label>
                <input type="text" onChange={nameChangerHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>price</label>
                <input type="number"/>
            </div>
            <div className='new-expense__control'>
                <label>location</label>
                <input type="text"/>
            </div>
            <div className='new-expense__control'>
                <label>date</label>
                <input type="date"/>
            </div>
            <div>
                <button type="submit">add expenses</button>
            </div>
        </div>
    </form>

}
export default ExpenseForm;