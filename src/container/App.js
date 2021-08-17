import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Auxiliary";

class App extends Component {
  constructor(props) {
    console.log("[App.js] contructor");
    super(props);
    this.state = {
      persons: [
        { id: "cx1", name: "Vlad", age: 32 },
        { id: "da2", name: "Sergei", age: 31 },
        { id: "fd3", name: "Julia", age: 27 },
      ],
      otherState: "Some other state",
      showPersons: false,
      showCockpit: true,
      changedCounter: 0,
    };
  }

  static getDerivedStateFromProps(state, props) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  switchNameHandler = ({ target }, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    const persons = [...this.state.persons];
    person.name = target.value;
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return { persons, changedCounter: prevState.changedCounter + 1 };
    });
  };
  toggleShowPersons = () => {
    const { showPersons } = this.state;
    this.setState({ showPersons: !showPersons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  // WARNING! To be deprecated in React v17. Use componentDidMount instead.
  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  // componentDidMount() {
  //   console.log("[App.js] componentDidMount");
  // }

  render() {
    console.log("[App.js] rendering...");
    const { persons, showPersons } = this.state;
    const { appTitle } = this.props;

    let personsList = null;

    if (showPersons) {
      personsList = (
        <Persons
          persons={persons}
          clicked={this.deletePersonHandler}
          changed={this.switchNameHandler}></Persons>
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}>
          Close Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={appTitle}
            personLength={persons.length}
            clicked={this.toggleShowPersons}
            showPersons={showPersons}></Cockpit>
        ) : null}
        {personsList}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);

//108
