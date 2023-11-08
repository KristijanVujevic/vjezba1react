import "./App.css";

import React, { Component } from "react";
import Firstchild from "./Components/firstchild";
import Secondchild from "./Components/secondchild";
import Thirdchild from "./Components/thirdchild";

class App extends Component {
  constructor(props) {
    super(props);
    this.korisnici = {
      users: [
        { name: "John", age: 25 },
        { name: "Alice", age: 30 },
        { name: "Bob", age: 28 },
      ],
    };
  }

  render() {
    const { users } = this.korisnici;
    return (
      <div className="App">
        <Firstchild name={users[0].name} age={users[0].age} />
        <Secondchild name={users[1].name} age={users[1].age} />
        <Thirdchild name={users[2].name} age={users[2].age} />
      </div>
    );
  }
}

export default App;
