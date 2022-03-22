import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Container,
  Input,
  InputGroup,
  Row,
} from "reactstrap";

class Salary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }
  handleChange(e) {
    this.setState({ searchValue: e.target.value });
  }
  render() {
    let { searchValue } = this.state;
    let { staffs } = this.props;

    let dataSearch = staffs.filter((staff) => {
      return staff.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    const departmentList = dataSearch.map((staff) => {
      return (
        <Col lg="4" md="6" key={staff.id} className="border p-3 mb-2">
          <h5>Họ và tên: {staff.name}</h5>
          <p>Mã nhân viên: {staff.id}</p>
          <p>Hệ số lương: {staff.salaryScale}</p>
          <p>Số giờ làm thêm: {staff.overTime}</p>
          <p className="bg-success p-2">
            Lương:{" "}
            {parseInt(staff.salaryScale, 10) * 3000000 +
              parseInt(staff.overTime / 8, 10) * 200000}
          </p>
        </Col>
      );
    });
    return (
      <React.Fragment>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/employeelist">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
        </Breadcrumb>
        <Container>
          <InputGroup className="mb-3">
            <Input
              value={searchValue}
              onChange={this.handleChange.bind(this)}
              placeholder="search name here"
            />
          </InputGroup>
          <Row>{departmentList}</Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Salary;
