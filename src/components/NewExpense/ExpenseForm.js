import React,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm=()=>{
    const[givenName,setGivenName]=useState('');
    const[givenAmount,setGivenAmount]=useState('');
    const[givenDate,setGivenDate]=useState('');
    const[givenLocation,setGivenLocation]=useState('');
    
    
    

    const nameChangerHandler=(event)=>{
        setGivenName(event.target.value);
    };
    const amountChangeHandler=(event)=>{
        setGivenAmount(event.target.value);

    };
    const dateChangeHandler=(event)=>{
        setGivenDate(event.target.value);
    };
    const locationChangeHandler=(event)=>{
        setGivenLocation(event.target.value);

    };
    const submitHandler = (event) => {
        event.preventDefault(); 
    
        
        const expenseData = {
          name: givenName,
          amount: givenAmount,
          date: givenDate,
          location: givenLocation,
        };
    
        console.log(expenseData);
    
        // Reset the form fields
        setGivenName('');
        setGivenAmount('');
        setGivenDate('');
        setGivenLocation('');
      };
    
    return <form>
        <div className='new-expense'>
            <div className='new-expense__control'>
                <label>name</label>
                <input type="text" onChange={nameChangerHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>price</label>
                <input type="number" onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>location</label>
                <input type="text"onChange={locationChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>date</label>
                <input type="date" onChange={dateChangeHandler}/>
            </div>
            <div>
                <button type="submit" onClick={submitHandler}>add expenses</button>
            </div>
        </div>
    </form>

}
export default ExpenseForm;