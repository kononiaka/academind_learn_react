import React, { useEffect, useRef } from "react";

import classes from "./Cockpit.css";
// import AuthContext from "./../../context/auth-context";

const Cockpit = ({ personsLength, showPersons, clicked, title, login }) => {
  const toggleBtnRef = useRef(null);

  // const authContext = useContext(AuthContext);
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    //http.request

    // const timer = setTimeout(() => {
    //   alert("Data has been fetched with a cloud!");
    // }, 1000);
    // toggleBtnRef.current.click();

    return () => {
      // clearTimeout(timer);
      console.log("[Cockpit.js] clean up work of useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");

    return () => {
      console.log("[Cockpit.js] clean up work 2nd useEffect");
    };
  });

  // useEffect();

  const assignedClasses = [];
  let classBtn = classes.Button;

  if (personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  if (showPersons) {
    classBtn = [classes.Button, classes.Red].join(" ");
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={classBtn} onClick={clicked}>
        Switch Persons
      </button>
      <button className={classBtn} onClick={login}>
        Log in
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
