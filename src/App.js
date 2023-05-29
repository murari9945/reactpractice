import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App=()=> {
  const [expenses,setExpenses] =useState([
    { name: 'Food', price: '120', location: 'Hyderabad',date: new Date(2023,5,13)},
    { name: 'Transportation', price: '50', location: 'New York',date: new Date(2023, 5, 12)},
    { name: 'Entertainment', price: '80', location: 'London',date: new Date(2021, 2, 12) },
    { name: 'Entertainment', price: '80', location: 'London' ,date: new Date(2021, 2, 12)},
    { name: 'Entertainment', price: '80', location: 'London' ,date: new Date(2021, 2, 12)},
    { name: 'Entertainment', price: '80', location: 'London' ,date: new Date(2021, 2, 12)},
    { name: 'Entertainment', price: '80', location: 'London' ,date: new Date(2021, 2, 12)},
    { name: 'Entertainment', price: '80', location: 'London' ,date: new Date(2021, 2, 12)},
    
  ]);
  //const addExpenseHandler = expenses=>{
   // console.log('in app.js');
   // console.log(expenses);
  //}
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
   /* <Card>
    <NewExpense onAddExpense={addExpenseHandler}/>
    

    {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          name={expense.name}
          price={expense.price}
          location={expense.location}
          date={expense.date}
        />
      ))}
    </Card> */
    <div>
    <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses items={expenses} />
  </div>
  );
}

export default App;
