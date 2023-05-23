import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { name: 'Food', price: '120', location: 'Hyderabad' },
    { name: 'Transportation', price: '50', location: 'New York' },
    { name: 'Entertainment', price: '80', location: 'London' },
    { name: 'Entertainment', price: '80', location: 'London' },
    { name: 'Entertainment', price: '80', location: 'London' },
    { name: 'Entertainment', price: '80', location: 'London' },
    { name: 'Entertainment', price: '80', location: 'London' },
    { name: 'Entertainment', price: '80', location: 'London' },
    
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
        />
      ))}
    </div>
  );
}

export default App;
