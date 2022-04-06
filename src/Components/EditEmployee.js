import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
} from "reactstrap";
import { putStaff } from "../redux/ActionCreater";

const mapDispatchToProps = (dispatch) => ({
  putStaff: (
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
      putStaff(
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
});
class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editStaff: {
        name: this.props.location.state.name,
        doB: this.props.location.state.doB.slice(0, 10),
        salaryScale: this.props.location.state.salaryScale,
        departmentId: this.props.location.state.departmentId,
        startDate: this.props.location.state.startDate.slice(0, 10),
        annualLeave: this.props.location.state.annualLeave,
        overTime: this.props.location.state.overTime,
        image: this.props.location.state.image || "/assets/images/alberto.png",
      },
      touched: {
        name: false,
        doB: false,
        startDate: false,
      },
      modal: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.togglePopUp = this.togglePopUp.bind(this);
    this.handlePopUp = this.handlePopUp.bind(this);
  }

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
      editStaff: { ...this.state.editStaff, [name]: value },
    });
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  handleEditSubmit(e) {
    e.preventDefault();
    this.props.putStaff(
      this.props.location.state.id,
      this.state.editStaff.name,
      this.state.editStaff.doB,
      this.state.editStaff.salaryScale,
      this.state.editStaff.startDate,
      this.state.editStaff.departmentId,
      this.state.editStaff.annualLeave,
      this.state.editStaff.overTime,
      this.state.editStaff.image
    );
    this.togglePopUp();
  }

  togglePopUp() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  handlePopUp() {
    let path = `/employeelist`;
    this.props.history.push(path);
    this.togglePopUp();
  }
  render() {
    const errors = this.validate(
      this.state.editStaff.name,
      this.state.editStaff.doB,
      this.state.editStaff.salaryScale,
      this.state.editStaff.startDate,
      this.state.editStaff.annualLeave,
      this.state.editStaff.overTime
    );
    return (
      <Container>
        <Row className="my-3">
          <Form onSubmit={this.handleEditSubmit}>
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
                  value={this.state.editStaff.name}
                  onChange={this.handleInputChange}
                  valid={errors.name === ""}
                  invalid={errors.name !== ""}
                  onBlur={this.handleBlur("name")}
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
                  onChange={this.handleInputChange}
                  value={this.state.editStaff.doB}
                  valid={errors.name === ""}
                  invalid={errors.name !== ""}
                  onBlur={this.handleBlur("doB")}
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
                  type="date"
                  onChange={this.handleInputChange}
                  value={this.state.editStaff.startDate}
                  valid={errors.name === ""}
                  invalid={errors.name !== ""}
                  onBlur={this.handleBlur("statrDate")}
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
                  id="departmentId"
                  name="departmentId"
                  type="select"
                  value={this.state.editStaff.departmentId}
                  onChange={this.handleInputChange}
                  valid={errors.name === ""}
                  invalid={errors.name !== ""}
                  onBlur={this.handleBlur("departmentId")}
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
                  onChange={this.handleInputChange}
                  value={this.state.editStaff.salaryScale}
                  valid={errors.name === ""}
                  invalid={errors.name !== ""}
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
                  onChange={this.handleInputChange}
                  value={this.state.editStaff.annualLeave}
                  valid={errors.name === ""}
                  invalid={errors.name !== ""}
                  onBlur={this.handleBlur("annualLeave")}
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
                  onChange={this.handleInputChange}
                  value={this.state.editStaff.overTime}
                  valid={errors.name === ""}
                  invalid={errors.name !== ""}
                  onBlur={this.handleBlur("overTime")}
                />
                <FormFeedback>{errors.overTime}</FormFeedback>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="exampleImage" sm={4}>
                Hình ảnh
              </Label>
              <Col sm={8}>
                <Input
                  name="image"
                  type="text"
                  onChange={this.handleInputChange}
                  value={this.state.editStaff.image}
                />
                <FormFeedback>{errors.salaryScale}</FormFeedback>
              </Col>
            </Row>
            <Button color="primary">Thêm</Button>
          </Form>
        </Row>
        <Modal toggle={this.togglePopUp} isOpen={this.state.modal}>
          <ModalBody>Cập nhật thành công!</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handlePopUp}>
              Xác nhận
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
export default connect(null, mapDispatchToProps)(EditEmployee);
