import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FormControl } from 'react-bootstrap';
import * as ReactDOM from "react-dom";
import ApexChart from "./ApexCharts"; 

var Xm = [];
var Xl = [];
var Xr = [];
var Xloop = [];
class Bisection extends Component {
  
  getValue(){
    const showchart = ReactDOM.createRoot(document.getElementById("showchart"));
    var num= document.getElementById("number").value;
    var root= document.getElementById("rootof").value;
    var xl = document.getElementById("xl").value;
    var xr = document.getElementById("xr").value;
    
    var xm = (xl+xr)/2;
    while(Math.abs( Math.pow(xm,root)-num )>=0.000001){
        if(Math.pow(xm,root)-num >0) xr=xm; 
        else xl=xm;
        xm = (xl+xr)/2;
    }
    //console.log(xm);
    showchart.render(
      <div>
        <ApexChart data={{xm:Xm, xl:Xl,xr: Xr,xloop: Xloop}} />
      </div>
  );
    document.getElementById("showans").innerHTML=xm;
 }

  render() {
    return (
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>Bisection Method</h3>
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3" >Number</Form.Label>
                <Col sm="6">
                  <FormControl id="number" type="number" ></FormControl>
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
                <Form.Label  column sm="3">Square Root</Form.Label>
                <Col sm="6">
                  <FormControl id="rootof" type="number" ></FormControl>
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
              <Form.Group as={Row} >
                <Form.Label column sm="3">root between</Form.Label>
                <Col sm="2"><Form.Control id="xl" type="number" /></Col>
                <Form.Label column sm="2">and</Form.Label>
                <Col sm="2"><Form.Control id="xr" type="number" /></Col>
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
        <div id="showchart">
            <ApexChart data={{xm:Xm, xl:Xl,xr: Xr,xloop: Xloop}} />
        </div>
      </Container>

    );
  }
}
export default Bisection;