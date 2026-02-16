import React, { useState, useEffect } from "react";

import Login from "./components/login";
import Home from "./components/Home";
import MainHeader from "./components/Mainheader";
import AuthContext from "./store/auth-context";
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");

  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses) {
      const parsedExpenses = JSON.parse(savedExpenses);
      return parsedExpenses.map((exp) => ({
        ...exp,
        date: new Date(exp.date),
        amount: +exp.amount,
      }));
    }
    return [];
  });

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedUser");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const toggleThemeHandler = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedUser", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedUser");
    setIsLoggedIn(false);
  };

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        theme: theme,
        onToggleTheme: toggleThemeHandler,
      }}
    >
      <div className={theme}>
        <MainHeader />
        <main style={{ minHeight: "100vh" }}>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && (
            <React.Fragment>
              <Home />
              <NewExpense onAddExpense={addExpenseHandler} />
              <Expenses items={expenses} />
            </React.Fragment>
          )}
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
