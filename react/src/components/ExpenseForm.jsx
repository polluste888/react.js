import React, { useRef, useState } from "react";
import Error from "../UI/error.jsx";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const nameInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    // Andmete kontroll (Validatsioon)
    if (
      enteredName.trim().length === 0 ||
      enteredAmount.trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      setError({
        title: "Vigane sisestus",
        message: "Palun täida kõik väljad! (Nimi, summa ja kuupäev)",
      });
      return;
    }

    if (+enteredAmount < 0.01) {
      setError({
        title: "Vigane summa",
        message: "Palun sisesta summa, mis on suurem kui 0.",
      });
      return;
    }

    const expenseData = {
      title: enteredName,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    // Väljade tühjendamine
    nameInputRef.current.value = "";
    amountInputRef.current.value = "";
    dateInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Kulu nimetus</label>
            <input type="text" ref={nameInputRef} />
          </div>
          <div className="new-expense__control">
            <label>Summa</label>
            <input type="number" step="0.01" ref={amountInputRef} />
          </div>
          <div className="new-expense__control">
            <label>Kuupäev</label>
            <input type="date" ref={dateInputRef} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Katkesta
          </button>
          <button type="submit">Lisa kulu</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ExpenseForm;
