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
    date: new Date(2024, 5, 15),
    title: 'Ayton game-worn jersey',
    price: 250.00
  },
  {
    id: 'e3',
    date: new Date(2025, 1, 20),
    title: 'Uus arvuti',
    price: 1200.00
  },
  {
    id: 'e4',
    date: new Date(2024, 8, 5),
    title: 'Kindlustus',
    price: 450.00
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