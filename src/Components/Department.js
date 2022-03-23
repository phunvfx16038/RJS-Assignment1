import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

class Department extends Component {
  render() {
    const departmentList = this.props.departments.map((department) => {
      return (
        <Col lg="4" md="6" key={department.id}>
          <h4>{department.name}</h4>
          <p>Số lượng nhân viên: {department.numberOfStaff}</p>
        </Col>
      );
    });
    return (
      <Container>
        <Row>{departmentList}</Row>
      </Container>
    );
  }
}

export default Department;
