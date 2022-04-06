import React, { Component } from "react";
import { FadeTransform } from "react-animation-components";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Container,
  Form,
  FormFeedback,
  ModalFooter,
} from "reactstrap";
import { Loading } from "./Loading";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      deleteModal: false,
      deleteId: null,
      newStaff: {
        name: "",
        doB: "",
        salaryScale: 0,
        department: "Dept01",
        startDate: "",
        annualLeave: 0,
        overTime: 0,
        image: "/assets/images/alberto.png",
      },
      touched: {
        name: false,
        doB: false,
        startDate: false,
      },
    };
    this.toggle = this.toggle.bind(this);
    this.toggleEdit = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleDeleleStaff = this.handleDeleleStaff.bind(this);
    this.toggleDeletePopup = this.toggleDeletePopup.bind(this);
    this.handleConfirmDeleteBtnModal =
      this.handleConfirmDeleteBtnModal.bind(this);
    this.handleCancleBtnModal = this.handleCancleBtnModal.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate(name, doB, salaryScale, startDate, annualLeave, overTime) {
    const errors = {
      name: "",
      doB: "",
      salaryScale: "",
      startDate: "",
      annualLeave: "",
      overTime: "",
    };
    //check name field can't be blank
    if (this.state.touched.name && name === "") {
      errors.name = "Họ và tên không được để trống!";
    }
    //check doB field can't be blank
    if (this.state.touched.doB && doB === "") {
      errors.doB = "Ngày sinh không được để trống!";
    }
    //check startDate field can't be blank
    if (this.state.touched.startDate && startDate === "") {
      errors.startDate = "Ngày vào công ty không được để trống!";
    }
    //check salaryScale field can't be blank
    if (this.state.touched.salaryScale && salaryScale === "") {
      errors.salaryScale = "Hệ số lương không được để trống!";
    }
    //check salaryScale field must be number
    else if (isNaN(salaryScale)) {
      errors.salaryScale = "Hệ số lương phải là số!";
    }
    //check salaryScale field must greater than or equal 0
    else if (parseInt(salaryScale, 10) < 0) {
      errors.salaryScale = "Hệ số lương phải lớn hơn hoặc bằng 0!";
    }
    //check annualLeave field can't be blank
    if (this.state.touched.annualLeave && annualLeave === "") {
      errors.annualLeave = "Số ngày nghỉ không được để trống!";
    }
    //check annualLeave field must be number
    else if (isNaN(annualLeave)) {
      errors.annualLeave = "Số ngày nghỉ còn lại phải là số!";
    }
    //check annualLeave field must greater than or equal 0
    else if (parseInt(annualLeave, 10) < 0) {
      errors.annualLeave = "Số ngày nghỉ phải lớn hơn hoặc bằng 0!";
    }
    //check overTime field can't be blank
    if (this.state.touched.overTime && overTime === "") {
      errors.overTime = "Số ngày làm thêm không được để trống!";
    }
    //check overTime field must be number
    else if (isNaN(overTime)) {
      errors.overTime = "Số ngày làm thêm phải là số!";
    }
    //check overTime field must greater than or equal 0
    else if (parseInt(overTime, 10) < 0) {
      errors.overTime = "Số ngày làm thêm phải lớn hơn hoặc bằng 0!";
    }
    return errors;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      newStaff: { ...this.state.newStaff, [name]: value },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.state.newStaff.name !== "" &&
      this.state.newStaff.doB !== "" &&
      this.state.newStaff.salaryScale !== "" &&
      this.state.newStaff.startDate !== "" &&
      this.state.newStaff.department !== "" &&
      this.state.newStaff.annualLeave !== "" &&
      this.state.newStaff.overTime !== ""
    ) {
      this.props.postStaff(
        this.props.id,
        this.state.newStaff.name,
        this.state.newStaff.doB,
        this.state.newStaff.salaryScale,
        this.state.newStaff.startDate,
        this.state.newStaff.department,
        this.state.newStaff.annualLeave,
        this.state.newStaff.overTime,
        this.state.newStaff.image
      );
      this.toggle();
    }
  }

  toggleDeletePopup() {
    this.setState({
      deleteModal: !this.state.deleteModal,
    });
  }

  handleDeleleStaff(id) {
    this.setState({
      deleteId: id,
    });
    this.toggleDeletePopup();
  }
  handleConfirmDeleteBtnModal() {
    this.props.deleteStaff(this.state.deleteId);
  }
  handleCancleBtnModal() {
    this.toggleDeletePopup();
  }
  render() {
    console.log(this.props.departments);
    const errors = this.validate(
      this.state.newStaff.name,
      this.state.newStaff.doB,
      this.state.newStaff.salaryScale,
      this.state.newStaff.startDate,
      this.state.newStaff.annualLeave,
      this.state.newStaff.overTime
    );

    const StaffList = () => {
      if (this.props.staffs.staffs !== null) {
        let dataSearch = this.props.staffs.staffs.filter((staff) => {
          return staff.name
            .toLowerCase()
            .includes(this.props.searchValue.search.toLowerCase());
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
              <Link
                to={{
                  pathname: `/employeelists/${staff.id}`,
                  state: staff,
                }}
              >
                <div className="mb-2">
                  <img src={staff.image} alt={staff.name} />
                </div>
                <p>{staff.name}</p>
              </Link>
              <Link
                to={{
                  pathname: `/employeelists/edit/${staff.id}`,
                  state: staff,
                }}
              >
                <Button color="success" className="mr-2">
                  Cập nhật
                </Button>
              </Link>
              <Button
                color="danger"
                onClick={() => this.handleDeleleStaff(staff.id)}
              >
                Xóa
              </Button>
            </Col>
          );
        });
        return staffList;
      }
    };

    return (
      <Container>
        <div>
          Nhân viên
          <Button color="success" onClick={this.toggle} className="my-3">
            +
          </Button>
        </div>
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
              <StaffList />
            </Row>
          </FadeTransform>
        )}
        {/* ADD new staff modal */}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <Row className="form-group">
                <Label htmlFor="exampleName" sm={4}>
                  Tên
                </Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Họ và tên"
                    className="form-control"
                    valid={errors.name === ""}
                    invalid={errors.name !== ""}
                    onBlur={this.handleBlur("name")}
                    value={this.state.newStaff.name}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.name}</FormFeedback>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="doB" sm={4}>
                  Ngày sinh
                </Label>
                <Col sm={8}>
                  <Input
                    className="form-control"
                    id="doB"
                    name="doB"
                    placeholder="dd/mm/yyyy"
                    type="date"
                    value={this.state.newStaff.doB}
                    valid={errors.doB === ""}
                    invalid={errors.doB !== ""}
                    onBlur={this.handleBlur("doB")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.doB}</FormFeedback>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="workday" sm={4}>
                  Ngày vào công ty
                </Label>
                <Col sm={8}>
                  <Input
                    className="form-control"
                    id="startDate"
                    name="startDate"
                    placeholder="dd/mm/yyyy"
                    value={this.state.newStaff.startDate}
                    valid={errors.startDate === ""}
                    invalid={errors.startDate !== ""}
                    onBlur={this.handleBlur("startDate")}
                    onChange={this.handleInputChange}
                    type="date"
                  />
                  <FormFeedback>{errors.startDate}</FormFeedback>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="departmentInput" sm={4}>
                  Phòng ban
                </Label>
                <Col sm={8}>
                  <Input
                    id="department"
                    name="department"
                    type="select"
                    value={this.state.newStaff.department}
                    onChange={this.handleInputChange}
                  >
                    <option value={"Dept01"}>Sale</option>
                    <option value={"Dept02"}>HR</option>
                    <option value={"Dept03"}>Marketing</option>
                    <option value={"Dept04"}>IT</option>
                    <option value={"Dept05"}>Finance</option>
                  </Input>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="exampleName" sm={4}>
                  Hệ số lương
                </Label>
                <Col sm={8}>
                  <Input
                    name="salaryScale"
                    type="text"
                    value={this.state.newStaff.salaryScale}
                    onChange={this.handleInputChange}
                    valid={errors.salaryScale === ""}
                    invalid={errors.salaryScale !== ""}
                    onBlur={this.handleBlur("salaryScale")}
                  />
                  <FormFeedback>{errors.salaryScale}</FormFeedback>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="annualLeave" sm={4}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col sm={8}>
                  <Input
                    name="annualLeave"
                    type="text"
                    value={this.state.newStaff.annualLeave}
                    valid={errors.annualLeave === ""}
                    invalid={errors.annualLeave !== ""}
                    onBlur={this.handleBlur("annualLeave")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.annualLeave}</FormFeedback>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="overTime" sm={4}>
                  Số ngày làm thêm
                </Label>
                <Col sm={8}>
                  <Input
                    name="overTime"
                    type="text"
                    value={this.state.newStaff.overTime}
                    valid={errors.overTime === ""}
                    invalid={errors.overTime !== ""}
                    onBlur={this.handleBlur("overTime")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.overTime}</FormFeedback>
                </Col>
              </Row>
              <Button color="primary" disable={this.state.touched}>
                Thêm
              </Button>
            </Form>
          </ModalBody>
        </Modal>

        {/* Delete Modal */}
        <Modal toggle={this.toggleDeletePopup} isOpen={this.state.deleteModal}>
          <ModalBody>Bạn có chắc muốn xóa nhân viên này?</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleConfirmDeleteBtnModal}>
              Xác nhận
            </Button>{" "}
            <Button onClick={this.handleCancleBtnModal}>Hủy</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default EmployeeList;
