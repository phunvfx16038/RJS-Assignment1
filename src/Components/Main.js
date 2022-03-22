import React, { Component } from "react";
import Header from "./Header";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container container-sm container-md">
        <Header />
      </div>
    );
  }
}

export default Main;
