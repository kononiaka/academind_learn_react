import React, { Component } from "react";
import PropTypes from "prop-types";

import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";
import AuthContext from "./../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;
  // const rnd = Math.random();

  // if (rnd > 0.7) {
  //   throw new Error("Something Went wrong");
  // }

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  render() {
    console.log("[Person.js] rendering...");
    const { name, age, children, click, changed } = this.props;
    return (
      <Aux>
        {this.context.authenticated ? (
          <p>Logged In!</p>
        ) : (
          <p>Please, authorized :(</p>
        )}
        <h2 onClick={click}>
          I'm a {name} and I'm {age} years old!
        </h2>
        <p>{children}</p>
        <input
          type="text"
          // ref={inputEl => (this.inputElement = inputEl)}
          ref={this.inputElementRef}
          onChange={changed}
          defaultValue={name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  clicked: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
