import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import EmployeeList from "./EmployeeList.js";
import Employee from "./Employee.js";
import Department from "./Department.js";
import Salary from "./Salary.js";
import { connect } from "react-redux";
import { addStaff, searchValueInput } from "../redux/ActionCreater";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    searchValue: state.searchValue,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addStaff: (
    id,
    name,
    doB,
    salaryScale,
    startDate,
    department,
    annualLeave,
    overTime,
    image
  ) =>
    dispatch(
      addStaff(
        id,
        name,
        doB,
        salaryScale,
        startDate,
        department,
        annualLeave,
        overTime,
        image
      )
    ),
  searchValueInput: (searchValue) => dispatch(searchValueInput(searchValue)),
});
class Main extends Component {
  render() {
    return (
      <div className="container container-sm container-md">
        <Header searchValueInput={this.props.searchValueInput} />

        <Switch>
          <Route
            exact
            path="/employeelists"
            component={() => (
              <EmployeeList
                staffs={this.props.staffs}
                searchValue={this.props.searchValue}
                addStaff={this.props.addStaff}
                id={this.props.id}
                searchValueInput={this.props.searchValueInput}
                departments={this.props.departments}
              />
            )}
          />
          <Route path="/employeelists/:id" component={Employee} />
          <Route
            path="/department"
            component={() => (
              <Department
                departments={this.props.departments}
                searchValue={this.props.searchValue}
              />
            )}
          />
          <Route
            path="/salary"
            component={() => (
              <Salary
                staffs={this.props.staffs}
                searchValue={this.props.searchValue}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
