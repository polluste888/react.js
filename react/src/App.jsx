import React, { useState } from 'react';
import './App.css';
import NewExpense from "./components/Newexpense";
import Expenses from "./components/expenses"; 

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    date: new Date(2023, 0, 10),
    title: 'BMW M3 G80',
    price: 69999.99
  },
  {
    id: 'e2',
    date: new Date(2023, 0, 5),
    title: 'Ayton game-worn jersey',
    price: 250.00
  }
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
     
      <NewExpense onAddExpense={addExpenseHandler} />
      
    
      <Expenses items={expenses} />
    </div>
  );
}

export default App;