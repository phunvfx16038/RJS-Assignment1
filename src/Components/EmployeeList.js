import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import { Link } from "react-router-dom";
class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onSelecteStaff: null,
    };
  }
  render() {
    let dataSearch = this.props.staffs.filter((staff) => {
      return staff.name
        .toLowerCase()
        .includes(this.props.searchValue.toLowerCase());
    });

    const staffList = dataSearch.map((staff) => {
      return (
        <Col
          md="4"
          lg="2"
          key={staff.id}
          className="bg-light border p-2 text-center"
          style={{ cursor: "pointer" }}
        >
          <Link to={{ pathname: `/employeelists/${staff.id}`, state: staff }}>
            <div className="mb-2">
              <img src={staff.image} alt={staff.name} />
            </div>
            <p>{staff.name}</p>
          </Link>
        </Col>
      );
    });

    return (
      <Container>
        <Row>{staffList}</Row>
      </Container>
    );
  }
}

export default EmployeeList;
