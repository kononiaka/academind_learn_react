import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside constructor", props);
    this.lastPersonRef = React.createRef();
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps updated... ");
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log("[Persons.js] componentWillReceiveProps updated...", props);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate updated...");
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate updated...");
    return { message: "Snapshot!" };
  }

  // componentWillUpdate() {
  //   console.log("[Persons.js] componentWillUpdate updated...");
  // }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate updated...");
  }

  componentDidMount() {
    console.log("[Persons.js] componentDidMount...");
    this.lastPersonRef.current.inputFocus();
  }
  render() {
    console.log("[Persons.js] rendering...");
    const { persons, clicked, changed } = this.props;
    return persons.map(({ id, age, name }, index) => (
      <Person
        key={id}
        name={name}
        age={age}
        position={index}
        ref={this.lastPersonRef}
        click={() => clicked(index)}
        changed={event => changed(event, id)}
        // isAuth={isAuthenticated}
      />
    ));
  }
}
export default Persons;
