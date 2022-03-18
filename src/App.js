import React, { Component } from "react";
import { STAFFS } from "./Data/staffs.jsx";
import EmployeeList from "./Components/EmployeeList";
import { Navbar } from "reactstrap";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
    };
  }
  render() {
    return (
      <div className="container">
        <Navbar color="primary" expand="md" light>
          Ứng dụng quản lý nhân sự v1.0
        </Navbar>
        <EmployeeList staffs={this.state.staffs} />
      </div>
    );
  }
}

export default App;
