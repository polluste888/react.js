import React, { useContext } from "react";
import ThemeContext from "./theme-context";

const Page = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <div className={`page ${themeCtx.theme}`}>
      <h2>See on {themeCtx.theme === "light" ? "hele" : "tume"} </h2>
    </div>
  );
};

export default Page;
