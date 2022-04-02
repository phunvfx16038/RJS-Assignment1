import React, { Component } from "react";
import {
  Button,
  Col,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { LocalForm, Control } from "react-redux-form";
class ModalInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Button color="success" onClick={this.toggle} className="my-3">
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
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
                  />
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
                  />
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
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="department" sm={4}>
                  Phòng ban
                </Label>
                <Col sm={8}>
                  <Input id="department" name="department" type="select">
                    <option>Sale</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </Input>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="exampleName" sm={4}>
                  Hệ số lương
                </Label>
                <Col sm={8}>
                  <Input name="salaryScale" type="text" />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="annualLeave" sm={4}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col sm={8}>
                  <Input name="annualLeave" type="text" />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="overTime" sm={4}>
                  Số ngày làm thêm
                </Label>
                <Col sm={8}>
                  <Input name="overTime" type="text" />
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Thêm
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
export default ModalInput;
