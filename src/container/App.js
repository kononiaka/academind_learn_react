import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
// import WithClass from "../hoc/WithClass";
import withClassHOC from "../hoc/withClassHOC";
import Aux from "../hoc/Auxiliary";
// import AuthContext from "../context/auth-context";

export const AuthContext = React.createContext(false);

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
      authenticated: false,
      handlerCounter: 0,
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
    this.setState((prevState, props) => {
      return {
        showPersons: !showPersons,
        handlerCounter: prevState.handlerCounter + 1,
      };
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  loginHander = () => {
    this.setState({ authenticated: true });
    console.log(this.state.authenticated);
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
          changed={this.switchNameHandler}
          // isAuthenticated={authenticated}
        ></Persons>
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
            showPersons={showPersons}
            login={this.loginHander}></Cockpit>
        ) : null}
        <AuthContext.Provider value={this.state.authenticated}>
          {personsList}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClassHOC(App, classes.App);

//141
