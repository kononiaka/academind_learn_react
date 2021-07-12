import React from "react";
import Radium from "radium";
import "./Person.css";

const Person = ({ name, age, children, click, changed }) => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  };
  return (
    <div className="Person" style={style}>
      <h2 onClick={click}>
        I'm a {name} and I'm {age} years old!
      </h2>
      <p>{children}</p>
      <input type="text" onChange={changed} defaultValue={name} />
    </div>
  );
};

export default Radium(Person);
