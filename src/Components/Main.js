import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import EmployeeList from "./EmployeeList.js";
import Employee from "./Employee.js";
import Department from "./Department.js";
import Salary from "./Salary.js";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  postStaff,
  searchValueInput,
  fetchStaffs,
  fetchSalary,
  deleteStaff,
} from "../redux/ActionCreater";
import DepartmentDetail from "./DepartmentDetail";
import EditEmployee from "./EditEmployee";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    searchValue: state.searchValue,
    staffsSalary: state.staffsSalary,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postStaff: (
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
      postStaff(
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
  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
  fetchSalary: () => {
    dispatch(fetchSalary());
  },
  deleteStaff: (id) => {
    dispatch(deleteStaff(id));
  },
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchSalary();
  }
  render() {
    return (
      <div className="container container-sm container-md">
        <Header searchValueInput={this.props.searchValueInput} />
        <TransitionGroup className="transition-group">
          <CSSTransition timeout={{ enter: 300, exit: 300 }} classNames="fade">
            <Switch>
              <Route
                exact
                path="/employeelists"
                component={() => (
                  <EmployeeList
                    staffs={this.props.staffs}
                    searchValue={this.props.searchValue}
                    postStaff={this.props.postStaff}
                    id={this.props.id}
                    searchValueInput={this.props.searchValueInput}
                    isLoading={this.props.staffs.isLoading}
                    errMess={this.props.staffs.errMess}
                    deleteStaff={this.props.deleteStaff}
                  />
                )}
              />
              <Route exact path="/employeelists/:id" component={Employee} />
              <Route
                exact
                path="/employeelists/edit/:id"
                component={EditEmployee}
              />
              <Route
                exact
                path="/department"
                component={() => (
                  <Department searchValue={this.props.searchValue} />
                )}
              />
              <Route path="/department/:id" component={DepartmentDetail} />

              <Route
                path="/salary"
                component={() => (
                  <Salary
                    staffsSalary={this.props.staffsSalary}
                    searchValue={this.props.searchValue}
                  />
                )}
              />
              <Redirect to="/employeelists" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
