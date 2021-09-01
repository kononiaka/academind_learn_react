import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Person.css";
// import AuthContext from "./../../../context/auth-context";
import { AuthContext } from "./../../../container/App";
import withClassHOC from "./../../../hoc/withClassHOC";
import Aux from "../../../hoc/Auxiliary";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  // static contextType = AuthContext;
  // const rnd = Math.random();

  // if (rnd > 0.7) {
  //   throw new Error("Something Went wrong");
  // }

  componentDidMount() {
    // if (this.props.position === 1) {
    //   // this.inputElement.focus();
    //   this.inputElementRef.current.focus();
    // }
  }

  inputFocus() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering...");
    const { name, age, children, click, changed } = this.props;
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => (auth ? <p>Logged In!</p> : <p>Please, authorized :(</p>)}
        </AuthContext.Consumer>
        <h2 onClick={click}>
          I'm a {name} and I'm {age} years old!
        </h2>
        <p>{children}</p>
        <input
          type="text"
          // ref={input => (this.inputElement = input)}
          ref={this.inputElementRef}
          onChange={changed}
          defaultValue={name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClassHOC(Person, classes.Person);
