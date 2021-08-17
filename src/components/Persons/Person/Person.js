import React, { Component } from "react";

import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";

class Person extends Component {
  // const rnd = Math.random();

  // if (rnd > 0.7) {
  //   throw new Error("Something Went wrong");
  // }
  render() {
    console.log("[Person.js] rendering...");
    const { name, age, children, click, changed } = this.props;
    return (
      <Aux>
        <h2 onClick={click}>
          I'm a {name} and I'm {age} years old!
        </h2>
        <p>{children}</p>
        <input type="text" onChange={changed} defaultValue={name} />
      </Aux>
    );
  }
}

export default withClass(Person, classes.Person);
