import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container container-sm container-md">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Main;
