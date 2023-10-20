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
    var df = document.getElementById("diff").value;
    var xm = document.getElementById("xm").value;
    
    do{
      //var xo=xm;
      var x=xm;
      var fxm = eval(equation);
      var diff = eval(df);
      var xo = xm - (fxm/diff);
      var error = (xo-xm)/xo*100;
      xm = xo;
      }while(error >= 0.000001 || error <= -0.0000001)
      var ans = xo;
      document.getElementById("showans").innerHTML = ans;
  }

  render() {
    return (
      <Container style={{ margin: "auto" }}>
        <Row style={{ textalign: "center" }}>
          <Col md={3}></Col>
          <Col md={6}>
            <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>Newton Raphson</h3>
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
                <Form.Label step="1" column sm="3" >f'(x)</Form.Label>
                <Col sm="6">
                  <FormControl id="diff" type="float" ></FormControl>
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
                  <FormControl id="xm" type="float" ></FormControl>
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