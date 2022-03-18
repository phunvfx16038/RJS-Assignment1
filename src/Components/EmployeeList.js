import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import dateFormat from "dateformat";
class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onSelecteStaff: null,
    };
  }
  onClickEmployee(staff) {
    this.setState({ onSelecteStaff: staff });
  }

  renderDetail(staff) {
    if (staff !== null) {
      return (
        <Col className="bg-light border p-3" style={{ textAlign: "left" }}>
          <h3>Họ và tên: {staff.name}</h3>
          <p>Ngày sinh: {dateFormat(staff.doB, "paddedShortDate")}</p>
          <p>
            Ngày vào công ty: {dateFormat(staff.startDate, "paddedShortDate")}
          </p>
          <p>Phòng ban: {staff.department.name}</p>
          <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
          <p>Số ngày đã làm thêm: {staff.overTime}</p>
        </Col>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    const staffList = this.props.staffs.map((staff) => {
      return (
        <Col
          xs="6"
          key={staff.id}
          className="bg-light border p-2"
          onClick={() => this.onClickEmployee(staff)}
          style={{ cursor: "pointer" }}
        >
          {staff.name}
        </Col>
      );
    });

    return (
      <Container>
        <Row>{staffList}</Row>
        <Row>{this.renderDetail(this.state.onSelecteStaff)}</Row>
      </Container>
    );
  }
}

export default EmployeeList;
