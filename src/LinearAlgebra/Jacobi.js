import { Component, React } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Jacobi extends Component{
    constructor() {
        super();
        console.log("constructor called");
    }
    componentDidMount() {
        console.log("componentDidmout called");
        this.createinputbox();
    }
    
    createinputbox =()=>{
        var Size = document.getElementById("Matsize").value;
        console.log(Size)
        var MatString = '';
        for(var i=0;i<Size;i++){
          for(var j=0;j<Size;j++){
            MatString +="<input id='Mat"+i+j+"' type='float' style='width:50px;margin:1px'/>";
          }
          MatString +=" | <input id='Matans"+i+"0' type='float' style='width:50px;margin:1px'/>";
          MatString +="<br>";
        }
        //console.log(MatString);
        document.getElementById("MatInput").innerHTML=MatString;
    }
    Jacobi =()=>{
        // var met = [[5, 2, 0, 0], [2, 5, 2,0], [0, 2, 5, 2], [0, 0, 2, 5]];
        // var metans = [12, 17, 14,7];
        var Size = document.getElementById("Matsize").value;
        var met=[]
        var metans=[]
        var metx = []
        
        var count
        var dividevar
        var n = 0
        
        for(let i=0;i<Size;i++){
            met.push([]);
            for(let j=0;j<Size;j++){
                met[i].push(document.getElementById("Mat"+i+j).value)
            }
            metx.push(0)
            metans.push(document.getElementById("Matans"+i+"0").value)
        }
        console.log(met,metans,metx)
        var metxold = metx.slice()
        do {
            for(let i = 0; i < met.length; i++) {
                dividevar = met[i][i];
                metx[i]=metans[i];
                for(let j = 0; j < met[i].length; j++){
                    if(i!==j){
                        metx[i]-=(met[i][j]*metxold[j]);
                    }
                }
                metx[i]/=dividevar;
            }
            count = 0;
            for(let i = 0; i < metx.length; i++) {
                if(Math.abs((metx[i]-metxold[i])/metx[i])*100<=0.001){count++;}
                metxold[i]=metx[i];
            }
            console.log(++n);
        }while(count!==metx.length);
        var ans='';
        for(let i = 0; i < met.length; i++) {
            ans += "x"+(i+1)+ " = "+metx[i]+"<br/>"
            // console.log("x"+(i+1)+" = "+metx[i]);
        }
        document.getElementById("show").innerHTML=ans;
    }
    render() {
        
        return (
            <Container style={{ margin: "auto"}}>
            <Row style={{textalign: "center"}}>
                <Col md={3}></Col>
                <Col md={6}>
                <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Jacobi</h3>
                </Col>
                <Col md={3}></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col >
                    <Form.Group  as={Row} className="mb-2">
                        <Form.Label column sm="7">Matrix dimension:</Form.Label>
                        <Col sm="3"><Form.Select onChange={this.createinputbox} id="Matsize" aria-label="Default select example">
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </Form.Select></Col>
                        </Form.Group>
                </Col>
                <Col></Col>
            </Row>
           
            <div id="MatInput"></div>
            <Row>
                <Col></Col>
                <Col><Button style={{margin:"10px"}} onClick={this.MatrixInverse}  variant="primary">Execute</Button>
                </Col>
                <Col></Col>  
            </Row>
            <div id='show'>

            </div>
            </Container>
            
        );
    }
}
export default Jacobi;