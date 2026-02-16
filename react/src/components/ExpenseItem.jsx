import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.jsx";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  if (!props.expenseData) {
    return null;
  }

  const [title, setTitle] = useState(props.expenseData.title);

  const clickHandler = () => {
    console.log("Clicked: " + title);
    setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseData.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}€</div>
      </div>

      <button onClick={clickHandler}>OSTA KOHE!</button>
    </Card>
  );
};

export default ExpenseItem;
