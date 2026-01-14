import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate.jsx";
import Card from "../UI/Card";
import { useState } from 'react';

const ExpenseItem = (props) => {
    // 1. Check if expenseData exists before trying to use it
    if (!props.expenseData) {
        return null; 
    }

    // 2. Initialize state with the title from props
    const [title, setTitle] = useState(props.expenseData.title);

    const clickHandler = () => {
        console.log('Clicked!');
        setTitle('Updated!'); // Changes the text on the screen
    };
   
    return (
        <Card className="expense-item">
            {/* 3. Passing the date to the ExpenseDate component */}
            <ExpenseDate date={props.expenseData.date} />
            
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.expenseData.price}€</div>
            </div>
            
            <button onClick={clickHandler}>BUY NOW!</button>
        </Card>
    );
};

export default ExpenseItem;