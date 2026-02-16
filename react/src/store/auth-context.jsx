import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  theme: "light",
  onToggleTheme: () => {},
});

export default AuthContext;
