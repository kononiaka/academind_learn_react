import React from "react";

const AuthContext = React.createContext({
  authenticated: false,
  login: () => {
    console.log("clicked");
  },
});

export default AuthContext;
