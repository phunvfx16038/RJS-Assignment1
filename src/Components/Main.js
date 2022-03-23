import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Switch, Redirect } from "react-router-dom";
import EmployeeList from "./EmployeeList.js";
import Employee from "./Employee.js";
import Department from "./Department.js";
import Salary from "./Salary.js";
import { STAFFS, DEPARTMENTS } from "../Data/staffs.jsx";
import ModalInput from "./Modal";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
      searchValue: "",
    };
  }
  callbackFunction = (childData) => {
    this.setState({ searchValue: childData });
  };
  render() {
    console.log(this.state.searchValue);
    return (
      <div className="container container-sm container-md">
        <Header parentCallback={this.callbackFunction} />
        <ModalInput />
        <Switch>
          <Route
            exact
            path="/employeelists"
            component={() => (
              <EmployeeList
                staffs={this.state.staffs}
                searchValue={this.state.searchValue}
              />
            )}
          />
          <Route path="/employeelists/:id" component={Employee} />
          <Route
            path="/department"
            component={() => (
              <Department
                departments={this.state.departments}
                searchValue={this.state.searchValue}
              />
            )}
          />
          <Route
            path="/salary"
            component={() => (
              <Salary
                staffs={this.state.staffs}
                searchValue={this.state.searchValue}
              />
            )}
          />
          <Redirect to="/employeelists" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
