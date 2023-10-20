import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FormControl } from 'react-bootstrap';


class Bisection extends Component {

  componentDidMount() {
    console.log("componentDidmout called");
  }
  getValue(){
    var equation = document.getElementById("equation").value;
    var xl = document.getElementById("xl").value;
    var xr = document.getElementById("xr").value;
    do{
        var x=xr
        var fxr = eval(equation)
        var x=xl
        var fxl = eval(equation)
        var x1 = (xl*fxr - xr*fxl)/(fxr-fxl)
        var x=x1
        var fx1 = eval(equation)
        
        if(fx1*fxr<0){
            var error=(x1-xl)/x1*100
            xl=x1
        }
        else{
            var error=(x1-xr)/x1*100
            xr=x1
        }
    }while(error >= 0.000001 || error <= -0.0000001)
    var ans = x1
    //console.log(ans);
    
    document.getElementById("showans").innerHTML=ans;

}
  render() {


    return (
      <Container style={{ margin: "auto" }}>
        <Row style={{ textalign: "center" }}>
          <Col md={3}></Col>
          <Col md={6}>
            <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>False Position</h3>
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
                  <FormControl id="equation" type="text" ></FormControl>
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
                <Col sm="2"><Form.Control id="xl" type="number"  /></Col>
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
      </Container>

    );
  }
}
export default Bisection;