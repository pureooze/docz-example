import React, { Component } from "react";
import CustomList from "./CustomList";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    const items = [
      {
        value: "one",
        id: "1"
      },
      {
        value: "two",
        id: "2"
      },
      {
        value: "three",
        id: "3"
      }
    ];

    return (
      <div className="App">
        <CustomList type={"row"} items={items} />
        <CustomList type={"column"} items={items} />
      </div>
    );
  }
}

export default App;
