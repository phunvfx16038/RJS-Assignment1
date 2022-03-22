import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Switch, Redirect } from "react-router-dom";
import EmployeeList from "./EmployeeList.js";
import Employee from "./Employee.js";
import Department from "./Department.js";
import Salary from "./Salary.js";
import { STAFFS, DEPARTMENTS } from "../Data/staffs.jsx";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
    };
  }
  render() {
    return (
      <div className="container container-sm container-md">
        <Header />
        <Switch>
          <Route
            exact
            path="/employeelists"
            component={() => <EmployeeList staffs={this.state.staffs} />}
          />
          <Route path="/employeelists/:id" component={Employee} />
          <Route
            path="/department"
            component={() => (
              <Department departments={this.state.departments} />
            )}
          />
          <Route
            path="/salary"
            component={() => <Salary staffs={this.state.staffs} />}
          />
          <Redirect to="/employeelists" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
