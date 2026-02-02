import React, { useState } from 'react';
import ExpenseForm from './Expenseform'; 
import './Newexpense.css';

const NewExpense = (props) => {
  // Vihje 1: Olek vormi näitamise haldamiseks
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    
    props.onAddExpense(expenseData);
    
    // Vihje 4: Pane vorm kinni pärast andmete edukat saatmist
    setIsEditing(false);
  };

  // Vihje 2: Funktsioonid vormi avamiseks ja sulgemiseks
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

     
      {isEditing && (
        <ExpenseForm 
          onSaveExpenseData={saveExpenseDataHandler} 
          onCancel={stopEditingHandler} 
        />
      )}
    </div>
  );
};

export default NewExpense;