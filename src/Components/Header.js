import React, { Component } from "react";
import {
  NavItem,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Navbar,
  Collapse,
  Input,
  Button,
  InputGroup,
} from "reactstrap";
import {
  AiOutlineTeam,
  AiOutlineIdcard,
  AiOutlineDollar,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      searchValue: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ searchValue: e.target.value });
  }
  handleClick() {
    this.props.searchValueInput(this.state.searchValue);
  }
  render() {
    return (
      <Navbar color="primary" expand="md" light>
        <NavbarBrand>
          <NavLink className="nav-link text-dark" to="/employeelists">
            <img
              style={{ width: "60px", height: "60px" }}
              src="https://png.pngtree.com/png-vector/20190814/ourmid/pngtree-hot-flame-icon-vector-illustration-png-image_1692132.jpg"
              alt="logo"
            />
          </NavLink>
        </NavbarBrand>
        <NavbarToggler
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
        />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="nav-link text-dark" to="/employeelists">
                <AiOutlineTeam />
                Nhân viên
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link text-dark" to="/department">
                <AiOutlineIdcard /> Phòng ban
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link text-dark" to="/salary">
                <AiOutlineDollar /> Bảng lương
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavItem style={{ listStyle: "none" }}>
          <InputGroup>
            <Input
              value={this.state.searchValue}
              onChange={this.handleChange.bind(this)}
              placeholder="search name here"
            />
            <Button onClick={this.handleClick.bind(this)}>Tìm</Button>
          </InputGroup>
        </NavItem>
      </Navbar>
    );
  }
}
export default Header;
