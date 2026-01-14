import './App.css';
import NewExpense from "./components/NewExpense";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      date: new Date(2023, 0, 10),
      title: 'BMW M3 G80',
      price: 69999.99
    },
    {
      date: new Date(2023, 0, 5),
      title: 'Ayton game-worn jersey',
      price: 250.00
    }
  ];

  return (
    <div className="App">
      <NewExpense />
      {/* We must use 'expenseData' as the prop name to match your ExpenseItem code */}
      <ExpenseItem expenseData={expenses[0]} />
      <ExpenseItem expenseData={expenses[1]} />
    </div>
  );
}

export default App;