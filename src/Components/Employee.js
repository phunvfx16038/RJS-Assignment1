import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: this.props.location.state,
    };
  }

  renderDetail() {
    if (this.state.staff !== null) {
      return (
        <React.Fragment>
          <Col lg="4" md="3">
            <img
              src={this.state.staff.image}
              alt={this.state.staff.name}
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
          <Col className=" p-3" style={{ textAlign: "left" }}>
            <h5>Họ và tên: {this.state.staff.name}</h5>
            <p>
              Ngày sinh: {dateFormat(this.state.staff.doB, "paddedShortDate")}
            </p>
            <p>
              Ngày vào công ty:{" "}
              {dateFormat(this.state.staff.startDate, "paddedShortDate")}
            </p>
            <p>Phòng ban: {this.state.staff.departmentId}</p>
            <p>Số ngày nghỉ còn lại: {this.state.staff.annualLeave}</p>
            <p>Số ngày đã làm thêm: {this.state.staff.overTime}</p>
          </Col>
        </React.Fragment>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/employeelist">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{this.state.staff.name}</BreadcrumbItem>
        </Breadcrumb>
        <Row>{this.renderDetail()}</Row>
      </Container>
    );
  }
}

export default Employee;
