import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FormControl } from 'react-bootstrap';


class Onepoint extends Component {

  componentDidMount() {
    console.log("componentDidmout called");
  }
  getValue() {
    var equation = document.getElementById("equation").value;
    var xm = document.getElementById("initial").value;

    do {
      var xo = xm;
      var x = xm;
      var xm = eval(equation);
    } while (Math.abs(((xm - xo) / xm) * 100) < 0.000001);
    //console.log(xm);
    var ans = xm;
    document.getElementById("showans").innerHTML = ans;
  }

  render() {
    return (
      <Container style={{ margin: "auto" }}>
        <Row style={{ textalign: "center" }}>
          <Col md={3}></Col>
          <Col md={6}>
            <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>One-point Iteration</h3>
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label step="1" column sm="3" >f(x)</Form.Label>
                <Col sm="6">
                  <FormControl id="equation" type="float" ></FormControl>
                </Col>
              </Form.Group>
            </Form>
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label step="1" column sm="3" >initial value</Form.Label>
                <Col sm="6">
                  <FormControl id="initial" type="float" ></FormControl>
                </Col>
              </Form.Group>
            </Form>
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col><Button style={{ margin: "10px 100px" }} onClick={this.getValue} variant="primary">Execute</Button></Col>
          <Col></Col>
        </Row>
        <div id="showans"></div>
      </Container>

    );
  }
}
export default Onepoint;