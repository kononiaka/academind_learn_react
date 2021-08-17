import React, { useEffect } from "react";

import classes from "./Cockpit.css";

const Cockpit = ({ personsLength, showPersons, clicked, title }) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    //http.request

    const timer = setTimeout(() => {
      alert("Data has been fetched with a cloud!");
    }, 1000);

    return () => {
      clearTimeout(timer);
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

  let classBtn = "";
  const assignedClasses = [];
  if (personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  if (showPersons) {
    classBtn = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={classBtn} onClick={clicked}>
        Switch Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
