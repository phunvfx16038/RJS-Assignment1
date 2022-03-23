import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

class ModalInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }
  togglePopup() {
    this.setState({ modal: !this.state.modal });
  }
  render() {
    return (
      <React.Fragment>
        <Button color="danger" onClick={this.togglePopup.bind(this)}>
          Click Me
        </Button>
        <Modal
          external={
            <button
              className="close"
              onClick={this.togglePopup.bind(this)}
              style={{ position: "absolute", right: "15px", top: "15px" }}
            >
              ×
            </button>
          }
          toggle={this.togglePopup.bind(this)}
        >
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            <b>Look at the top right of the page/viewport!</b>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.togglePopup.bind(this)}>
              Do Something
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
export default ModalInput;
