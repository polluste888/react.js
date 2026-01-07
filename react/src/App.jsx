
import './App.css';

import ExpenseItem from "./ExpenseItem";

function App() {
    const expenses = [
        {
            date: new Date(2023, 0, 10),
            title:'BMW M3 G80',
            price: 69999.99
        },
        {
            date: new Date(2023, 0, 5),
            title:'Ayton game-worn jersey',
            price: 250.00
        }
    ]

  return (
    <div className="App">
      <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
      <ExpenseItem expenseData={expenses[1]}></ExpenseItem>
    </div>
  );
}

export default App;