import React, { useContext } from "react";
import Navigation from "./Navigation";
import AuthContext from "../store/auth-context";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <header className={classes["main-header"]}>
      <h1>Kulude Arvestus</h1>
      <Navigation />
      <button
        onClick={ctx.onToggleTheme}
        style={{
          marginLeft: "1rem",
          cursor: "pointer",
          padding: "0.5rem",
          borderRadius: "5px",
          border: "1px solid white",
          background: "transparent",
          color: "white",
        }}
      >
        {ctx.theme === "light" ? "🌙 Tume" : "☀️ Hele"}
      </button>
    </header>
  );
};

export default MainHeader;
