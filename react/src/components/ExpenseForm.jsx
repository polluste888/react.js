import React, { useState } from 'react';
import './Expenseform.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
  const priceChangeHandler = (event) => setEnteredPrice(event.target.value);
  const dateChangeHandler = (event) => setEnteredDate(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      price: +enteredPrice, 
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    
    
    setEnteredTitle('');
    setEnteredPrice('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} required />
        </div>
        <div className='new-expense__control'>
          <label>Price</label>
          <input type='number' min='0.01' step='0.01' value={enteredPrice} onChange={priceChangeHandler} required />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2023-01-01' max='2026-12-31' value={enteredDate} onChange={dateChangeHandler} required />
        </div>
      </div>
      <div className='new-expense__actions'>
        
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;