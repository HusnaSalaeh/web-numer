import { React, Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


class GaussEliminate extends Component {
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
    printmat = (mat) => {
        var ret = "<table style='margin:0 auto;border-left: 2px solid black;border-right: 2px solid black;'>";
        for (let i = 0; i < mat.length; i++) {
            ret += "<tr>";
            for (let j = 0; j < mat[0].length; j++) {
                ret += "<td  style='padding:10px;'>"+mat[i][j]+"</td>";
            }
        }
        ret += "</table>"
        return ret;
    };
    GaussEliminate=()=>{
        var Size = document.getElementById("Matsize").value;
        var mat=[];
        var matans=[];
        //console.log("CramersRule");
      
        for(let i=0;i<Size;i++){
            mat.push([]);
            for(let j=0;j<Size;j++){
                //console.log("mat"+i+j);
                mat[i].push(document.getElementById("Mat"+i+j).value);
                
               
            }
            console.log(mat[i]);
            matans.push([]);
            matans[i].push(document.getElementById("Matans"+i+"0").value);
            console.log(matans[i]);
            
        }
        var ret='';
        for(let i=0; i<mat.length; i++) {
            for(let j=i+1; j<mat.length; j++){
                var multivar = mat[j][i];
                if(i+1<=mat.length){
                    for(let k=0; k<mat.length; k++){
                        var x = (mat[j][k]-((mat[i][k]/mat[i][i])*multivar));
                        //console.log(mat[j][k],mat[i][k],mat[i][i],multivar);
                        mat[j][k] = x;
                    }
                    var y = (matans[j][0]-((matans[i][0]/mat[i][i])*multivar));
                    //console.log(matans[j][0],matans[i][0],mat[i][i],multivar);
                    matans[j][0] = y;
                }
                ret += "<table><tr>";
                ret += "<td>"+this.printmat(mat)+"</td>";
                ret += "<td>"+this.printmat(matans)+"</td>";
                ret +="</tr></table>"
            }
            
        }
        document.getElementById("solution").innerHTML = ret;
        x=[];
        for(let j=0; j<mat.length; j++){
            x.push(null);
        }
        for(let i=mat.length-1; i>=0; i--) {
            var ans = 0;
            for(let j=mat.length-1; j>=0; j--){
                if(x[j]!=null && mat[i][j]!=0){
                    matans[i][0] = matans[i][0]-(mat[i][j]*x[j]);
                }else if(mat[i][j]!=0){
                    ans += matans[i][0]/mat[i][j];
                }
            }
            x[i]=ans;
        }
        var ans='';
        for(let j=0; j<mat.length; j++){
            ans += "x"+String(j+1)+" = "+String(x[j])+"<br>";
        }
        document.getElementById("show").innerHTML=ans;
    }
    render() {
        
        return (
            <Container style={{ margin: "auto"}}>
            <Row style={{textalign: "center"}}>
                <Col md={3}></Col>
                <Col md={6}>
                <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Gauss Elimination</h3>
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
                <Col><Button style={{margin:"10px"}} onClick={this.GaussEliminate}  variant="primary">Execute</Button>
                </Col>
                <Col></Col>  
            </Row>
            <div id='show'>

            </div>
            <div id="solution"></div>
            </Container>
            
        );
    }
}
export default GaussEliminate;