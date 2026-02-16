import React, { useContext } from "react";
import ThemeContext from "./theme-context";

const Header = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <header>
      <h1>Teema vahetus</h1>
      <button onClick={themeCtx.toggleTheme}>
        Lülita {themeCtx.theme === "light" ? "tumedale" : "heledale"} teemale
      </button>
    </header>
  );
};

export default Header;
