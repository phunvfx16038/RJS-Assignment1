import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from "reactstrap";
import { Loading } from "./Loading";
import { FadeTransform } from "react-animation-components";

class Salary extends Component {
  render() {
    let { staffsSalary, searchValue } = this.props;

    const StaffsSalaryList = () => {
      if (staffsSalary.staffsSalary !== null) {
        let dataSearch = staffsSalary.staffsSalary.filter((staff) => {
          return staff.name
            .toLowerCase()
            .includes(searchValue.search.toLowerCase());
        });

        const departmentList = dataSearch.map((staff) => {
          return (
            <Col lg="4" md="6" key={staff.id} className="border p-3 mb-2">
              <h5>Họ và tên: {staff.name}</h5>
              <p>Mã nhân viên: {staff.id}</p>
              <p>Hệ số lương: {staff.salaryScale}</p>
              <p>Số giờ làm thêm: {staff.overTime}</p>
              <p className="bg-success p-2">Lương: {staff.salary}</p>
            </Col>
          );
        });
        return departmentList;
      }
    };
    return (
      <React.Fragment>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/employeelist">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
        </Breadcrumb>
        <Container>
          {staffsSalary.isLoading ? (
            <Row>
              <Loading />
            </Row>
          ) : staffsSalary.errMess ? (
            <Row>
              <h4>{staffsSalary.errMess}</h4>
            </Row>
          ) : (
            <FadeTransform
              in
              transformProps={{
                exitTransform: "scale(0.5) translateY(-50%)",
              }}
            >
              <Row>
                <StaffsSalaryList />
              </Row>
            </FadeTransform>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

export default Salary;
