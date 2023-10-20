import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FormControl } from 'react-bootstrap';


class Newton extends Component {

  componentDidMount() {
    console.log("componentDidmout called");
  }
  getValue() {
    var equation = document.getElementById("equation").value;
    var x0 = document.getElementById("x0").value;
    var x1 = document.getElementById("x1").value;
    console.log(equation);
    console.log(x0);
    console.log(x1);
    do{
    var x=x1;
    var fx1 = eval(equation);
    var x=x0;
    var fx0 = eval(equation);
    var dfx = (fx1-fx0)/(x1-x0)
    var x = x1 - (fx1/dfx)
    console.log(x)
    var error = (x-x1)/x*100
    x0=x1
    x1=x
    }while(error >= 0.000001 || error <= -0.0000001);
    var ans = x
    console.log(ans);
    document.getElementById("showans").innerHTML = ans;
  }

  render() {
    return (
      <Container style={{ margin: "auto" }}>
        <Row style={{ textalign: "center" }}>
          <Col md={3}></Col>
          <Col md={6}>
            <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>Secant Method</h3>
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
                <Form.Label step="1" column sm="3" >initial value x0</Form.Label>
                <Col sm="6">
                  <FormControl id="x0" type="float" ></FormControl>
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
                <Form.Label step="1" column sm="3" >initial value x1</Form.Label>
                <Col sm="6">
                  <FormControl id="x1" type="float" ></FormControl>
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
export default Newton;