import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Loading } from "./Loading";
import { fetchDepartment } from "../redux/ActionCreater";
import { FadeTransform } from "react-animation-components";

const mapStateToProps = (state) => {
  return {
    departments: state.departments,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDepartment: () => {
    dispatch(fetchDepartment());
  },
});
class Department extends Component {
  componentDidMount() {
    this.props.fetchDepartment();
  }
  render() {
    const DepartmentList = () => {
      if (this.props.departments.departments !== null) {
        const departmentList = this.props.departments.departments.map(
          (department) => {
            return (
              <Col lg="4" md="6" key={department.id} className="border p-2">
                <Link
                  to={{
                    pathname: `/department/${department.id}`,
                    state: department,
                  }}
                >
                  <h4>{department.name}</h4>
                </Link>
                <p>Số lượng nhân viên: {department.numberOfStaff}</p>
              </Col>
            );
          }
        );
        return departmentList;
      }
    };
    return (
      <Container>
        {this.props.isLoading ? (
          <Row>
            <Loading />
          </Row>
        ) : this.props.errMess ? (
          <Row>
            <h4>{this.props.errMess}</h4>
          </Row>
        ) : (
          <FadeTransform
            in
            transformProps={{
              exitTransform: "scale(0.5) translateY(-50%)",
            }}
          >
            <Row>
              <DepartmentList />
            </Row>
          </FadeTransform>
        )}
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Department);
