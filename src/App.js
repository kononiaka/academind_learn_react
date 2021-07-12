import React, { Component } from "react";
import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: "cx1", name: "Vlad", age: 32 },
      { id: "da2", name: "Sergei", age: 31 },
      { id: "fd3", name: "Julia", age: 27 },
    ],
    otherState: "Some other state",
    showPersons: false,
  };

  switchNameHandler = ({ target }, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = target.value;

    const persons = [this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
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

  render() {
    const { persons, showPersons } = this.state;

    const style = {
      backgroundColor: "green",
      color: "white",
      border: "1px solid white",
      cursor: "pointer",
      font: "inherit",
      padding: "8px",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let personsContainer = null;

    if (showPersons) {
      personsContainer = (
        <div>
          {persons.map(({ id, age, name }, index) => (
            <Person
              key={id}
              name={name}
              age={age}
              click={() => this.deletePersonHandler(index)}
              changed={event => this.switchNameHandler(event, id)}
            />
          ))}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }
    const classes = [];
    if (persons.length <= 2) {
      classes.push("red");
    }
    if (persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi I'm React App</h1>
          <p className={classes.join(" ")}>This is really working!</p>
          <button style={style} onClick={this.toggleShowPersons}>
            Switch Persons
          </button>
          {personsContainer}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
