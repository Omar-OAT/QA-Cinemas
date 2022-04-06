import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/qacinema.png";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="navbarpointer">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
            <img
              src={logo}
              className="d-inline-block align-top"
              width="75"
              height="55"
              alt="Home Page Logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem style={{ color: "white" }}>
                <NavLink href="/aboutus">About Us</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Gallery
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem href="/newreleases">New Releases</DropdownItem>
                  <DropdownItem href="/listingsgallery">
                    Listings Gallery
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/screens">Screens</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ticketbookings">Ticket Bookings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/classifications">Classifications</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/openingtimes">Opening Times</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/places">Places To Go</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/gettingthere">Getting There</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/discussion">Discussion</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contactus">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/search">Search</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
