import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="info" dark expand="md">
          <NavbarBrand tag={Link} to="/">
            ToDoList-MobX
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/todo">
                  List All Items
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/todo/add">
                  Add New Item
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/todo/edit">
                  Edit Items
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/todo/delete">
                  Remove Items
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
