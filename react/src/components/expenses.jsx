import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2024');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log('Expenses.js sai kätte aasta:', selectedYear);
  };

 
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className='expenses'>
      <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler} 
      />
      
      
      {filteredExpenses.length === 0 ? (
        <p style={{color: 'white', textAlign: 'center'}}>Sellel aastal kulusid ei leitud.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem 
            key={expense.id} 
            expenseData={expense} 
          />
        ))
      )}
    </div>
  );
};

export default Expenses;