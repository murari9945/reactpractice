import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [givenName, setGivenName] = useState('');
  const [givenAmount, setGivenAmount] = useState('');
  const [givenDate, setGivenDate] = useState('');
  const [givenLocation, setGivenLocation] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const nameChangeHandler = (event) => {
    setGivenName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setGivenAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setGivenDate(event.target.value);
  };

  const locationChangeHandler = (event) => {
    setGivenLocation(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      name: givenName,
      price: givenAmount,
      date: new Date(givenDate),
      location: givenLocation,
    };

    props.onSaveExpenseData(expenseData);

    // Reset the form fields
    setGivenName('');
    setGivenAmount('');
    setGivenDate('');
    setGivenLocation('');
    setIsEditing(false);
  };

  const cancelHandler = () => {
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className="new-expenses">
        <button type="button" onClick={() => setIsEditing(true)}>
          Add Expense
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense">
        <div className="new-expense__control">
          <label>name</label>
          <input type="text" value={givenName} onChange={nameChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>price</label>
          <input type="number" value={givenAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>location</label>
          <input type="text" value={givenLocation} onChange={locationChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input type="date" value={givenDate} onChange={dateChangeHandler} />
        </div>
        <div>
          <button type="submit">Add Expense</button>
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
