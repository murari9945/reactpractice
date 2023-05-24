import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

const App=()=> {
  const expenses = [
    { name: 'Food', price: '120', location: 'Hyderabad',date: new Date(2023,5,13)},
    { name: 'Transportation', price: '50', location: 'New York',date: new Date(2023, 5, 12)},
    { name: 'Entertainment', price: '80', location: 'London',date: new Date(2021, 2, 12) },
    { name: 'Entertainment', price: '80', location: 'London' ,date: new Date(2021, 2, 12)},
    { name: 'Entertainment', price: '80', location: 'London' ,date: new Date(2021, 2, 12)},
    { name: 'Entertainment', price: '80', location: 'London' ,date: new Date(2021, 2, 12)},
    { name: 'Entertainment', price: '80', location: 'London' ,date: new Date(2021, 2, 12)},
    { name: 'Entertainment', price: '80', location: 'London' ,date: new Date(2021, 2, 12)},
    
  ];

  return (
    <div>
    <h1>lets get started here</h1>
    

    {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          name={expense.name}
          price={expense.price}
          location={expense.location}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default App;
