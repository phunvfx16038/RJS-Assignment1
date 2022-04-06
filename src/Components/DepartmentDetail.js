import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../Data/baseUrl";

class DepartmentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: [],
      staffName: null,
    };
  }

  componentDidMount() {
    fetch(baseUrl + "departments/" + this.props.location.state.id)
      .then((response) => response.json())
      .then((staff) => {
        this.setState({ staffs: staff });
      });
  }
  render() {
    const { staffs } = this.state;
    const RenderDetail = () => {
      if (staffs !== null) {
        const staffDetail = staffs.map((staff) => {
          return (
            <Col
              md="4"
              lg="2"
              key={staff.id}
              className="bg-light border p-2 text-center"
              style={{ cursor: "pointer" }}
            >
              <Link
                to={{ pathname: `/employeelists/${staff.id}`, state: staff }}
              >
                <div className="mb-2">
                  <img src={staff.image} alt={staff.name} />
                </div>
                <p>{staff.name}</p>
              </Link>
            </Col>
          );
        });
        return staffDetail;
      }
    };
    return (
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/department">Phòng ban</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{this.props.location.state.id}</BreadcrumbItem>
        </Breadcrumb>
        <Row>
          <RenderDetail />
        </Row>
      </Container>
    );
  }
}

export default DepartmentDetail;
