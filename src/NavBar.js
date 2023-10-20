import React from "react";
import { Navbar,Container,Nav,NavDropdown } from "react-bootstrap";

export const NavBar = () =>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Calculate</Navbar.Brand>
          <Nav className="me-auto">
          <NavDropdown
              id="nav-dropdown-dark-example"
              title="Root Of Equation"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/bisection">Bisection</NavDropdown.Item>
              <NavDropdown.Item href="/falsePosition">False Position</NavDropdown.Item>
              <NavDropdown.Item href="/onepoint">One-point Iteration</NavDropdown.Item>
              <NavDropdown.Item href="/newton">Newton Raphson</NavDropdown.Item>
              <NavDropdown.Item href="/secant">Secant Method</NavDropdown.Item>
              <NavDropdown.Item href="/mytest">Mytest</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Linear Algebra"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/cramer">Cramer's Rule</NavDropdown.Item>
              <NavDropdown.Item href="/gaussEliminate">Gauss Elimination</NavDropdown.Item>
              <NavDropdown.Item href="/matrixInverse">Matrix Inverse</NavDropdown.Item>
              <NavDropdown.Item href="/jacobi">Jacobi</NavDropdown.Item>
              <NavDropdown.Item href="/gaussSeidal">GaussSeidal</NavDropdown.Item>
              <NavDropdown.Item href="/conjugate">Conjugate Gradient</NavDropdown.Item>
              <NavDropdown.Item href="/test">test</NavDropdown.Item>
              <NavDropdown.Item href="/exam">Exam</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Interpolation"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/newtondiv">Newton's divided</NavDropdown.Item>
              <NavDropdown.Item href="/lagrange">Lagrange Polynomials</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Least Squares"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/linear">Linear Regression</NavDropdown.Item>
              <NavDropdown.Item href="/polynomial">Polynomial</NavDropdown.Item>
              <NavDropdown.Item href="/multipoly">multiple polynomial</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    );
}
export default NavBar;